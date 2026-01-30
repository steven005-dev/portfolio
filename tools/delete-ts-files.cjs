const fs = require('fs');
const path = require('path');

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

function main() {
  const root = path.resolve(__dirname, '..');
  const srcDir = path.join(root, 'src');
  const files = walk(srcDir);
  const targets = files.filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
  if (targets.length === 0) {
    console.log('No .ts/.tsx files found to delete');
    return;
  }
  for (const f of targets) {
    try {
      fs.unlinkSync(f);
      console.log('Deleted', f);
    } catch (err) {
      console.error('Failed to delete', f, err);
    }
  }
  console.log('Deletion done.');
}

main();
