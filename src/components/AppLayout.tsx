import React from 'react';
import MenuIcon from '../assets/icons/menu.svg';
import { RouteLink, useCurrentUrlPath } from './Routing';
import { ButtonMain } from './ButtonMain';
import Logo from '../assets/logos/zenloop.png';

interface AppLayoutProps {
    readonly isMobileNavigationExpanded: boolean;
    readonly setIsMobileNavigationExpanded: (value: boolean) => void;
    readonly navigation: JSX.Element;
    readonly content: React.ReactNode;
    readonly isMobile?: boolean;
    readonly isVerticallyScrollable: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
    isMobileNavigationExpanded,
    setIsMobileNavigationExpanded,
    navigation,
    content,
    isMobile,
    isVerticallyScrollable
}) =>
    isMobile ? (
        <MobileLayout
            navigation={navigation}
            content={content}
            isMobileNavigationExpanded={isMobileNavigationExpanded}
            setIsMobileNavigationExpanded={setIsMobileNavigationExpanded}
            isVerticallyScrollable={isVerticallyScrollable}
        />
    ) : (
        <StandardLayout
            navigation={navigation}
            content={content}
            isVerticallyScrollable={isVerticallyScrollable}
        />
    );

interface StandardLayoutProps {
    readonly navigation: JSX.Element;
    readonly content: React.ReactNode;
    readonly isMobile?: boolean;
    readonly isVerticallyScrollable: boolean;
}

const StandardLayout: React.FC<StandardLayoutProps> = ({
    navigation,
    content,
    isVerticallyScrollable
}) => (
    <div className="h-full flex">
        <div className="h-full">{navigation}</div>
        <div
            className={`px-5 sm:px-10 pt-5 h-full w-full bg-grey-tint ${
                isVerticallyScrollable ? 'overflow-y-scroll' : 'overflow-y-hidden'
            }`}
        >
            {content}
        </div>
    </div>
);

interface MobileLayoutProps {
    readonly isMobileNavigationExpanded: boolean;
    readonly setIsMobileNavigationExpanded: (value: boolean) => void;
    readonly navigation: JSX.Element;
    readonly content: React.ReactNode;
    readonly isVerticallyScrollable: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
    isMobileNavigationExpanded = false,
    setIsMobileNavigationExpanded,
    navigation,
    content,
    isVerticallyScrollable
}) => {
    const [startFadeIn, setStartFadeIn] = React.useState(false);

    const mobileSideNavigationRef = React.useRef(null);

    const { level1 } = useCurrentUrlPath();

    React.useEffect(() => {
        function handleClickOutside(event: any) {
            if (
                mobileSideNavigationRef.current &&
                !(mobileSideNavigationRef.current as HTMLElement).contains(event.target)
            ) {
                setIsMobileNavigationExpanded(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsMobileNavigationExpanded]);

    React.useEffect(() => {
        setStartFadeIn(true);
    }, []);

    return (
        <div className="h-full flex flex-col bg-grey-tint">
            <div className="p-3 xs:p-5 flex items-center justify-between">
                <RouteLink href="/">
                    <img src={Logo} alt="zenloop logo" className={`w-32`} />
                </RouteLink>
                <div className="flex items-center">
                    {level1 === 'dashboard' && !isMobileNavigationExpanded && <ButtonMain />}
                    <button
                        className="ml-8"
                        onClick={(event) => {
                            event.preventDefault();
                            setIsMobileNavigationExpanded(
                                isMobileNavigationExpanded ? false : true
                            );
                        }}
                    >
                        <img className="h-6 w-6" src={MenuIcon} />
                    </button>
                </div>
            </div>
            {isMobileNavigationExpanded && (
                <div className="absolute w-full h-full flex justify-start z-1">
                    <div
                        ref={mobileSideNavigationRef}
                        className={`z-2 top-0 left-0 bg-white h-full border-solid border text-grey transition ease-in duration-150 ${
                            startFadeIn ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="py-5 h-full bg-primary">{navigation}</div>
                    </div>
                </div>
            )}
            <div
                className={`p-3 xs:p-5 h-full w-full bg-grey-tint ${
                    isVerticallyScrollable ? 'overflow-y-scroll' : 'overflow-hidden'
                }`}
            >
                {content}
            </div>
        </div>
    );
};
