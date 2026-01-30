const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function transformFile(file) {
  const ext = path.extname(file);
  if (!['.ts', '.tsx'].includes(ext)) return;
  const src = fs.readFileSync(file, 'utf8');
  try {
    const isTSX = ext === '.tsx';
    const result = babel.transformSync(src, {
      presets: [[require('@babel/preset-typescript'), { isTSX, allExtensions: isTSX ? true : false }]],
      filename: file,
      babelrc: false,
      configFile: false,
    });

    const outExt = ext === '.tsx' ? '.jsx' : '.js';
    const outFile = file.slice(0, -ext.length) + outExt;
    fs.writeFileSync(outFile, result.code, 'utf8');
    console.log('Converted', file, '->', outFile);
  } catch (err) {
    console.error('Failed to transform', file, err);
    process.exitCode = 1;
  }
}

function main() {
  const root = path.resolve(__dirname, '..');
  const srcDir = path.join(root, 'src');
  const files = walk(srcDir);
  const targets = files.filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
  if (targets.length === 0) {
    console.log('No .ts/.tsx files found');
    return;
  }
  for (const file of targets) transformFile(file);
  console.log('Done. Review outputs and delete originals if OK.');
}

main();
