/* eslint-disable @next/next/no-img-element */
"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/ui/timeline";

const BLUR_FADE_DELAY = 0.04;

// Section Badge Header Component
function SectionBadge({ label }: { label: string }) {
    return (
        <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-primary-foreground text-sm font-medium">{label}</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>
    );
}

export default function PortfolioPage() {
    return (
        <main className="min-h-dvh flex flex-col gap-14 relative px-6 py-12 mx-auto w-full max-w-2xl">
            {/* Hero Section */}
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                        <div className="gap-2 flex flex-col order-2 md:order-1">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                                yOffset={8}
                                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                            />
                            <BlurFadeText
                                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                                delay={BLUR_FADE_DELAY}
                                text={DATA.description}
                            />
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
                            <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div className="flex min-h-0 flex-col gap-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-xl font-bold">About</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                            <Markdown>{DATA.summary}</Markdown>
                        </div>
                    </BlurFade>
                </div>
            </section>

            {/* Work Experience Section */}
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    <Timeline className="p-0">
                        {DATA.work.map((work, index) => (
                            <TimelineItem key={`${work.company}-${work.title}-${index}`}>
                                <BlurFade
                                    delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                                >
                                    <div className="flex items-start justify-between gap-x-3 group">
                                        <TimelineConnectItem className="flex items-start justify-center w-10">
                                            <Link href={work.href} target="_blank" rel="noopener noreferrer">
                                                {work.logoUrl ? (
                                                    <img
                                                        src={work.logoUrl}
                                                        alt={work.company}
                                                        className="size-10 p-1 rounded-full shadow ring-1 ring-border overflow-hidden object-cover flex-none bg-background z-10"
                                                    />
                                                ) : (
                                                    <div className="size-10 p-1 rounded-full shadow ring-1 ring-border bg-muted flex-none z-10" />
                                                )}
                                            </Link>
                                        </TimelineConnectItem>
                                        <Link
                                            href={work.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-start justify-between gap-x-3 min-w-0"
                                        >
                                            <div className="flex-1 min-w-0 flex flex-col gap-1">
                                                <div className="font-semibold leading-none flex items-center gap-2">
                                                    {work.company}
                                                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                                                </div>
                                                <div className="font-sans text-sm text-muted-foreground">
                                                    {work.title}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">{work.description}</p>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                                                <span>
                                                    {work.start} - {work.end}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </BlurFade>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </section>

            {/* Education Section */}
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Education</h2>
                    </BlurFade>
                    <Timeline className="p-0">
                        {DATA.education.map((education, index) => (
                            <TimelineItem key={education.school}>
                                <BlurFade
                                    delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                                >
                                    <div className="flex items-center justify-between gap-x-3 group">
                                        <TimelineConnectItem>
                                            <Link href={education.href} target="_blank" rel="noopener noreferrer">
                                                {education.logoUrl ? (
                                                    <img
                                                        src={education.logoUrl}
                                                        alt={education.school}
                                                        className="size-10 p-1 rounded-full shadow ring-1 ring-border overflow-hidden object-contain flex-none bg-background z-10"
                                                    />
                                                ) : (
                                                    <div className="size-10 p-1 rounded-full shadow ring-1 ring-border bg-muted flex-none z-10" />
                                                )}
                                            </Link>
                                        </TimelineConnectItem>
                                        <Link
                                            href={education.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-between gap-x-3 min-w-0"
                                        >
                                            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                                                <div className="font-semibold leading-none flex items-center gap-2">
                                                    {education.school}
                                                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                                                </div>
                                                <div className="font-sans text-sm text-muted-foreground">
                                                    {education.degree}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                                                <span>
                                                    {education.start} - {education.end}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </BlurFade>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-2">
                        {DATA.skills.map((skill, id) => (
                            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                                    {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <div className="flex min-h-0 flex-col gap-y-8">
                        <div className="flex flex-col gap-y-4 items-center justify-center">
                            <SectionBadge label="Featured Projects" />
                            <div className="flex flex-col gap-y-4 items-center justify-center">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Check out my latest work</h2>
                                <p className="text-muted-foreground md:text-lg lg:text-base xl:text-lg text-balance text-center">
                                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {DATA.projects.map((project, id) => (
                                <BlurFade
                                    key={project.title}
                                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                                >
                                    <ProjectCard
                                        href={project.href}
                                        title={project.title}
                                        description={project.description}
                                        dates={project.dates}
                                        tags={project.technologies}
                                        image={project.image}
                                        video={project.video}
                                        links={project.links}
                                    />
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </BlurFade>
            </section>

            {/* Hackathons Section */}
            {DATA.hackathons && DATA.hackathons.length > 0 && (
                <section id="hackathons">
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className="flex min-h-0 flex-col gap-y-8 w-full overflow-hidden">
                            <div className="flex flex-col gap-y-4 items-center justify-center">
                                <SectionBadge label="Hackathons" />
                                <div className="flex flex-col gap-y-4 items-center justify-center">
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">I like building things</h2>
                                    <p className="text-muted-foreground md:text-lg lg:text-base xl:text-lg text-balance text-center">
                                        During my time in university, I attended {DATA.hackathons.length}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
                                    </p>
                                </div>
                            </div>
                            <Timeline>
                                {DATA.hackathons.map((hackathon) => (
                                    <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
                                        <TimelineConnectItem className="flex items-start justify-center">
                                            {hackathon.image ? (
                                                <img
                                                    src={hackathon.image}
                                                    alt={hackathon.title}
                                                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                                                />
                                            ) : (
                                                <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                                            )}
                                        </TimelineConnectItem>
                                        <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                                            {hackathon.dates && (
                                                <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                                            )}
                                            {hackathon.title && (
                                                <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                                            )}
                                            {hackathon.location && (
                                                <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                                            )}
                                            {hackathon.description && (
                                                <p className="text-sm text-muted-foreground leading-relaxed break-words">
                                                    {hackathon.description}
                                                </p>
                                            )}
                                            {hackathon.links && hackathon.links.length > 0 && (
                                                <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                                                    {hackathon.links.map((link, idx) => (
                                                        <Link
                                                            href={link.href}
                                                            key={idx}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                                                                {link.icon}
                                                                {link.title}
                                                            </Badge>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </div>
                    </BlurFade>
                </section>
            )}
        </main>
    );
}
