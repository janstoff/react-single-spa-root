import { useState, createContext, useEffect } from 'react';
import { useWindowSize } from './hooks/use-window-size';
import { Router } from './Router';
import { WithNavigation } from './components/WithNavigation';

interface SideNavigationVisibilityContextValue {
    readonly isSideNavigationExpanded: boolean;
    readonly setIsSideNavigationExpanded: (value: boolean) => void;
}

export const SideNavigationVisibilityContext = createContext<SideNavigationVisibilityContextValue>({
    isSideNavigationExpanded: true,
    setIsSideNavigationExpanded: () => undefined
});

function App() {
    const [isSideNavigationExpanded, setIsSideNavigationExpanded] = useState(true);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > 960) {
            setIsSideNavigationExpanded(true);
        } else if (width > 420) {
            setIsSideNavigationExpanded(false);
        }
    }, [width]);

    return (
        <SideNavigationVisibilityContext.Provider
            value={{
                isSideNavigationExpanded,
                setIsSideNavigationExpanded
            }}
        >
            <div className="h-full w-full fixed">
                <WithNavigation>
                    <Router />
                </WithNavigation>
            </div>
        </SideNavigationVisibilityContext.Provider>
    );
}

export default App;
