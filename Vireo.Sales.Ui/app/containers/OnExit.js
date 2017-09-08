import React, { Component } from 'react';
import { ListItem, List, Text, InputGroup, Input, Radio, Button, Container, Content, Card, CardItem, H2 } from 'native-base';
import { View, Dimensions, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import theme from '../themes/banzhow';
import Contents from "../../Content";

import { Offer } from "../components";

class OnExit extends Component {

    render() {
        if (this.state.showContactSuccess) {
            return (
                <View style={{ ...theme.onExitWrapper, visibility: this.state.visibility }} >
                    <View style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        cursor: "pointer",
                        zIndex: 999
                    }}>
                        <Button onPress={() => this.setState({ visibility: "hidden", showContactSuccess: false })} transparent info >Close</Button>
                    </View>
                    <Card style={{
                        marginHorizontal: "auto",
                        marginVertical: "50px"
                    }}>
                        <CardItem style={theme.checkoutHeader}>
                            <H2 style={{ ...theme.checkoutHeaderText, textAlign: "left", lineHeight: "36px" }}>
                                Thank you for getting in touch!  We will review your feedback shortly.
                            </H2>
                        </CardItem>
                    </Card>
                </View>
            );
        }
        else {
            return (
                <Container style={{ ...theme.onExitWrapper, visibility: this.state.visibility }} theme={theme}>
                    <View>
                        <View style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            cursor: "pointer",
                            zIndex: 999
                        }}><Button onPress={() => this.setState({ visibility: "hidden" })} transparent info >Close</Button></View>
                        <View style={{ ...theme.onExitContainer }}>
                            <Text style={theme.onExitQuestionText}>Did you find what you were looking for?</Text>
                            <View style={{ ...theme.onExitFoundInquiryAnswerContainer }}>
                                <View style={{ alignItems: "left", flexDirection: "row" }} onClick={() => this.setState({ found: true })} >
                                    <Radio selected={this.state.found} style={{ ...theme.onExitRadioButton, paddingLeft: 0 }} />
                                    <Text style={{ ...theme.onExitRadioButtonLabel }}>Yes</Text>
                                </View>
                                <View style={{ alignItems: "left", flexDirection: "row" }} onClick={() => this.setState({ found: false })} >
                                    <Radio selected={!this.state.found} style={{ ...theme.onExitRadioButton }} />
                                    <Text style={{ ...theme.onExitRadioButtonLabel }}>No</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ display: this.state.found ? "block" : "none" }}>
                            <Text style={theme.onExitQuestionText}>If so, how can we earn your business now or in the future?</Text>
                        </View>
                        <View style={{ display: !this.state.found ? "block" : "none" }}>
                            <Text style={theme.onExitQuestionText}>If not, what are you looking for?  Maybe we can help.  We provide a variety of services not necessarily listed on our website.</Text>
                        </View>
                        <View style={{ width: "100%" }}>
                            <InputGroup borderType="rounded">
                                <Input name="message" onChange={this.onContentChange.bind(this)} multiline={true} numberOfLines={4} />
                            </InputGroup>
                        </View>
                        <View style={{ width: "100%" }}>
                            <Text style={theme.onExitQuestionText}>Please share your email so we can follow up with you?</Text>
                            <InputGroup borderType="rounded">
                                <Input name="email" onChange={this.onContentChange.bind(this)} />
                            </InputGroup>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button onPress={this.saveContact.bind(this)} style={{ fontSize: 18 }} medium primary>Send your response and Close the website</Button>
                        </View>
                    </View>
                </Container>
            );
        }
    }

    constructor() {

        super();

        this.state = {
            visibility: "hidden",
            found: false
        };

        if (window) {
            this.onbeforeunload = window.onbeforeunload;
            this.onmouseout = window.document.onmouseout;
        }
    }

    saveContact() {

        if (!!window) {
            fbq('track', 'InitiateCheckout');
        }

        this.props.dispatch({
            type: 'contact/add', payload: {
                product: "exit_redirect",
                found: this.state.found,
                optIn: false
            }
        });

        this.setState({ showContactSuccess: true });

        setTimeout(window.close, 3000)
    }

    onContentChange(e) {

        this.props.dispatch({
            type: 'contact/set',
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        });
    }

    componentDidMount() {

        if (window) {
            window.onbeforeunload = this.createUiEventCallback(this.BeforeUnload, this.onbeforeunload, this);
            window.document.onmouseout = this.createUiEventCallback(this.MouseOut, this.onmouseout, this);
        }
    }

    componentWillUnmount() {
        if (window) {
            window.onbeforeunload = this.onbeforeunload;
            window.document.onmouseout = this.onmouseout;
        }
    }

    BeforeUnload() {

        Alert.alert(
            "Wait!",
            "Before you go, please answer a quick question so we can better serve you in the future.",
            [
                { text: "OK", onPress: () => this.show() },
                { text: "No Thanks", onPress: () => { } }
            ]
        )

        if (window && window.event) {
            window.event.returnValue = "Wait! Before you go, please answer a quick question so we can better serve you in the future.";
        }

        return "Wait! Before you go, please answer a quick question so we can better serve you in the future.";
    }

    MouseOut(e) {
        e = e ? e : window.event;

        // If this is an autocomplete element.
        if (e.target.tagName && e.target.tagName.toLowerCase() == "input")
            return;

        // Get the current viewport width.
        var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        // If the current mouse X position is within 50px of the right edge
        // of the viewport, return.
        if (e.clientX >= (vpWidth - 50))
            return;

        // If the current mouse Y position is not within 50px of the top
        // edge of the viewport, return.
        if (e.clientY >= 50)
            return;

        // Reliable, works on mouse exiting window and
        // user switching active program
        var from = e.relatedTarget || e.toElement;
        if (!from)
            this.show();
    }


    createUiEventCallback(callback, fn, context) {

        return ((prev) => function () {

            if (prev) prev.apply(context, arguments);

            return callback.apply(context, arguments);

        }.bind(this))(fn);
    }

    show() {
        this.setState({ visibility: "visible" });
    }
}

function mapStateToProps({ contact }) {
    return {
        ...contact
    };
}

export default connect(mapStateToProps)(OnExit);