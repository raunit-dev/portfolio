"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Spotify } from "react-spotify-embed";
import { FaFileDownload, FaMagic } from "react-icons/fa";

export default function ProfileCard() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Card className="md:col-span-6 md:row-span-2 rounded-xl border border-muted shadow-sm relative">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1949519716407508992/AoSnt2Pn_400x400.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-lg leading-tight">Raunit.</h2>
            <p className="text-sm text-muted-foreground">@ig_raunit</p>
          </div>

          <Button
            onClick={handleToggle}
            className="p-1 rounded bg-white dark:bg-white hover:scale-105 transition-transform cursor-pointer"
          >
            <Image
              src="/toogle.webp"
              alt="Toggle Theme"
              width={32}
              height={32}
              className="rounded"
            />
          </Button>
        </div>
      </CardHeader>
      <div className="flex flex-col m-4 ">
        <div>
          <h1>Focused on Solana. Obsessed with execution.</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between ">
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/12R-ulhV1gsJl5CD7lfEGbVc2s184w2FI/view?usp=drive_link" //todo make your own resume
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <FaFileDownload className="w-4 h-4" />
                Resume
              </Button>
            </a>
            <a
              href="https://www.notion.so/POW-207d219f96048023adcec11e63e76521?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <FaMagic className="w-4 h-4" />
                {`POW`}
              </Button>
            </a>
          </div>

          <div className="backdrop:blur-sm ">
            <Spotify
              wide
              width={300}
              link="https://open.spotify.com/track/6rFckZb1cuJYzsZiGHgqks?si=13fa125a684a402f"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
