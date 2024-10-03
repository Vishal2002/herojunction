import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface HeroSectionPreviewProps {
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

const HeroSectionPreview: React.FC<HeroSectionPreviewProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="space-x-4">
            <Button>{primaryCTA}</Button>
            <Button variant="outline">{secondaryCTA}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPreview;