import React, { Component } from "react";
import { Card, CardItem, View, Text, Button } from "native-base";
import { injectStripe, CardElement } from "react-stripe-elements";

class Checkout extends Component {

    render() {
        return (
            <Card style={{
                width: "100%",
                maxWidth: "500px",
                marginHorizontal: "auto",
                marginVertical: "50px"
            }}>
                <CardItem header>
                    <Text>Now we can build your mobile App with your content.  Please enter your credit card information below so we can complete your transaction.</Text>
                </CardItem>
                <CardItem>
                    <CardElement />
                </CardItem>
                <CardItem>
                    <Button>Complete Purchase</Button>
                    </CardItem>
            </Card>
        );
    }
}

export default injectStripe(Checkout);