import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectCard({ project, highlighted = false }) {
  return (
    <Card className={`bg-gray-800 border border-gray-700 overflow-hidden ${highlighted ? 'col-span-1 lg:col-span-2' : ''}`}>
      <div className={`relative ${highlighted ? 'h-64' : 'h-48'}`}>
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2 text-purple-300">{project.title}</h4>
        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs bg-gray-700 text-purple-300 border-purple-300">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}