import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/utils";

export default function Web3Projects() {
  return (
    <Card className="md:col-span-7 md:row-span-2 ">
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-45">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col h-full border-b-2 p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-bold">{project.title}</h1>
                  <FaGithub className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold">
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