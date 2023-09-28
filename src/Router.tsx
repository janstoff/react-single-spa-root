import { Route } from './components/Routing';

import { registerApplication, start } from 'single-spa';
import { loadEmberApp } from 'single-spa-ember';

const reactAppMicroFEModule = '@zenloop/react-app';

registerApplication({
    name: 'react-app',
    app: () => import(/* @vite-ignore */ reactAppMicroFEModule),
    activeWhen: ['/', '/surveys']
});

registerApplication({
    name: 'ember-app',
    app: () =>
        loadEmberApp(
            'ember-app',
            '../../ember-demo/dist/assets/app.js',
            '../../ember-demo/dist/assets/vendor.js'
        ),
    activeWhen: ['/dashboards']
});

start();

export const Router: React.FC = () => {
    return (
        <>
            <div id="react-app-container"></div>
            <div id="ember-app-container"></div>
            {/* <Route path="/">
                <div>Surveys Content</div>
            </Route>
            <Route path="/surveys">
                <div>Surveys Content</div>
            </Route> */}
            <Route path="/build-new">
                <div>
                    <h2 className="font-semibold text-xl">Build New</h2>
                </div>
            </Route>
            {/* <Route path="/dashboards">
                <div>
                    <h2 className="font-semibold text-xl">Dashboards</h2>
                </div>
            </Route> */}
            {/* <Route path="/triggers-and-reports">
                <div>
                    <h2 className="font-semibold text-xl">Triggers And Reports</h2>
                </div>
            </Route> */}
            <Route path="/dictionary">
                <div>
                    <h2 className="font-semibold text-xl">Dictionary</h2>
                </div>
            </Route>
            <Route path="/settings">
                <div>
                    <h2 className="font-semibold text-xl">Settings</h2>
                </div>
            </Route>
            <Route path="/integrations">
                <div>
                    <h2 className="font-semibold text-xl">Integrations</h2>
                </div>
            </Route>
            <Route path="/help-desk">
                <div>
                    <h2 className="font-semibold text-xl">Help Desk</h2>
                </div>
            </Route>
        </>
    );
};
