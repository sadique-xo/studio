"use client";

import { cn } from "@/lib/utils";

export default function AvatarVideoSection() {
    return (
        <section className="py-12 md:py-20 overflow-hidden">
            <div className="container px-4 mx-auto flex justify-center">
                <div className={cn(
                    "relative overflow-hidden rounded-[2rem] md:rounded-[3rem] w-full max-w-sm md:max-w-md aspect-square",
                    "bg-transparent dark:bg-white" // White background only in dark mode
                )}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/sadique_avatar_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
