/**
 * Application
 *
 */

// import utils from 'utils';

import 'normalize.css/normalize.css';
import './app.css';

module.exports = function() {

    const mainContainer = document.querySelector('#main');

    ReactDOM.render(
        <div>
            <h1>Flux-Flux</h1>
            <strong>
                inlined styles
            </strong>
        </div>,

        mainContainer
    );
};
