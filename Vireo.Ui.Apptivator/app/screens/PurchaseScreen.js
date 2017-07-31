import React, { Component } from 'react';
import { Elements } from "react-stripe-elements";

import Checkout from "../containers/Checkout";

class PurchaseScreen extends Component {

    static propTypes = {
        navigator: React.PropTypes.any
    }

    static childContextTypes = {
        navigator: React.PropTypes.any
    }

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        };
    }

    getChildContext() {
        return {
            navigator: this.props.navigator
        };
    }

    callToAction() {
        this.setState({ tabIndex: 1 });
    }

    render() {
        return (
            <Elements>
                <Checkout></Checkout>
            </Elements >
        );
    }
}

export default PurchaseScreen;