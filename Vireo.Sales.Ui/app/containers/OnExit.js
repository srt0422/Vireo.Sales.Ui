import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import theme from '../themes/banzhow';
import Contents from "../../Content";

import { Offer } from "../components";

class OnExit extends Component {

    constructor() {

        super();

        this.state = {
            visibility: "hidden"
        };
    }

    componentWillMount() {
        if (window) {
            window.onbeforeunload = this.onExit.bind(this);
        }
    }

    onExit() {
        if (window) {
            window.onbeforeunload = () => { };
        }

        this.setState({ visibility: "visible" });

        return "Did you find what you were looking for?";
    }

    render() {
        return (
            <View style={{ ...theme.OnExitContainer, visibility: this.state.visibility }}>
                <Text>test blah</Text>
            </View>
        );
    }
}

function mapStateToProps({ }) {
    return {};
}

export default connect(mapStateToProps)(OnExit);