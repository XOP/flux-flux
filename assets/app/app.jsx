/**
 * Application
 *
 */

// import utils from 'utils';

import 'normalize.css/normalize.css';
import './app.scss';

import Button from 'button/button';

module.exports = function() {

    const mainContainer = document.querySelector('#app');

    ReactDOM.render(
        <div className="main">
            <div className="container">
                <h1 className="heading">Flux-Flux</h1>

                <div className="main">
                    <Button text="Start" key="1" />
                </div>
            </div>
        </div>,

        mainContainer
    );
};
