"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Personal() {
  const learningItems = [
    {
      title: "Turbine Builders Cohort",
      status: "Graduated",
      link: "https://turbin3.org/", // Add your link here
    },
    {
      title: "Turbine Advanced Cohort",
      status: "Ongoing",
      link: "https://turbin3.org/", // Add your link here
    },
    {
      title: "Superdev Fellowship Solana",
      status: "Ongoing",
      link: "https://www.superdev.fun/", // Add your link here
    },
    {
      title: "BlueShift",
      status: "Ongoing",
      link: "https://blueshift.gg/#", // Add your link here
    },
    {
      title: "Ackee Solana",
      status: "Ongoing",
      link: "https://ackee.xyz/school-of-solana"
    }
  ];

  return (
    <Card className="md:col-span-3 md:row-span-2 p-4 md:overflow-y-auto max-h-full">
      <h2 className="text-xl font-bold mb-4">What Am I Learning</h2>
      <div className="grid gap-4">
        {learningItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex items-center space-x-2">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {item.title}
              </Link>
            </div>
            <span
              className={`text-sm px-2 py-1 rounded ${
                item.status === "Graduated"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}