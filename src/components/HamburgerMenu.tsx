"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

// ── Menu Data ──────────────────────────────────────────────────────────
const menuItems = [
    { label: "Blog", href: "https://tale.sadique.co", external: true },
    { label: "Case Studies", href: "/case-studies", external: false },
    { label: "Tools I Build", href: "/tools", external: false },
    { label: "Portfolio", href: "/portfolio", external: false },
];

// ── Easing ──────────────────────────────────────────────────────────────
const ease = [0.76, 0, 0.24, 1] as const;

// ── Hamburger Icon ──────────────────────────────────────────────────────
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <div className="relative w-6 h-5 flex flex-col justify-between">
            <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease }}
            />
            <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3, ease }}
            />
            <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease }}
            />
        </div>
    );
}

// ── Menu Item ───────────────────────────────────────────────────────────
function MenuItem({
    item,
    index,
    hoveredIndex,
    setHoveredIndex,
    onNavigate,
}: {
    item: (typeof menuItems)[0];
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (i: number | null) => void;
    onNavigate: (href: string, external: boolean) => void;
}) {
    const pathname = usePathname();
    const isActive = pathname === item.href;
    const isHovered = hoveredIndex === index;
    const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

    const shift = hoveredIndex !== null ? (index - hoveredIndex) * 6 : 0;

    return (
        <motion.div
            variants={{
                hidden: { y: 60, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease },
                },
                exit: {
                    y: -30,
                    opacity: 0,
                    transition: { duration: 0.3, ease },
                },
            }}
            className="relative"
        >
            <motion.div
                className="group relative cursor-pointer py-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                    y: shift,
                    scale: isHovered ? 1.03 : isOtherHovered ? 0.97 : 1,
                    opacity: isOtherHovered ? 0.35 : 1,
                }}
                transition={{ duration: 0.3, ease }}
                onClick={() => onNavigate(item.href, item.external)}
            >
                {/* Glass hover background */}
                <motion.div
                    className="absolute -inset-x-6 -inset-y-1 rounded-2xl bg-foreground/[0.04] dark:bg-white/[0.06] backdrop-blur-sm border border-foreground/[0.06] dark:border-white/[0.08]"
                    initial={false}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.25, ease }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-4 md:gap-6">
                    {/* Index */}
                    <span
                        className={`text-sm font-mono transition-opacity duration-200 ${isHovered
                            ? "opacity-60"
                            : "opacity-25"
                            } text-foreground dark:text-white`}
                    >
                        0{index + 1}
                    </span>

                    {/* Label */}
                    <span
                        className={`font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight transition-colors duration-200 ${isActive
                            ? "text-foreground dark:text-white"
                            : "text-foreground/70 dark:text-white/70 group-hover:text-foreground dark:group-hover:text-white"
                            }`}
                    >
                        {item.label}
                    </span>

                    {/* Arrow */}
                    <motion.span
                        className="text-2xl md:text-4xl text-foreground/40 dark:text-white/40"
                        initial={false}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : -12,
                        }}
                        transition={{ duration: 0.2, ease }}
                    >
                        →
                    </motion.span>

                    {/* External badge */}
                    {item.external && (
                        <motion.span
                            className="text-xs uppercase tracking-widest text-foreground/30 dark:text-white/30 font-mono"
                            initial={false}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                y: isHovered ? 0 : 6,
                            }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                        >
                            external
                        </motion.span>
                    )}
                </div>

                {/* Active bar */}
                {isActive && (
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full" />
                )}
            </motion.div>
        </motion.div>
    );
}

// ── Main Component ──────────────────────────────────────────────────────
export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const router = useRouter();
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    // Lock body scroll when menu is open (fixes Safari mobile scroll-behind)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Prevent iOS Safari bounce-scroll
            document.body.style.position = 'fixed';
            document.body.style.inset = '0';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.inset = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.inset = '';
        };
    }, [isOpen]);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
        setHoveredIndex(null);
    }, []);

    // Navigate THEN close — ensures the link actually fires
    const handleNavigate = useCallback(
        (href: string, external: boolean) => {
            if (external) {
                window.open(href, "_blank", "noopener,noreferrer");
            } else {
                router.push(href);
            }
            // Small delay so navigation starts before unmount
            setTimeout(() => {
                setIsOpen(false);
                setHoveredIndex(null);
            }, 100);
        },
        [router]
    );

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className={`fixed top-5 right-5 md:top-8 md:right-8 z-[60] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-border/40 backdrop-blur-xl text-foreground shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen
                        ? "bg-foreground/[0.06] dark:bg-white/10"
                        : "bg-background/80"
                    }`}
                onClick={toggleMenu}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <HamburgerIcon isOpen={isOpen} />
            </motion.button>

            {/* Fullscreen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex flex-col transform-gpu"
                        style={{ touchAction: 'none', WebkitOverflowScrolling: 'auto' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                    >
                        {/* Background — solid bg instead of backdrop-blur for Safari mobile compatibility */}
                        <div className="absolute inset-0 bg-background dark:bg-black" />

                        {/* Gradient orbs (CSS only, no Three.js) */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <motion.div
                                className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
                                style={{
                                    background: isDark
                                        ? "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)"
                                        : "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                                }}
                                animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full"
                                style={{
                                    background: isDark
                                        ? "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)"
                                        : "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
                                }}
                                animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        {/* Menu Content */}
                        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                            <motion.nav
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.07,
                                            delayChildren: 0.15,
                                        },
                                    },
                                    exit: {
                                        transition: {
                                            staggerChildren: 0.04,
                                            staggerDirection: -1,
                                        },
                                    },
                                }}
                                className="space-y-2 md:space-y-3"
                            >
                                {menuItems.map((item, index) => (
                                    <MenuItem
                                        key={item.href}
                                        item={item}
                                        index={index}
                                        hoveredIndex={hoveredIndex}
                                        setHoveredIndex={setHoveredIndex}
                                        onNavigate={handleNavigate}
                                    />
                                ))}
                            </motion.nav>
                        </div>

                        {/* Footer */}
                        <motion.div
                            className="relative z-10 px-8 md:px-16 lg:px-24 pb-8 md:pb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease, delay: 0.4 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border/20 dark:border-white/10 pt-6">
                                <p className="text-sm text-muted-foreground/50 font-mono">
                                    © {new Date().getFullYear()} Sadique
                                </p>
                                <div className="flex gap-6">
                                    {[
                                        { label: "GitHub", href: "https://github.com/sadique-xo" },
                                        { label: "Twitter", href: "https://x.com/notsadique" },
                                        { label: "LinkedIn", href: "https://www.linkedin.com/in/sadiqueh/" },
                                    ].map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-200 font-mono"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
