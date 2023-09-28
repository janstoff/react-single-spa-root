import React from 'react';
import { RouteLink } from './Routing';

interface UserProps {
    readonly isSlim: boolean;
}

export const User: React.FC<UserProps> = ({ isSlim }) => {
    const userProfilePictureUrl = 'https://saas.group/wp-content/uploads/Jan.png';

    return (
        <RouteLink href="/user" className="w-full">
            <div className="px-4 py-2">
                {isSlim ? (
                    <div className="flex items-center justify-center">
                        <img src={userProfilePictureUrl} className="h-10 w-10 rounded-full" />
                    </div>
                ) : (
                    <div className="flex items-center">
                        <img src={userProfilePictureUrl} className="h-10 w-10 rounded-full" />
                        <div className="ml-6 min-w-0">
                            <p className="text-xs text-white">Jan Steinhoff</p>
                            <p className="mt-1 text-sm text-grey-light font-medium truncate">
                                My Workspace Name that is super long
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </RouteLink>
    );
};
