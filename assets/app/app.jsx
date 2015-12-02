/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import * as utils from 'xop-module-utils';
import Button from 'button/button';

module.exports = function() {

    const mainContainer = utils.find('#app');

    ReactDOM.render(
        <div className="container">
            <h1>Flux-Flux</h1>
            <Button
                key="1"
                text="Start"
                />
        </div>,

        mainContainer
    );
};
