import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Layout,
  Smartphone,
  Gamepad2,
  Server,
  Terminal,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "REST APIs Integration",
      "WebSockets",
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Game Development",
    icon: Gamepad2,
    items: [
      "Unity",
      "C#",
      "HTML5",
      "WebGL",
      "Photon",
      "Real-Money Gaming",
      "Slots",
      "RNG Algorithms",
      "Web3 & Blockchain",
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      "React Native",
      ".NET",
      "Flutter",
      "iOS (Swift)",
      "Android (Kotlin)",
      "Firebase",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary font-mono">02.</span> Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My technical toolbox and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <skillGroup.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
