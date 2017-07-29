import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import { Container, Header, Content } from "native-base";
import { Elements } from "react-stripe-elements";
import yayoiTheme from '../themes/banzhow';

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
            <Container style={{ height: Dimensions.get("window").height - 50 }} theme={theme}>
                <Header>
                    <Button transparent>
                        <Image source={Contents.companyLogoUrl}
                            style={theme.logoImage} />
                    </Button>
                    <Title>{Contents.comanyTitle}</Title>
                    {/*<Button transparent onPress={this.handleNewBtnPress.bind(this)}>
            <Icon name="md-add" />
          </Button>*/}
                </Header>
                <Content refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => { }}
                    />}
                    style={theme.contentContainer}
                    contentContainerStyle={{ flexShrink: 1, alignItems: "stretch" }}>

                    <Elements>
                        <Checkout></Checkout>
                    </Elements>
                </Content>
            </Container>
        );
    }
}

export default PurchaseScreen;