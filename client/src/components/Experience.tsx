import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experience = [
  {
    id: 1,
    role: "Lead Game Developer",
    company: "Shacks Evolution Studios",
    period: "2022 - 2025",
    description:
      "Collaborated with a team of experts on the development of casino and real money games.",
  },
  {
    id: 2,
    role: "Freelancer",
    company: "Upwork",
    period: "2021 - Present",
    description:
      "Worked remotely with various clients across the globe to build scalable applications utilizing robust tech stack.",
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Zoje Virtual Studios",
    period: "2019 - Present",
    description:
      "Designed, developed and published casual games and cross-platform applications as an independent developer.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary font-mono">03.</span> Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey and career highlights.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:items-start md:pr-12" : "md:items-end md:pl-12"}`}
                  >
                    <span className="font-mono text-primary text-sm mb-1 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> {job.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                    <p
                      className={`text-muted-foreground leading-relaxed ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      {job.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
