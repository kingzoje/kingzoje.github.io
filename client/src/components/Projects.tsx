import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Play, Code2, Gamepad2, Smartphone } from "lucide-react";
import betedgeImage from "@assets/generated_images/sports_betting_analytics_concept.png";
import jumpyBugImage from "@assets/generated_images/2d_shooter_game_with_bug_and_monsters.png";

const projects = [
  {
    id: 1,
    title: "BetEdge",
    description: "Advanced betting analytics platform with ML-powered predictions. Get edge-based recommendations across basketball, tennis, hockey, and baseball.",
    tags: ["React", "TanStack Query", "Express", "Drizzle ORM", "PostgreSQL"],
    category: "fullstack",
    image: betedgeImage,
    actionType: "link",
    actionUrl: "https://betedge.replit.app",
    actionLabel: "View Live"
  },
  {
    id: 2,
    title: "Analytica",
    description: "Mobile app to calculate probabilities and predict winners of table tennis matches. Track bets, profit, and accuracy with intelligent insights.",
    tags: ["C#", "Android SDK", "IL2CPP", "Gradle", "Unity"],
    category: "mobile",
    image: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=800&q=80",
    actionType: "download",
    actionUrl: "/Analytica.apk",
    actionLabel: "Download APK"
  },
  {
    id: 3,
    title: "Jumpy Bug",
    description: "A fun shoot 'em up 2D WebGL game. Dodge obstacles and blast your way through waves of enemies!",
    tags: ["Unity", "C#", "WebGL", "HTML5", "CSS"],
    category: "game",
    image: jumpyBugImage,
    actionType: "play",
    actionUrl: "/games/jumpy-bugs/index.html",
    actionLabel: "Play Game"
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: null },
  { id: "fullstack", label: "Fullstack", icon: Code2 },
  { id: "game", label: "Game Dev", icon: Gamepad2 },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleAction = (project: typeof projects[0]) => {
    if (project.actionType === "download") {
      const link = document.createElement("a");
      link.href = project.actionUrl;
      link.download = "Analytica.apk";
      link.click();
    } else {
      window.open(project.actionUrl, "_blank");
    }
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case "download": return <Download className="w-4 h-4 mr-2" />;
      case "play": return <Play className="w-4 h-4 mr-2" />;
      default: return <ExternalLink className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary font-mono">01.</span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work across different domains.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className="gap-2"
              data-testid={`filter-${cat.id}`}
            >
              {cat.icon && <cat.icon className="w-4 h-4" />}
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group border-border hover:border-primary/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => handleAction(project)}
                    data-testid={`button-project-${project.id}`}
                  >
                    {getActionIcon(project.actionType)}
                    {project.actionLabel}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
