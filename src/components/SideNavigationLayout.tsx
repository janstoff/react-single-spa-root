import React from 'react';

interface SideNavigationLayoutProps {
    readonly logo: JSX.Element;
    readonly collapseExpandButton?: JSX.Element;
    readonly navigationGroupWorkspace: JSX.Element;
    readonly navigationGroupTools: JSX.Element;
    readonly navigationGroupOptions: JSX.Element;
    readonly slim?: boolean;
    readonly userSettings: JSX.Element;
}

export const SideNavigationLayout: React.FC<SideNavigationLayoutProps> = ({
    logo,
    collapseExpandButton = false,
    navigationGroupWorkspace,
    navigationGroupTools,
    navigationGroupOptions,
    slim = false,
    userSettings
}) => {
    return (
        <div className={`h-full flex flex-col ${slim ? 'w-20' : 'w-60'}`}>
            <div className="py-3 px-2 flex items-center bg-primary">
                <div>{logo}</div>
            </div>
            <div className="flex items-center justify-end bg-primary">
                {collapseExpandButton && (
                    <div className={`h-7 absolute top-1/2 ${slim ? 'left-16' : 'left-56'} `}>
                        {collapseExpandButton}
                    </div>
                )}
            </div>
            <div className="h-full grid grid-cols-1 content-between overflow-y-scroll bg-primary">
                <div
                    className={`mt-8 semiTall:mt-18 tall:mt-12 flex flex-col ${
                        slim ? 'items-center' : 'ml-4 items-start'
                    }`}
                >
                    <p className="ml-3 text-grey-light text-xxs uppercase">Workspace</p>
                    <div className="mt-2">{navigationGroupWorkspace}</div>
                </div>
                <div
                    className={`mt-4 semiTall:mt-18 tall:mt-12 flex flex-col ${
                        slim ? 'items-center' : 'ml-4 items-start'
                    }`}
                >
                    <p className="ml-3 text-grey-light text-xxs uppercase">Tools</p>
                    <div>{navigationGroupTools}</div>
                </div>
                <div className="bg-gradient-to-r from-gray-300 to-transparent w-full h-0.5" />
                <div
                    className={`mt-4 semiTall:mt-18 tall:mt-4 flex flex-col ${
                        slim ? 'items-center' : 'ml-4 items-start'
                    }`}
                >
                    <p className="ml-3 text-grey-light text-xxs uppercase">Options</p>
                    <div>{navigationGroupOptions}</div>
                </div>
            </div>
            <div className="bg-primary bg-gradient-to-r from-gray-300 to-transparent w-full h-0.5" />
            <div className="flex items-center bg-primary bg-opacity-90">{userSettings}</div>
        </div>
    );
};
