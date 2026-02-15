"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function AuditBanner() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Check if already dismissed this session
        if (sessionStorage.getItem("audit-banner-dismissed")) {
            return;
        }
        // Fade in after a short delay
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setDismissed(true);
        sessionStorage.setItem("audit-banner-dismissed", "1");
        setTimeout(() => setVisible(false), 300);
    };

    return (
        <AnimatePresence>
            {visible && !dismissed && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                >
                    <div className="relative bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground">
                        <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm">
                            <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
                            <span className="font-medium">
                                Get a <span className="font-bold underline underline-offset-2 decoration-primary-foreground/40">free website audit</span> — let&apos;s find what&apos;s holding your site back
                            </span>
                            <button
                                data-tally-open="gDMKoJ"
                                data-tally-emoji-text="👋"
                                data-tally-emoji-animation="wave"
                                className="ml-1 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 transition-colors duration-200"
                            >
                                Claim Now →
                            </button>
                            <button
                                onClick={handleDismiss}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/15 transition-colors"
                                aria-label="Dismiss banner"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
