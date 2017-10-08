import React, { Component } from 'react';
import AppBuilder from "../containers/AppBuilder";

class AppBuilderScreen extends Component {
    render() {
        return <AppBuilder onSubmit={this.submit.bind(this)} goHome={() => this.props.navigator.push({ index: "home" })} />
    }

    submit() {

        fbq('track', 'CompleteRegistration');

        this.props.navigator.push({ index: 1, title: "Purchase Screen" });
    }
}

export default AppBuilderScreen;