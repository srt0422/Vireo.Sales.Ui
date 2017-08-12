import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import MainScreen from './MainScreen';
import PurchaseScreen from './PurchaseScreen';
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

function renderScene(route, navigator) {
    switch (route.index) {
        case 0:
            return (<MainScreen navigator={navigator} />);
        case 1:
            return (<PurchaseScreen navigator={navigator} />);
        case 2:
            return (<PrivacyPolicy navigator={navigator} />);
        case 3:
            return (<TermsOfService navigator={navigator} />);
        default:
            return (<Text>Oops, screen not found. Route index is {route.index}, title is {route.title}</Text>);
    }
}

class Router extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ index: 0, title: 'Home Screen' }}
                renderScene={renderScene} />
        );
    }
}

export default Router;
