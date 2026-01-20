"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { WindowsPageLoader } from "@/components/ui/windows-loader";

interface PageTransitionContextType {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export const usePageTransition = () => {
    const context = useContext(PageTransitionContext);
    if (!context) {
        throw new Error("usePageTransition must be used within a PageTransitionProvider");
    }
    return context;
};

interface PageTransitionProviderProps {
    children: ReactNode;
    /** Minimum time to show the loader (prevents flash) */
    minLoadingTime?: number;
    /** Color of the loader dots */
    loaderColor?: string;
}

export function PageTransitionProvider({
    children,
    minLoadingTime = 500,
    loaderColor,
}: PageTransitionProviderProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [loadStartTime, setLoadStartTime] = useState<number | null>(null);
    const pathname = usePathname();

    const startLoading = useCallback(() => {
        setIsLoading(true);
        setLoadStartTime(Date.now());
    }, []);

    const stopLoading = useCallback(() => {
        if (loadStartTime) {
            const elapsed = Date.now() - loadStartTime;
            const remaining = Math.max(0, minLoadingTime - elapsed);

            setTimeout(() => {
                setIsLoading(false);
                setLoadStartTime(null);
            }, remaining);
        } else {
            setIsLoading(false);
        }
    }, [loadStartTime, minLoadingTime]);

    // Handle route changes
    useEffect(() => {
        // When pathname changes, stop loading
        stopLoading();
    }, [pathname, stopLoading]);

    // Intercept link clicks to show loader
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");

            if (link) {
                const href = link.getAttribute("href");
                const isInternal = href?.startsWith("/") && !href.startsWith("//");
                const isNewTab = link.getAttribute("target") === "_blank";
                const isSameOrigin = link.origin === window.location.origin;

                if (isInternal && !isNewTab && isSameOrigin && href !== pathname) {
                    startLoading();
                }
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [pathname, startLoading]);

    return (
        <PageTransitionContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            <AnimatePresence mode="wait">
                {isLoading && <WindowsPageLoader isLoading={isLoading} color={loaderColor} />}
            </AnimatePresence>
            {children}
        </PageTransitionContext.Provider>
    );
}
