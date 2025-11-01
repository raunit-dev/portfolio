import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/utils";

export default function Web3Projects() {
  return (
    <Card className="md:col-span-7 md:row-span-2 ">
      <CardContent className="flex flex-col gap-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:h-45">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col h-full border-b-2 p-5 gap-3">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-md font-bold leading-tight">{project.title}</h1>
                  <FaGithub className="w-5 h-5 flex-shrink-0 text-muted-foreground hover:text-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}