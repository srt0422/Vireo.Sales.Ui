import AppContainer from '../app/entry';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

exports.default = function () {
    return ReactDOMServer.renderToString(<AppContainer />);
}