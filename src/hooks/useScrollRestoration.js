import { useEffect } from 'react';

// Hook to save and restore scroll position
export function useScrollRestoration() {
    useEffect(() => {
        // Restore scroll position on mount with a small delay
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');

        if (savedScrollPosition) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
                setTimeout(() => {
                    window.scrollTo({
                        top: parseInt(savedScrollPosition, 10),
                        behavior: 'instant'
                    });
                }, 100); // Small delay to let components mount
            });
        }

        // Save scroll position on scroll
        const handleScroll = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        };

        // Throttle scroll events for performance
        let scrollTimeout;
        const throttledScroll = () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(handleScroll, 100);
        };

        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);
}
