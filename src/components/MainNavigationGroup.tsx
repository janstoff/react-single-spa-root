import React from 'react';
import { RouteLink, useCurrentUrlPath } from './Routing';
import { NavigationIcon } from './NavigationIcon';
import { CurrentContentView, NavigableViews } from './WithNavigation';

interface MainNavigationGroupListProps {
    readonly navigableViews: Partial<NavigableViews>;
    readonly slim?: boolean;
    readonly setIsMobileNavigationExpanded?: (value: boolean) => void;
}

export const MainNavigationGroupList: React.FC<MainNavigationGroupListProps> = ({
    navigableViews,
    slim = false,
    setIsMobileNavigationExpanded
}) => {
    const currentUrlPath = useCurrentUrlPath();

    return (
        <ul className={`${slim ? 'flex flex-col items-center' : ''}`}>
            {(Object.keys(navigableViews) as CurrentContentView[]).map((view) => (
                <li key={view} className={`${slim ? 'my-3' : 'my-6'}`}>
                    <button
                        onClick={() => {
                            if (setIsMobileNavigationExpanded) {
                                setIsMobileNavigationExpanded(false);
                            }
                        }}
                    >
                        <RouteLink href={`/${view === 'surveys' ? '' : view}`}>
                            <div className={`flex items-center ${slim ? 'flex-col' : 'flex-row'}`}>
                                <div className="w-10">
                                    <NavigationIcon
                                        view={view}
                                        isCurrentView={view === currentUrlPath.level1}
                                    />
                                </div>
                                {slim ? (
                                    <span
                                        className={`text-xxs ${
                                            view === currentUrlPath.level1
                                                ? 'text-white'
                                                : 'text-grey-light'
                                        }`}
                                    >
                                        {navigableViews[view]}
                                    </span>
                                ) : (
                                    <span
                                        className={`ml-2 text-base ${
                                            view === currentUrlPath.level1
                                                ? 'text-white'
                                                : 'text-grey-light'
                                        }`}
                                    >
                                        {navigableViews[view]}
                                    </span>
                                )}
                            </div>
                        </RouteLink>
                    </button>
                </li>
            ))}
        </ul>
    );
};
