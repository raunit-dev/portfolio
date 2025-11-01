import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Stats() {
  return (
    <Card className="md:col-span-3 md:row-span-2">
      <CardContent className="space-y-2">
        <div className="mt-4">
          <Image
            src="https://github-readme-stats.vercel.app/api?username=raunit-dev&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
            alt="GitHub Stats"
            className="rounded-lg"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
