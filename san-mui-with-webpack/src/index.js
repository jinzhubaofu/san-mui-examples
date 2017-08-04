/**
 * @file san-mui with webpack
 * @author leon <ludafa@outlook.com>
 */

import {Button} from 'san-mui';
import {Component} from 'san';
import './index.css';
import 'san-mui/lib/index.css';

class App extends Component {

    static template = `
        <div style="display: flex; height: 100%; align-items: center; justify-content: center">
            <sm-button>hello world</sm-button>
        </div>
    `;

    static components = {
        'sm-button': Button
    };

}

new App().attach(document.body);
