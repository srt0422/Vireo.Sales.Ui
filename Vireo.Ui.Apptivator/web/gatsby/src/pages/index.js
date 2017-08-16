/**
 * react-native-web + native-base-web starter app
 * Chion82 https://github.com/Chion82/rnweb-native-base-starter
 * https://miria.moe
 */
import React from "react";
import { AppRegistry } from 'react-native';
import Entry from '../../../../app/entry/index';
import { OSTheme } from 'native-base';

//Use IOS theme for our web app
OSTheme.setOSTheme('ios');

setTimeout(() => {
    AppRegistry.registerComponent('App', () => Entry);
    AppRegistry.runApplication('App', {
        rootTag: document.getElementsByClassName('react-root')[0]
    });
}, 500);

export default () => <div className="react-root"></div>;
