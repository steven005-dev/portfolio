import { Github, Linkedin, Mail } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Steven Amani. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <button onClick={() => {
              try {
                const email = atob('c3RldmVuYW1hbmkxMzBAZ21haWwuY29t');
                window.location.href = `mailto:${email}`;
              } catch (err) {
                console.error(err);
              }
            }} className="p-2 rounded-lg hover:bg-accent transition-colors" aria-label="Email">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
            <a href="https://github.com/steven005-dev?tab=overview&from=2025-12-01&to=2025-12-31" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-accent transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/steven-amani-37a237329/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}