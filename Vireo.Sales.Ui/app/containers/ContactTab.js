import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    InputGroup,
    Input,
    Button,
    View,
    List,
    ListItem,
    Content,
    Card,
    CardItem,
    CheckBox,
    H2
} from 'native-base';

const { Text, RefreshControl, Image, Dimensions, Linking } = require('react-native');
import { connect } from 'react-redux';
import FileInput from "../components/FileInput";
const theme = require('../themes/banzhow').default;
import Contents from "../../Content";
import Link from "../components/Link";

import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsOfService from "../screens/TermsOfService";

let Alert;

class ContactTab extends Component {

    constructor() {

        super();

        this.state = {
            logoValid: false,
            logoInvalid: false,
            emailInvalid: false,
            emailValid: false,
            showPrivacyPolicy: false,
            showTerms: false,
            optIn: true
        };
    }

    componentWillMount() {
        Alert = require('react-native').Alert;
    }

    render() {
        if (this.state.showPrivacyPolicy) {
            return (<PrivacyPolicy onBackButtonPress={() => this.setState({ showPrivacyPolicy: false })} />);
        }
        else if (this.state.showTerms) {
            return (<TermsOfService onBackButtonPress={() => this.setState({ showTerms: false })} />);
        }
        else if (this.state.showContactSuccess) {
            return (
                <Card style={{
                    width: "100%",
                    maxWidth: "500px",
                    marginHorizontal: "auto",
                    marginVertical: "50px"
                }}>
                    <CardItem style={theme.checkoutHeader}>
                        <H2 style={{ ...theme.checkoutHeaderText, textAlign: "left", lineHeight: "36px" }}>
                            Success!  You've successfully submitted your request!  We will be in touch shortly.
                                </H2>
                    </CardItem>
                    <CardItem>
                        <Button info onPress={() => this.setState({ showContactSuccess: false })}>Submit New Request</Button>
                    </CardItem>
                </Card>
            );
        }
        else {
            return (
                <Container style={{ height: Dimensions.get("window").height - 50 }} theme={theme}>
                    <Header onClick={() => this.props.goHome()}>
                        <Button transparent>
                            <Image source={Contents.companyLogoUrl}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginTop: "-12px"
                                }} />
                        </Button>
                        <Title>{Contents.comanyTitle}</Title>
                        {/*<Button transparent onPress={this.handleNewBtnPress.bind(this)}>
            <Icon name="md-add" />
          </Button>*/}
                    </Header>
                    <Content refreshControl={
                        <RefreshControl
                            refreshing={this.props.isLoading}
                            onRefresh={() => { this.props.dispatch({ type: 'appContents/get' }) }}
                        />}
                        style={theme.innerWrapper} >
                        <View style={{
                            alignItems: "center", paddingTop: "45px", paddingBottom: "35px", marginHorizontal: "15px"
                        }}>
                            <Text style={{
                                fontFamily: 'open_sanslight',
                                fontSize: "19px",
                                marginTop: "20px",
                                marginBottom: "10px",
                                color: "#666",
                                textAlign: "center"
                            }}>{Contents.contactHeading}</Text>

                            <View style={theme.divider}></View>

                            <Text style={{
                                textAlign: "center",
                                maxWidth: "750px",
                                fontSize: "15px",
                                color: "#7f8c8d",
                                lineHeight: "1.5"
                            }}>{Contents.contactContent}</Text>
                        </View>

                        <View style={{ marginHorizontal: "15px" }}>

                            <View style={{ paddingBottom: "5px" }}>
                                <Text style={{ textAlign: "center" }}>We just need a little bit of information.</Text>
                            </View>

                            <View>
                                <Text style={{ textAlign: "center" }}>This will allow us to process your request and update you at each stage of the process.</Text>
                            </View>

                        </View>

                        <Text style={theme.divider}></Text>

                        <List style={{ paddingRight: "17px" }}>

                            <ListItem>

                                <InputGroup
                                    error={this.state.emailInvalid ? true : false}
                                    success={this.state.emailValid ? true : false}
                                    borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input
                                        onChange={this.onContentChange.bind(this)}
                                        required
                                        style={theme.contactTextInput}
                                        keyboardType="email-address"
                                        stackedLabel
                                        name="email"
                                        label="Email:"
                                        placeholder="Your email address"
                                        value={this.props.content.email}
                                    />
                                </InputGroup>

                            </ListItem>

                            <ListItem>

                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} style={{ padding: "15px" }} multiline={true} numberOfLines={2} stackedLabel name="message" value={this.props.content.companyInfo} label="Message:" placeholder="Give us as much detail as possible about your request." />
                                </InputGroup>

                            </ListItem>

                            <ListItem style={{ cursor: "pointer" }} onPress={(e) => { this.onContentChange({ target: { value: !this.props.content.optIn, name: "optIn" } }); }}>
                                <CheckBox name="optedIntoFollowUp" checked={this.props.content.optIn} />
                                <Text>Send me occasional emails with free content and offers from Vireo.</Text>
                            </ListItem>

                            <ListItem
                                style={{ ...theme.contactTextInputContainer, paddingRight: "0px" }}>
                                <View>
                                    <Button large block primary onPress={this.onSendClick.bind(this)}>Send</Button>
                                    <Text style={{ paddingVertical: "10px" }}>By clicking "Send" you aggree to our <Link href="#" onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ showPrivacyPolicy: true });
                                    }
                                    }>Privacy Policy</Link> & <Link href="#" onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ showTerms: true });
                                    }
                                    }>Terms of Service</Link></Text>
                                </View>
                            </ListItem>
                        </List>
                    </Content>
                </Container >
            );
        }
    }

    getDescription(index) {

        try {
            return this.props.content.offers.descriptions[index];
        }
        catch (e) {
            return "";
        }
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

    onSendClick() {

        const product = this.props.content.product || this.props.product;

        if (!!window) {
            fbq('track', 'InitiateCheckout');
        }

        var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (!emailRegex.exec(this.props.content.email)) {

            Alert.alert('Ivalid Email', 'Please input a valid email to move forward.  Thank you!');

            this.setState({ emailInvalid: true });
        }
        else {

            this.props.dispatch({
                type: 'contact/add', payload: {
                    product: product
                }
            });



            if (product === "home" || product === "contact") {
                this.setState({ showContactSuccess: true });
            } else {
                this.props.onSubmit();
            }
        }
    }
}

function mapStateToProps({ contact }) {
    return {
        ...contact
    };
}

export default connect(mapStateToProps)(ContactTab);