import { useWindowSize } from './use-window-size';

export const MOBILE_VIEW_THRESHOLD = 640;

export function isMobileScreenSize(width: number): boolean {
    return width < MOBILE_VIEW_THRESHOLD;
}

export function useIsMobileScreenSize(): boolean {
    const { width } = useWindowSize();

    return isMobileScreenSize(width);
}
