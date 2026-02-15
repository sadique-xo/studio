"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
    return (
        <TooltipProvider delayDuration={0}>
            <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
                <Dock className="z-50 pointer-events-auto relative h-14 p-2 bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 gap-2">
                    {DATA.navbar.map((item) => {
                        const isExternal = item.href.startsWith("http");
                        return (
                            <Tooltip key={item.href}>
                                <TooltipTrigger asChild>
                                    <a
                                        href={item.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        <DockIcon className="cursor-pointer bg-background text-muted-foreground hover:text-primary-foreground hover:bg-primary backdrop-blur-3xl border border-border transition-colors">
                                            <item.icon className="size-full" />
                                        </DockIcon>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="top"
                                    sideOffset={8}
                                    className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm"
                                >
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                    <Separator
                        orientation="vertical"
                        className="h-2/3 m-auto w-px bg-border"
                    />
                    {Object.entries(DATA.contact.social)
                        .filter(([, social]) => social.navbar)
                        .map(([name, social]) => {
                            const isExternal = social.url.startsWith("http");
                            const IconComponent = social.icon;
                            return (
                                <Tooltip key={`social-${name}`}>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={social.url}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                        >
                                            <DockIcon className="cursor-pointer bg-background text-muted-foreground hover:text-primary-foreground hover:bg-primary backdrop-blur-3xl border border-border transition-colors">
                                                <IconComponent className="size-full" />
                                            </DockIcon>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="top"
                                        sideOffset={8}
                                        className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm"
                                    >
                                        <p>{name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    <Separator
                        orientation="vertical"
                        className="h-2/3 m-auto w-px bg-border"
                    />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <DockIcon className="cursor-pointer bg-background text-muted-foreground hover:text-primary-foreground hover:bg-primary backdrop-blur-3xl border border-border transition-colors relative">
                                <AnimatedThemeToggle className="size-full hover:bg-transparent" />
                            </DockIcon>
                        </TooltipTrigger>
                        <TooltipContent
                            side="top"
                            sideOffset={8}
                            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm"
                        >
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </Dock>
            </div>
        </TooltipProvider >
    );
}
