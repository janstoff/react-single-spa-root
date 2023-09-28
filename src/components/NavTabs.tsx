import React from 'react';
import { RouteLink, useCurrentUrlPath } from './Routing';

export interface NavTab {
    readonly id: string;
    readonly displayText: string;
    readonly route: string;
}
interface NavTabsProps {
    readonly tabs: NavTab[];
}

export const NavTabs: React.FC<NavTabsProps> = ({ tabs }) => {
    const [activeId, setActiveId] = React.useState<string>();

    const currentUrlPath = useCurrentUrlPath();

    React.useEffect(() => {
        if (currentUrlPath?.level2) {
            const activeIdFromRoute = tabs.find((tab) =>
                tab.route.includes(currentUrlPath.level2 as string)
            )?.id;

            setActiveId(activeIdFromRoute);
        } else {
            setActiveId(tabs[0].id);
        }
    }, [currentUrlPath]);

    return (
        <div className={`mb-6 flex items-end text-grey h-10 border-b border-grey-lighter`}>
            {tabs.map((tab) => (
                <RouteLink
                    key={tab.id}
                    href={tab.route}
                    className={'mr-3'}
                    onClick={() => setActiveId(tab.id)}
                >
                    <span className={`${activeId === tab.id ? 'font-bold' : ''}`}>
                        {tab.displayText}
                    </span>
                    <div
                        className={`h-1 w-full mt-2 ${
                            activeId === tab.id ? 'bg-green' : 'bg-grey-lightest'
                        }`}
                    />
                </RouteLink>
            ))}
        </div>
    );
};
