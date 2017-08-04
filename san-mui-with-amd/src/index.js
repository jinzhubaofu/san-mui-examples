/**
 * @file san-mui with AMD loader
 * @author leon <ludafa@outlook.com>
 */

define(function (require) {

    var san = require('san');
    var Button = require('san-mui/lib/Button/Button').default;
    var Icon = require('san-mui/lib/Icon/Icon').default;

    var App = san.defineComponent({
        template: ''
            + '<div class="app">'
            +     '<sm-button>'
            +         '<sm-icon style="margin-right: 10px">all_inclusive</sm-icon>'
            +         'hello world'
            +     '</sm-button>'
            + '</div>',
        components: {
            'sm-button': Button,
            'sm-icon': Icon
        }
    });

    new App().attach(document.body);

});
