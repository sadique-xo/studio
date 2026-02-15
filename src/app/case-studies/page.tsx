"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Breadcrumb from "@/components/Breadcrumb";
import { MagicCard } from "@/components/ui/magic-card";

// ── Case Study Data ─────────────────────────────────────────────────────
const caseStudies = [
    {
        id: "luxury-stays",
        title: "LuxuryStays Redesign",
        tagline: "Premium vacation rental platform — 3x booking conversion",
        description:
            "Complete redesign of a luxury vacation rental platform serving 200+ properties across Europe. Reimagined the booking flow, property discovery, and host dashboard to create a seamless premium experience that tripled conversion rates.",
        image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        color: "from-amber-500/20 to-orange-500/20",
        accent: "bg-amber-500",
        tags: ["Real Estate", "UI/UX", "Conversion Optimization"],
        link: "#",
        year: "2025",
        client: "LuxuryStays Inc.",
        duration: "3 months",
    },
    {
        id: "airbnb-host",
        title: "Airbnb Host Dashboard",
        tagline: "Custom analytics & management dashboard for Superhost",
        description:
            "Designed and built a comprehensive host management dashboard for a Superhost managing 45+ Airbnb listings. Features include revenue analytics, automated pricing suggestions, guest communication hub, and maintenance tracking.",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        color: "from-rose-500/20 to-pink-500/20",
        accent: "bg-rose-500",
        tags: ["Dashboard", "Analytics", "Airbnb"],
        link: "#",
        year: "2024",
        client: "Private Host",
        duration: "6 weeks",
    },
    {
        id: "beach-villa",
        title: "Costa Del Sol Villas",
        tagline: "Direct booking website — eliminating OTA dependency",
        description:
            "Built a stunning direct booking website for a boutique villa collection in Spain. Integrated a custom booking engine, virtual tours, and multi-language support. Reduced OTA commission overhead by 65% in the first quarter.",
        image:
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
        color: "from-cyan-500/20 to-blue-500/20",
        accent: "bg-cyan-500",
        tags: ["Booking Engine", "Multilingual", "Hospitality"],
        link: "#",
        year: "2024",
        client: "Costa Del Sol Villas",
        duration: "2 months",
    },
    {
        id: "real-estate-crm",
        title: "PropFlow CRM",
        tagline: "Real estate agent CRM with AI-powered lead scoring",
        description:
            "Designed a purpose-built CRM for real estate agencies featuring AI-powered lead scoring, automated follow-ups, pipeline visualization, and integrated property matching. Adopted by 12 agencies across India.",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        color: "from-emerald-500/20 to-teal-500/20",
        accent: "bg-emerald-500",
        tags: ["CRM", "AI", "Real Estate"],
        link: "#",
        year: "2024",
        client: "PropFlow",
        duration: "4 months",
    },
    {
        id: "homestay-brand",
        title: "Wanderlust Homestays",
        tagline: "Brand identity & website for a boutique homestay chain",
        description:
            "Complete brand identity and digital presence for a chain of 8 boutique homestays in Kerala. Crafted a visual language rooted in local culture, built an immersive website with story-driven property pages, and implemented a seamless reservation system.",
        image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        color: "from-violet-500/20 to-purple-500/20",
        accent: "bg-violet-500",
        tags: ["Branding", "Homestay", "Web Design"],
        link: "#",
        year: "2023",
        client: "Wanderlust Group",
        duration: "5 months",
    },
    {
        id: "prop-marketplace",
        title: "EstateHub Marketplace",
        tagline: "Property marketplace connecting buyers, sellers & agents",
        description:
            "Designed a modern property marketplace that streamlines the buying and selling process. Features include AI-powered property valuations, virtual staging, 3D walkthroughs, agent matching, and secure document management.",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        color: "from-fuchsia-500/20 to-pink-500/20",
        accent: "bg-fuchsia-500",
        tags: ["Marketplace", "PropTech", "Full Stack"],
        link: "#",
        year: "2023",
        client: "EstateHub",
        duration: "6 months",
    },
];

type CaseStudy = (typeof caseStudies)[number];

// ── Case Study Card ─────────────────────────────────────────────────────
function CaseStudyCard({
    study,
    index,
    onClick,
}: {
    study: CaseStudy;
    index: number;
    onClick: () => void;
}) {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1],
            }}
        >
            <MagicCard
                className="rounded-3xl cursor-pointer p-0"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <motion.button
                    onClick={onClick}
                    className="group w-full text-left rounded-3xl overflow-hidden"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Image */}
                    <div className="relative h-52 sm:h-60 overflow-hidden rounded-t-3xl">
                        <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                        {/* Year badge */}
                        <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/30 dark:bg-white/10 text-white backdrop-blur-md border border-white/10">
                                {study.year}
                            </span>
                        </div>

                        {/* Hover arrow */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                {study.client}
                            </span>
                            <span className="text-muted-foreground/30">·</span>
                            <span className="text-xs font-mono text-muted-foreground">
                                {study.duration}
                            </span>
                        </div>
                        <h3 className="font-headline text-xl font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                            {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {study.tagline}
                        </p>

                        {/* Pill Tags */}
                        <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted/50 dark:bg-muted/30 text-muted-foreground border border-border/40 dark:border-border/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                </motion.button>
            </MagicCard>
        </motion.div>
    );
}

// ── Drawer ───────────────────────────────────────────────────────────────
function CaseStudyDrawer({
    study,
    onClose,
}: {
    study: CaseStudy | null;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {study && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 z-[80] w-full sm:w-[680px] md:w-[780px] bg-background border-l border-border/50 rounded-l-3xl shadow-2xl flex flex-col overflow-hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }}
                    >
                        {/* Close */}
                        <div className="absolute top-4 left-4 z-10">
                            <motion.button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-muted/80 backdrop-blur-md flex items-center justify-center border border-border/50 hover:bg-muted transition-colors"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-4 h-4" />
                            </motion.button>
                        </div>

                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Hero Image */}
                            <div className="relative h-64 sm:h-80">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                    sizes="600px"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${study.color} mix-blend-multiply`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                                {study.year}
                                            </span>
                                            <span className="text-xs text-muted-foreground font-mono">
                                                {study.duration}
                                            </span>
                                        </div>
                                        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mt-2">
                                            {study.title}
                                        </h2>
                                        <p className="text-muted-foreground mt-1">{study.tagline}</p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 sm:p-8 space-y-8">
                                {/* Meta */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.5 }}
                                    className="flex gap-6"
                                >
                                    <div>
                                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                                            Client
                                        </p>
                                        <p className="text-sm font-medium text-foreground">
                                            {study.client}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                                            Duration
                                        </p>
                                        <p className="text-sm font-medium text-foreground">
                                            {study.duration}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                                            Year
                                        </p>
                                        <p className="text-sm font-medium text-foreground">
                                            {study.year}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-3">
                                        Overview
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed text-base">
                                        {study.description}
                                    </p>
                                </motion.div>

                                {/* Tags */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-3">
                                        Expertise
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.map((tag, i) => (
                                            <motion.span
                                                key={tag}
                                                className="px-4 py-1.5 rounded-full text-sm font-medium bg-muted/50 dark:bg-muted/30 text-foreground/70 border border-border/40 dark:border-border/20"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + i * 0.05 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <a
                                        href={study.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Live Project
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Page ─────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb items={[{ label: "Case Studies" }]} className="mb-8" />

                    {/* Header */}
                    <motion.header
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/10">
                                <Sparkles className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                                Featured Work
                            </span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold text-foreground md:text-6xl mb-6">
                            Case Studies
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            A deep dive into projects where design thinking met real business
                            outcomes. Each story covers the challenge, process, and results.
                        </p>
                    </motion.header>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard
                                key={study.id}
                                study={study}
                                index={index}
                                onClick={() => setSelectedStudy(study)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Drawer */}
            <CaseStudyDrawer
                study={selectedStudy}
                onClose={() => setSelectedStudy(null)}
            />
        </div>
    );
}
