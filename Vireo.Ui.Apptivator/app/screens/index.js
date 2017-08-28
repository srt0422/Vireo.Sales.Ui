import React, { Component } from 'react';
const { Navigator, Text } = require('react-native');
import MainScreen from './MainScreen';
import PurchaseScreen from './PurchaseScreen';
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";


function renderScene(route, navigator) {
    console.log(arguments);
    switch (route.index) {
        case 1:
            return (<PurchaseScreen navigator={navigator} />);
        case 2:
            return (<PrivacyPolicy navigator={navigator} />);
        case 3:
            return (<TermsOfService navigator={navigator} />);
        default:
            return (<MainScreen path={route.index} navigator={navigator} />);
    }
}

class Router extends Component {
    render() {

        let route = location.hash.split("?")[0].split("/");
        let initialRoute = null;

        if (route == "" || route[2] == "") {
            initialRoute = "home";
        }
        else {
            initialRoute = route[2];
        }

        return (
            <Navigator
                initialRoute={{ index: initialRoute, title: 'Home Screen' }}
                renderScene={renderScene} />
        );
    }
}

export default Router;
