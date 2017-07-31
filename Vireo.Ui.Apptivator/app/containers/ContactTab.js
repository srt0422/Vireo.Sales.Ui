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
    CardItem
} from 'native-base';

import { Text, RefreshControl, Image, Dimensions, Alert } from 'react-native';
import { connect } from 'react-redux';
import FileInput from "../components/FileInput";
import theme from '../themes/banzhow';
import Contents from "../../Content";

class ContactTab extends Component {

    constructor() {

        super();

        this.state = {
            emailInvalid: false,
            emailValid: false
        };
    }

    render() {
        return (
            <Container style={{ height: Dimensions.get("window").height - 50 }} theme={theme}>
                <Header>
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
                    style={theme.contentContainer} >
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

                    <List>

                        <ListItem>

                            <InputGroup
                                error={this.state.emailInvalid ? true : false}
                                success={this.state.emailValid ? true : false}
                                borderType="rounded">
                                <Input
                                    onChange={this.onContentChange.bind(this)}
                                    required
                                    style={theme.contactTextInput}
                                    keyboardType="email-address"
                                    stackedLabel
                                    name="email"
                                    label="Email:"
                                    placeholder="Your email address" />
                            </InputGroup>

                        </ListItem>

                        <ListItem>

                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} style={{ padding: "15px" }} multiline={true} numberOfLines={2} stackedLabel name="companyInfo" label="Company Information:" placeholder="Tell us about your company" />
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

                    <List>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="companyTitle" label="Company Name:" placeholder="Shown at the top of your app" />
                            </InputGroup>
                        </ListItem>
                        <ListItem style={{ borderBottomWidth: 0 }}>
                            <FileInput onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="companyLogo" label="Company Logo:" placeholder="Upload your logo image" />
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="homeHeading" label="Business Introduction Header:" placeholder="Short and simple heading" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="homeContent" label="Business Introduction:" placeholder="Sell yourself in few words" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="offers.title" label="Product/Service Offer:" placeholder="Your product/service name" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.price" label="Your Price (optional):" placeholder="Product/service price" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.subscriptionPeriod" label="Payment frequency (optional):" placeholder="For subscriptions: monthly, yearly..." />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} required style={theme.contactTextInput} stackedLabel name="offers.descriptions[0]" label="Product/service description 1:" placeholder="1 benefit of your product" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[1]" label="Product/service description 2:" placeholder="(optional) another benefit" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[2]" label="Product/service description 3 (optional):" placeholder="(optional) another benefit" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[3]" label="Product/service description 4 (optional):" placeholder="(optional) another benefit" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.descriptions[4]" label="Product/service description 5 (optional):" placeholder="(optional) another benefit" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup borderType="rounded">
                                <Input onChange={this.onContentChange.bind(this)} style={theme.contactTextInput} stackedLabel name="offers.callToAction" label="Call to action (optional):" placeholder="buy now!, get in touch!, etc." />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <Button large onPress={this.onCreateApp.bind(this)}>Create App</Button>
                        </ListItem>
                    </List>
                </Content>
            </Container >
        );
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

        var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (emailRegex.exec(this.props.content.email)) {
            this.props.onSubmit();
        }
        else {

            Alert.alert('Ivalid Email', 'Please input a valid email to move forward.  Thank you!');

            this.setState({ emailInvalid: true });
        }
    }
}

function mapStateToProps({ appContents }) {
    return {
        ...appContents
    };
}

export default connect(mapStateToProps)(ContactTab);