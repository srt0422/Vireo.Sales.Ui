import React, { Component } from "react";
const {  RefreshControl, Dimensions, Image   } = require('react-native');
import {
    Card,
    CardItem,
    Text,
    Content,
    Container,
    Header,
    Title,
    Icon,
    Button,
    H1, H2, H3
} from "native-base";
import { connect } from "react-redux";
import { injectStripe, CardElement } from "react-stripe-elements";
const theme = require("../themes/banzhow").default;
import Contents from "../../Content";

let Alert;

class Checkout extends Component {

    constructor() {

        super();

        this.state = { errorMessage: null };
    }

    componentWillMount() {
        Alert = require('react-native').Alert;
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
                </Header>
                <Content refreshControl={
                    <RefreshControl
                        refreshing={this.props.isLoading}
                        onRefresh={() => { this.props.dispatch({ type: 'appContents/get' }) }}
                    />}
                    style={theme.contentContainer}
                    contentContainerStyle={{ flexShrink: 1, alignItems: "stretch" }}>

                    {this.props.success ? (
                        <Card style={{
                            width: "100%",
                            maxWidth: "500px",
                            marginHorizontal: "auto",
                            marginVertical: "50px"
                        }}>
                            <CardItem style={theme.checkoutHeader}>
                                <H2 style={{ ...theme.checkoutHeaderText, textAlign: "left", lineHeight: "36px" }}>
                                    Success!  You've successfully submitted your app request!  We will be in touch shortly to notify you of the progress of your app.
                                </H2>
                            </CardItem>
                        </Card>
                    ) : (
                            <Card style={{
                                width: "100%",
                                maxWidth: "500px",
                                marginHorizontal: "auto",
                                marginVertical: "50px"
                            }}>
                                <CardItem header style={theme.checkoutHeader}>
                                    <Text style={theme.checkoutHeaderText}>Now we can build your mobile App with the content you just entered.  Please enter your credit card information below so we can complete your transaction.</Text>
                                </CardItem>
                                <CardItem>
                                    <CardElement />
                                </CardItem>
                                <CardItem>
                                    <Button large block onPress={this.submitPayment.bind(this)} onClick={this.submitPayment}>Complete Purchase</Button>
                                </CardItem>
                                {this.state.errorMessage ? (
                                    <CardItem>
                                        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
                                    </CardItem>
                                ) : ""}
                            </Card>
                        )}
                    }
                </Content>
            </Container>
        );
    }

    submitPayment() {
        this.props.stripe.createToken({ type: 'card', name: "" })
            .then(({ token, error }) => {

                if (error) {
                    Alert.alert(error.message);
                    // Inform the user if there was an error
                    this.setState({ errorMessage: error.message });
                } else {

                    this.props.dispatch({ type: 'payments/add', payload: { token: token.id, email: this.props.email } });

                    this.setState({ errorMessage: null });
                }

            })
    }
}

function mapStateToProps({ payments, appContents }) {
    return {
        ...payments,
        email: appContents.content.email
    };
}

export default injectStripe(connect(mapStateToProps)(Checkout));