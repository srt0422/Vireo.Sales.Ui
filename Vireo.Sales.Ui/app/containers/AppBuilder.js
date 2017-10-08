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
    CheckBox
} from 'native-base';

const {  Text, RefreshControl, Image, Dimensions, Linking   } = require('react-native');
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
                            alignItems: "center", paddingTop: "45px", paddingBottom: "35px"
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
                                <Text style={{ textAlign: "center" }}>Tell us a little about yourself.</Text>
                            </View>

                            <View>
                                <Text style={{ textAlign: "center" }}>This will allow us to setup your app and send you alerts at each stage of the process</Text>
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
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} style={{ padding: "15px" }} multiline={true} numberOfLines={2} stackedLabel name="companyInfo" value={this.props.content.companyInfo} label="Company Information:" placeholder="Tell us about your company" />
                                </InputGroup>

                            </ListItem>

                        </List>

                        <Text style={theme.divider}></Text>

                        <View style={{
                            marginHorizontal: "15px"
                        }}>
                            <View style={{ paddingBottom: "5px" }}>
                                <Text style={{ textAlign: "center" }}>Fill in the content that you want in your new app.</Text>
                            </View>
                            <View>
                                {/*<Text style={theme.divider}></Text>*/}
                                <Text style={{ textAlign: "center" }}>We will take this content and use it to fill specific sections of your app.</Text>
                            </View>
                        </View>

                        <Text style={theme.divider}></Text>

                        <List style={{ paddingRight: "17px" }}>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="companyTitle" value={this.props.content.companyTitle} label="Company Name:" placeholder="Shown at the top of your app" />
                                </InputGroup>
                            </ListItem>
                            <ListItem style={{ ...theme.contactTextInputContainer, borderBottomWidth: 0, paddingRight: "0" }}>
                                <FileInput
                                    error={this.state.logoInvalid ? true : false}
                                    success={this.state.logoValid ? true : false}
                                    onChange={this.onContentChange.bind(this)} required style={{ ...theme.contactTextInput }} stackedLabel name="companyLogo" label="Company Logo:" placeholder="Upload your logo image" />
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="homeHeading" value={this.props.content.homeHeading} label="Business Introduction Header:" placeholder="Short and simple heading" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="homeContent" value={this.props.content.homeContent} label="Business Introduction:" placeholder="Sell yourself in few words" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="offers.title" value={this.props.content.offers ? this.props.content.offers.title : ""} label="Product/Service Offer:" placeholder="Your product/service name" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.price" value={this.props.content.offers ? this.props.content.offers.price : ""} label="Your Price (optional):" placeholder="Product/service price" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.subscriptionPeriod" value={this.props.content.offers ? this.props.content.offers.subscriptionPeriod : ""} label="Payment frequency (optional):" placeholder="For subscriptions: monthly, yearly..." />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="offers.descriptions[0]" value={this.getDescription(0)} label="Product/service description 1:" placeholder="1 benefit of your product" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[1]" value={this.getDescription(1)} label="Product/service description 2:" placeholder="(optional) another benefit" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[2]" value={this.getDescription(2)} label="Product/service description 3 (optional):" placeholder="(optional) another benefit" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[3]" value={this.getDescription(3)} label="Product/service description 4 (optional):" placeholder="(optional) another benefit" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={theme.contactTextInputContainer}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[4]" value={this.getDescription(4)} label="Product/service description 5 (optional):" placeholder="(optional) another benefit" />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={{ ...theme.contactTextInputContainer, paddingRight: "0px" }}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.callToAction" value={this.props.content.offers ? this.props.content.offers.callToAction : ""} label="Call to action (optional):" placeholder="buy now!, get in touch!, etc...." />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={{ ...theme.contactTextInputContainer, paddingRight: "0px" }}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="privacyPolicy" value={this.props.content.privacyPolicy} label="Privacy Policy (optional):" placeholder="we'll provide a default if you don't have a privacy policy." />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup borderType="rounded"
                                    style={{ ...theme.contactTextInputContainer, paddingRight: "0px" }}>
                                    <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="terms" value={this.props.content.terms} label="Terms of Use (optional):" placeholder="we'll provide a default if you don't have terms of use." />
                                </InputGroup>
                            </ListItem>
                            <ListItem style={{ cursor: "pointer" }} onPress={() => this.setState({ optIn: !this.state.optIn })}>
                                <CheckBox name="optedIntoFollowUp" checked={this.state.optIn} />
                                <Text>Please contact me occasionally to help me profit as much as possible from my app. (updates about products and services, and promotional discounts)</Text>
                            </ListItem>
                            <ListItem
                                style={{ ...theme.contactTextInputContainer, paddingRight: "0px" }}>
                                <View>
                                    <Button large block primary onPress={this.onCreateApp.bind(this)}>Create App</Button>
                                    <Text style={{ paddingVertical: "10px" }}>By clicking "Create App" you aggree to our <Link href="#" onClick={(e) => {
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

        const { dispatch } = this.props;

        dispatch({
            type: 'appContents/set',
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        });
    }

    onCreateApp() {

        if (!!window) {
            fbq('track', 'InitiateCheckout');
        }

        var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (!emailRegex.exec(this.props.content.email)) {

            Alert.alert('Ivalid Email', 'Please input a valid email to move forward.  Thank you!');

            this.setState({ emailInvalid: true });
        }

        if (this.props.content.companyLogo == null || this.props.content.companyLogo == "") {

            Alert.alert('Ivalid Logo', 'Please add a valid logo to move forward.  Thank you!');

            this.setState({ logoInvalid: true });
        }
        else {

            this.props.onSubmit();
        }
    }
}

function mapStateToProps({ appContents }) {
    return {
        ...appContents
    };
}

export default connect(mapStateToProps)(ContactTab);