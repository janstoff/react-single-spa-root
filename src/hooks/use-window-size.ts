import React from 'react';

interface WindowSize {
    readonly width: number;
    readonly height: number;
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = React.useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
