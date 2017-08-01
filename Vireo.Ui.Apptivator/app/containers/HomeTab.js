import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Content,
    Button,
    View,
    List,
    ListItem
} from 'native-base';
import { Text, RefreshControl, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import theme from '../themes/banzhow';
import Contents from "../../Content";

class HomeTab extends Component {

    static contextTypes = {
        navigator: React.PropTypes.any
    };

    static propTypes = {
        dispatch: React.PropTypes.func,
        todos: React.PropTypes.object
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'todos/get'
        });
    }

    handleNewBtnPress() {
        this.context.navigator.push({
            index: 1,
            title: 'New Todo'
        });
    }

    handleDeleteTodo(todo) {
        const { dispatch } = this.props;
        dispatch({
            type: 'todos/delete',
            todo
        });
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
                        refreshing={this.props.isLoading}
                        onRefresh={() => { this.props.dispatch({ type: 'appContents/get' }) }}
                    />}
                    style={theme.contentContainer}
                    contentContainerStyle={{ flexShrink: 1, alignItems: "stretch" }}>
                    <View style={{
                        alignItems: "center", paddingTop: "45px", paddingBottom: "50px"
                    }}>
                        <Text style={{
                            fontFamily: 'open_sanslight',
                            fontSize: "19px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            color: "#666",
                            textAlign: "center"
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
                            fontSize: "15px",
                            color: "#7f8c8d",
                            lineHeight: "20px"
                        }}>{Contents.homeContent}</Text>
                    </View>
                    <View style={{
                        minHeight: "1px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        alignItems: "center",
                        paddingTop: "25px",
                        backgroundColor: "#ecf0f1",
                        paddingBottom: "20px"
                    }} className="col-sm-3 price-group">
                        {Contents.offers.map((offer, i) => (
                            <View style={{
                                borderColor: "#ebebeb",
                                borderWidth: 0,
                                borderRadius: 0,
                                boxShadow: "none"
                            }} key={i} className="panel panel-default text-center" >
                                <View style={{
                                    backgroundColor: theme.subHeadingDefaultBg,
                                    borderRadius: 0,
                                    borderWidth: 0,
                                    paddingVertical: "10px",
                                    paddingHorizontal: "15px"
                                }} className="panel-heading">
                                    <Text style={theme.offerTitle}>{offer.title}</Text>
                                </View>
                                <View style={theme.offerPrice} className="panel-body">
                                    <Text style={{
                                        fontSize: "45px",
                                        color: "#fff",
                                        textAlign: "center"
                                    }} className="panel-title price">${offer.priceDollars}
                                        <Text style={{
                                            textAlignVertical: "bottom",
                                            fontSize: "45%",
                                            color: "#fff"
                                        }} className="price-cents">.{offer.priceCents}</Text>
                                        <Text style={{
                                            fontSize: "30%",
                                            fontStyle: "italic",
                                            color: "#fff",
                                            paddingLeft: "10px",
                                            whiteSpace: "noWrap"
                                        }} className="price-month">{offer.subscriptionPeriod}</Text>
                                    </Text>
                                </View>
                                <List style={{
                                    backgroundColor: "#fafafa"
                                }} className="list-group">
                                    {offer.descriptions.map((description, i) => (
                                        <ListItem style={theme.offerDescription} className="list-group-item" key={i}>
                                            <Text style={theme.offerDescriptionText}>{description}</Text>
                                        </ListItem>
                                    ))}

                                    <ListItem onClick={this.props.onCallToAction} onPress={this.props.onCallToAction} style={theme.callToActionContainer} className="list-group-item">
                                        <Button large block className="btn btn-primary ui-link">{offer.callToAction}</Button>
                                    </ListItem>
                                </List>
                            </View>
                        ))}
                    </View>
                </Content>
            </Container >
        );
    }
}

function mapStateToProps({ appContents }) {
    return {
        ...appContents
    };
}

export default connect(mapStateToProps)(HomeTab);
