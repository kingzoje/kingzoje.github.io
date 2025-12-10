import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Imoukhuede Abolagba. All rights reserved.
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/kingzoje" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/abolagba-imoukhuede" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-full hover:bg-primary/10 hover:text-primary">
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
}
