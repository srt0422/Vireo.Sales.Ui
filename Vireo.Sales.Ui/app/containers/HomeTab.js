import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    View
} from 'native-base';
import { Text, RefreshControl, Image, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import theme from '../themes/banzhow';
import Contents from "../../Content";

import { Offer } from "../components";

class HomeTab extends Component {

    static contextTypes = {
        navigator: React.PropTypes.any
    };

    static propTypes = {
        dispatch: React.PropTypes.func,
        todos: React.PropTypes.object
    };

    render() {
        return (
            <Container style={{ height: Dimensions.get("window").height - 50 }} theme={theme}>
                <Header onClick={() => this.props.goHome()}>
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
                        refreshing={this.props.isLoading}
                        onRefresh={() => { this.props.dispatch({ type: 'appContents/get' }) }}
                    />}
                    style={theme.innerWrapper}
                    contentContainerStyle={theme.outerWrapper}>
                    <View style={theme.topContentWrapper}>
                        <Text style={{
                            fontFamily: 'open_sanslight',
                            fontSize: 24,
                            marginTop: "20px",
                            marginBottom: "10px",
                            color: "#666",
                            textAlign: "center",
                            lineHeight: "1.25"
                        }}>{Contents.homeHeading}</Text>

                        <View style={{
                            height: "1px",
                            width: "70px",
                            marginTop: "17px",
                            marginBottom: "17px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor: "#dbdbdb"
                        }}></View>

                        <Text style={{
                            textAlign: "center",
                            maxWidth: "750px",
                            fontSize: 18,
                            color: "#7f8c8d",
                            lineHeight: "2"
                        }}>{Contents.homeContent}</Text>
                    </View>
                    <View style={{ ...this.getOfferContainerStyle(false, true), flexDirection: "column", alignItems: "center" }} className="col-sm-3 price-group">
                        {Contents.offers.map((offer, i) => {
                            if (offer.length) {
                                return (
                                    <View style={this.getOfferContainerStyle(true, i < offer.length - 1)} key={i}>
                                        {offer.map((childOffer, cIndex) => {
                                            return (
                                                <View style={this.getOfferStyle(cIndex, offer)} key={cIndex}>
                                                    <Offer {...childOffer} theme={theme} onCallToAction={this.onCallToAction.bind(this)} />
                                                </View>
                                            );
                                        })}
                                    </View>
                                );
                            }
                            else {
                                return (
                                    <View style={this.getOfferStyle(i, Contents.offers)} key={i}>
                                        <Offer {...offer} theme={theme} onCallToAction={this.onCallToAction.bind(this)} />
                                    </View>
                                );
                            }
                        })}
                    </View>
                </Content>
            </Container>
        );
    }

    onCallToAction(path) {

        this.props.dispatch({
            type: 'contact/set',
            payload: {
                name: "product",
                value: path
            }
        });

        this.props.onCallToAction(path);
    }

    getOfferStyle(i, offers) {

        let windowWidth = Dimensions.get("window").width;
        let isMobile = windowWidth <= 720;

        var style = {
            //height: 371.200,
            display: "block",
            textAlign: "center",
            width: "100%",
            paddingBottom: isMobile ? 50 : 0
        };

        var baseWidth = windowWidth * .8;

        if (windowWidth > 720) {
            style = {
                ...style,
                display: "inline",
                width: (baseWidth / offers.length) - ((25 * (offers.length - 1)) / offers.length),
                marginLeft: i !== 0 ? 25 : 0
            };
        }

        return style;
    }

    getOfferContainerStyle(isChildContainer, isLast) {

        let windowWidth = Dimensions.get("window").width;
        let isMobile = windowWidth <= 720;

        let commonStyles = {
            minHeight: "1px",
            alignItems: "center",
            //paddingTop: "25px",
            backgroundColor: "#ecf0f1",
            paddingBottom: isMobile || isChildContainer ? 0 : 50,
            marginBottom: isMobile && !isLast ? 0 : 50,
            flexDirection: "column",
            width: "100%"
        };

        if (!isChildContainer) {
            commonStyles.paddingTop = 50;
        }

        if (isMobile) {
            return commonStyles;
        }

        return {
            ...commonStyles,
            width: "auto",
            flexDirection: "row",
            alignItems: "baseline",
            paddingHorizontal: 50
        };
    }

    getOfferWidth(offer, index) {
    }
}

function mapStateToProps({ appContents }) {
    return {
        ...appContents
    };
}

export default connect(mapStateToProps)(HomeTab);
