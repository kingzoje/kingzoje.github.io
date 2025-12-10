import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const email = "emmanuelabo20@gmail.com";

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary font-mono">04. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open. I'll try my best to get back to you!
          </p>
          
          <Button 
            size="lg" 
            className="text-lg h-14 px-8"
            asChild
          >
            <a 
              href={`mailto:${email}`}
              data-testid="button-contact-email"
            >
              <Mail className="w-5 h-5 mr-2" /> Say Hello
            </a>
          </Button>

          <p className="mt-6 text-muted-foreground font-mono text-sm">
            {email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
