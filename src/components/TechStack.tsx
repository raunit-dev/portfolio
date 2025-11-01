import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techGroups = [
  {
    title: "Languages & Web Technologies",
    items: [
      "Anchor",
      "Pinocchio",
      "Rust",
      "Solana"
    ],
  },
  {
    title: "Backend & Tools",
    items: [
      "SurfPool",
      "Switchboard",
      "Git",
      "GitHub",
      "Nginx",
      "Mocha",
      "MagicBlock",
    ],
  },
  {
    title: "AI",
    items: [
      "Claude",
      "Chatgpt",
      "Grok",
      "Myself",
    ],
  }
];

export default function TechStack() {
  return (
    <Card className="md:col-span-9 md:row-span-2 h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Tech Stack</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2">
        {techGroups.map((group) => (
          <div key={group.title} className="space-y-2 border-r-2">
            <h3 className="font-bold text-lg">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <Badge variant="outline" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
