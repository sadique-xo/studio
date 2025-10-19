'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/Profile-Sadique.jpeg',
        '/Profile.PNG'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          // Log Core Web Vitals
          const metrics = {
            'First Contentful Paint': perfData.responseEnd - perfData.fetchStart,
            'Largest Contentful Paint': 0, // Will be updated by LCP observer
            'Cumulative Layout Shift': 0, // Will be updated by CLS observer
          };

          // Monitor LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics['Largest Contentful Paint'] = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Monitor CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            metrics['Cumulative Layout Shift'] = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          console.log('Performance Metrics:', metrics);
        });
      }
    };

    preloadCriticalResources();
    optimizeImages();
    addPerformanceMonitoring();
  }, []);

  return null; // This component doesn't render anything
}
