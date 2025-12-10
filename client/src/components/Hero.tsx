import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-4 text-lg">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Imoukhuede Abolagba
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8">
              I build <span className="text-foreground">digital experiences</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Software Engineer specializing in Fullstack Web Development, Game Development, and Mobile Apps. 
              I transform complex problems into elegant, scalable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="text-base" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex gap-6 text-muted-foreground"
          >
            <a href="https://github.com/kingzoje" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
            <a href="https://linkedin.com/in/abolagba-imoukhuede" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
