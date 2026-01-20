"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WindowsLoaderProps {
    /** Size of each dot in pixels */
    dotSize?: number;
    /** Gap between dots when they gather in the center */
    dotGap?: number;
    /** Color of the dots - defaults to primary foreground */
    color?: string;
    /** Total duration of one complete animation cycle in seconds */
    duration?: number;
    /** Optional className for the container */
    className?: string;
    /** Whether to show the loader as a full-page overlay */
    fullPage?: boolean;
}

export function WindowsLoader({
    dotSize = 8,
    dotGap = 3,
    color,
    duration = 2.4,
    className,
    fullPage = false,
}: WindowsLoaderProps) {
    // Number of dots in the animation
    const dotCount = 5;

    // Calculate animation timing for each dot (staggered)
    const staggerDelay = duration / (dotCount * 2.5);

    // Width of the loader container
    const containerWidth = 200;

    // Center point where dots gather
    const centerX = containerWidth / 2;

    // Starting position (off-screen left)
    const startX = -dotSize * 2;

    // Ending position (off-screen right)
    const endX = containerWidth + dotSize * 2;

    // Custom cubic-bezier for the Windows Phone easing
    // This creates the signature "slow in center, fast at edges" effect
    const customEase: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

    const containerClasses = cn(
        "flex items-center justify-center overflow-hidden",
        fullPage && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
        className
    );

    return (
        <div className={containerClasses}>
            <div
                className="relative"
                style={{
                    width: containerWidth,
                    height: dotSize * 3,
                }}
            >
                {Array.from({ length: dotCount }).map((_, index) => {
                    // Calculate the gathering position for each dot (they stack with gaps in center)
                    const gatherPosition = centerX + (index - (dotCount - 1) / 2) * (dotSize + dotGap);

                    return (
                        <motion.div
                            key={index}
                            className="absolute rounded-full"
                            style={{
                                width: dotSize,
                                height: dotSize,
                                top: "50%",
                                marginTop: -dotSize / 2,
                                backgroundColor: color || "hsl(var(--primary))",
                            }}
                            initial={{ x: startX, opacity: 0, scale: 0.5 }}
                            animate={{
                                x: [startX, gatherPosition, gatherPosition, endX],
                                opacity: [0, 1, 1, 0],
                                scale: [0.5, 1, 1, 0.5],
                            }}
                            transition={{
                                duration: duration,
                                times: [0, 0.35, 0.65, 1], // Spend more time in the center
                                ease: customEase,
                                repeat: Infinity,
                                delay: index * staggerDelay,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

// Minimal variant - just the dots without container styling
export function WindowsLoaderDots({
    dotSize = 6,
    dotGap = 2,
    color,
    duration = 2,
    className,
}: Omit<WindowsLoaderProps, 'fullPage'>) {
    const dotCount = 5;
    const staggerDelay = duration / (dotCount * 2.5);
    const containerWidth = 120;
    const centerX = containerWidth / 2;
    const startX = -dotSize * 2;
    const endX = containerWidth + dotSize * 2;
    const customEase: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

    return (
        <div
            className={cn("relative overflow-hidden", className)}
            style={{
                width: containerWidth,
                height: dotSize * 2,
            }}
        >
            {Array.from({ length: dotCount }).map((_, index) => {
                const gatherPosition = centerX + (index - (dotCount - 1) / 2) * (dotSize + dotGap);

                return (
                    <motion.div
                        key={index}
                        className="absolute rounded-full"
                        style={{
                            width: dotSize,
                            height: dotSize,
                            top: "50%",
                            marginTop: -dotSize / 2,
                            backgroundColor: color || "hsl(var(--primary))",
                        }}
                        initial={{ x: startX, opacity: 0, scale: 0.5 }}
                        animate={{
                            x: [startX, gatherPosition, gatherPosition, endX],
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.5],
                        }}
                        transition={{
                            duration: duration,
                            times: [0, 0.35, 0.65, 1],
                            ease: customEase,
                            repeat: Infinity,
                            delay: index * staggerDelay,
                        }}
                    />
                );
            })}
        </div>
    );
}

// Full-page loader for page transitions
export function WindowsPageLoader({
    isLoading = true,
    color,
}: {
    isLoading?: boolean;
    color?: string;
}) {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
        >
            <WindowsLoader dotSize={10} dotGap={4} color={color} duration={2.4} />
        </motion.div>
    );
}
