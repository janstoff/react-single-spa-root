import React from 'react';
import { SideNavigationVisibilityContext } from '../App';
import { AppLayout } from './AppLayout';
import { MainNavigationGroupList } from './MainNavigationGroup';
import { SideNavigationLayout } from './SideNavigationLayout';
import { RouteLink } from './Routing';
import { CollapseExpandButton } from './CollapseExpandButton';
import { useIsMobileScreenSize } from '../hooks/use-is-mobile-screen-size';
import { User } from './User';
import Logo from '../assets/logos/zenloop.png';
import { SubNavigation } from './SubNavigation';

export type CurrentContentView =
    | 'surveys'
    | 'build-new'
    | 'dashboards'
    | 'triggers-and-reports'
    | 'dictionary'
    | 'settings'
    | 'integrations'
    | 'help-desk';

export type NavigableViews = Record<CurrentContentView, string>;

const VIEWS_WORKSPACE: Partial<NavigableViews> = {
    'surveys': 'Surveys',
    'build-new': 'Build New',
    'dashboards': 'Dashboards'
};

const VIEWS_TOOLS: Partial<NavigableViews> = {
    'triggers-and-reports': 'Triggers & Reports',
    'dictionary': 'Dictionary'
};

const VIEWS_OPTIONS: Partial<NavigableViews> = {
    'settings': 'Settings',
    'integrations': 'Integrations',
    'help-desk': 'Help Desk'
};

interface WithNavigationProps {
    readonly children: React.ReactNode;
    readonly isVerticallyScrollable?: boolean;
}

export const WithNavigation: React.FC<WithNavigationProps> = ({
    children,
    isVerticallyScrollable = true
}) => {
    const { isSideNavigationExpanded, setIsSideNavigationExpanded } = React.useContext(
        SideNavigationVisibilityContext
    );

    const isMobile = useIsMobileScreenSize();
    const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React.useState(false);
    const isSlimView = isMobile ? false : !isSideNavigationExpanded;

    return (
        <AppLayout
            isMobile={isMobile}
            navigation={
                <SideNavigationLayout
                    slim={isSlimView}
                    logo={
                        <RouteLink href="/">
                            <img
                                src={Logo}
                                alt="zenloop logo"
                                className={`${isSlimView ? 'w-24' : 'w-40'}`}
                            />
                        </RouteLink>
                    }
                    collapseExpandButton={
                        !isMobile ? (
                            <CollapseExpandButton
                                arrowDirection={!isSideNavigationExpanded ? 'right' : 'left'}
                                onClick={() =>
                                    setIsSideNavigationExpanded(
                                        isSideNavigationExpanded ? false : true
                                    )
                                }
                            />
                        ) : undefined
                    }
                    navigationGroupWorkspace={
                        <MainNavigationGroupList
                            navigableViews={VIEWS_WORKSPACE}
                            slim={isSlimView}
                            setIsMobileNavigationExpanded={setIsMobileNavigationExpanded}
                        />
                    }
                    navigationGroupTools={
                        <MainNavigationGroupList
                            navigableViews={VIEWS_TOOLS}
                            slim={isSlimView}
                            setIsMobileNavigationExpanded={setIsMobileNavigationExpanded}
                        />
                    }
                    navigationGroupOptions={
                        <MainNavigationGroupList
                            navigableViews={VIEWS_OPTIONS}
                            slim={isSlimView}
                            setIsMobileNavigationExpanded={setIsMobileNavigationExpanded}
                        />
                    }
                    userSettings={<User isSlim={isSlimView} />}
                />
            }
            content={
                <div>
                    <SubNavigation />
                    {children}
                </div>
            }
            isMobileNavigationExpanded={isMobileNavigationExpanded}
            setIsMobileNavigationExpanded={setIsMobileNavigationExpanded}
            isVerticallyScrollable={isVerticallyScrollable}
        />
    );
};
