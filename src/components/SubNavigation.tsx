import { NavTabs } from './NavTabs';
import { useCurrentUrlPath } from './Routing';

export const SubNavigation: React.FC = () => {
    const currentUrlPath = useCurrentUrlPath();

    return currentUrlPath.level1 === 'surveys' ? (
        <div>
            <h2 className="font-semibold text-xl mb-6">Surveys</h2>
            <NavTabs
                tabs={[
                    { id: '1', displayText: 'All Surveys', route: '/surveys/all' },
                    { id: '2', displayText: 'Other', route: '/surveys/other' }
                ]}
            />
        </div>
    ) : null;
};
