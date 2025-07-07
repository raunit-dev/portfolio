"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import PushButton from "./os/pushbutton";

export default function CodingProfile() {
  return (
    <Card className="md:col-span-2 md:row-span-2 md:overflow-hidden rounded-lg shadow-lg" style={{ backgroundColor: '#91151a' }}>
      <CardContent className="p-0">
        <div className="flex flex-col gap-4 p-4 items-center justify-center h-full text-center">
          <Link
            href="https://leetcode.com/u/5XdnzpcMli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PushButton>
              <div className="rounded p-1 h-12 w-12 flex items-center justify-center">
                <Image
                  width={48}
                  height={48}
                  alt="leetcode-logo"
                  src="/leetcode-color.png"
                  className="rounded"
                />
              </div>
            </PushButton>
          </Link>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Not a CP guy</h2>
            <h2 className="text-2xl font-bold text-white">Always wanted to be a SOLANA engineer</h2>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}