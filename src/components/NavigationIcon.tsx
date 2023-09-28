import React from 'react';
import { CurrentContentView } from './WithNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquarePollVertical,
    faClipboardQuestion,
    faTableColumns,
    faBell,
    faBook,
    faCloudUpload,
    faGears,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

interface NavigationIconProps {
    readonly view: CurrentContentView;
    readonly isCurrentView: boolean;
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({ view, isCurrentView }) => {
    switch (view) {
        case 'surveys':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faSquarePollVertical}
                />
            );
        case 'build-new':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faClipboardQuestion}
                />
            );
        case 'dashboards':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faTableColumns}
                />
            );
        case 'triggers-and-reports':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faBell}
                />
            );
        case 'dictionary':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faBook}
                />
            );
        case 'settings':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faGears}
                />
            );
        case 'integrations':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faCloudUpload}
                />
            );
        case 'help-desk':
            return (
                <FontAwesomeIcon
                    size="xl"
                    style={isCurrentView ? { color: 'white' } : { color: '#A1B3C1' }}
                    icon={faQuestionCircle}
                />
            );
        default:
            return null;
    }
};
