import React from 'react';
import { ButtonMain } from './ButtonMain';

export function navigateTo(href: string): void {
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
}

interface RouteLinkProps {
    readonly href: string;
    readonly onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    readonly className?: string;
    readonly children: React.ReactNode;
}

export const RouteLink: React.FC<RouteLinkProps> = ({ className, href, children, onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // If ctrl or meta key are held on click, allow default behavior of opening link in new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        onClick && onClick(event);

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={className ?? ''} href={href} onClick={handleClick}>
            {children}
        </a>
    );
};

interface RouteButtonProps {
    readonly href: string;
    readonly type?: 'submit';
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    readonly className?: string;
    readonly children: React.ReactNode;
    readonly disabled?: boolean;
}

export const RouteButton: React.FC<RouteButtonProps> = ({
    className,
    href,
    type,
    children,
    onClick,
    disabled = false
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // If ctrl or meta key are held on click, allow default behavior of opening link in new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        onClick && onClick(event);

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <ButtonMain
            className={className ?? ''}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </ButtonMain>
    );
};

interface RouteProps {
    readonly path: string;
    readonly children: React.ReactNode;
}

export const Route: React.FC<RouteProps> = ({ path, children }) => {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    React.useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return `/${currentPath.split('/')[1]}` === path ? <>{children}</> : null;
};

interface UrlPath {
    readonly level1: string;
    readonly level2: string | undefined;
    readonly level3: string | undefined;
    readonly level4: string | undefined;
}

export const useCurrentUrlPath = (): UrlPath => {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    React.useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    const firstLevelPath = currentPath.split('/')[1];
    const secondLevelPath = currentPath.split('/')[2];

    const thirdLevelPath =
        decodeURIComponent(currentPath.split('/')[3]) === 'undefined'
            ? undefined
            : decodeURIComponent(currentPath.split('/')[3]);

    const fourthLevelPath =
        decodeURIComponent(currentPath.split('/')[4]) === 'undefined'
            ? undefined
            : decodeURIComponent(currentPath.split('/')[4]);

    return {
        level1: currentPath === '/' ? 'surveys' : firstLevelPath,
        level2: secondLevelPath,
        level3: thirdLevelPath,
        level4: fourthLevelPath
    };
};
