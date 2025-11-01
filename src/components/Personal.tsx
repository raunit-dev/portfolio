"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaCheckCircle, FaSpinner, FaBriefcase } from "react-icons/fa";

export default function Personal() {
  const learningItems = [
    {
      title: "BlueShift",
      status: "Ongoing",
      type: "ongoing",
      link: "https://blueshift.gg/#",
    },
    {
      title: "Superdev Fellowship Solana",
      status: "Graduated",
      type: "graduated",
      link: "https://www.superdev.fun/",
    },
    {
      title: "Turbine3 Fellowship",
      status: "Removed from program",
      type: "removed",
      link: "https://turbin3.org/",
    },
  ];

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "graduated":
        return <FaCheckCircle className="w-5 h-5 text-green-500" />;
      case "ongoing":
        return <FaSpinner className="w-5 h-5 text-blue-500" />;
      case "removed":
        return <FaBriefcase className="w-5 h-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusStyle = (type: string) => {
    switch (type) {
      case "graduated":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20";
      case "ongoing":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20";
      case "removed":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border border-gray-500/20";
      default:
        return "";
    }
  };

  return (
    <Card className="md:col-span-3 md:row-span-2 p-6 md:overflow-y-auto max-h-full">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        What Am I Learning
      </h2>
      <div className="flex flex-col gap-4">
        {learningItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex flex-col gap-3 p-4 rounded-lg border border-muted hover:border-primary/50 hover:bg-accent/50 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  {getStatusIcon(item.type)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="ml-8">
                <span
                  className={`inline-block text-xs font-medium px-3 py-1.5 rounded-full ${getStatusStyle(
                    item.type
                  )}`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}