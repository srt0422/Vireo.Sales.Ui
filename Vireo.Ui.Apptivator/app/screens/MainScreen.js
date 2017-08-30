import React, { Component } from 'react';
import {
    TabBarIOS,
    Text,
} from 'react-native';
import theme from '../themes/banzhow';
import HomeTab from '../containers/HomeTab';
import ContactTab from '../containers/ContactTab';

let Icon;

class MainScreen extends Component {

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

    callToAction(path) {

        fbq('track', 'Lead');

        this.props.navigator.push({ index: path });
        //this.setState({ tabIndex: 1 });
    }

    submit() {

        fbq('track', 'CompleteRegistration');

        this.props.navigator.push({ index: 1, title: "Purchase Screen" });
    }

    componentWillMount() {
        Icon = require('react-native-vector-icons/Ionicons').default;
    }

    render() {
        return (
            <TabBarIOS
                tintColor={theme.brandPrimary}
                unselectedTintColor={theme.grey}
                style={{ maxHeight: "100%" }}>
                <Icon.TabBarItem
                    title="Home"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.props.path === "home"}
                    onPress={() => this.props.navigator.push({ index: "home" })}
                    iconColor={theme.grey}
                    selectedIconColor={theme.brandPrimary}
                    style={{ flex: 1 }}>
                    <HomeTab
                        onCallToAction={this.callToAction.bind(this)} />

                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Contact"
                    iconName="ios-paperplane-outline"
                    selectedIconName="ios-paperplane"
                    selected={this.props.path !== "home"}
                    onPress={() => this.props.navigator.push({ index: "contact" })}
                    iconColor={theme.grey}
                    selectedIconColor={theme.brandPrimary}>
                    <ContactTab product={this.props.path} onSubmit={this.submit.bind(this)} />
                </Icon.TabBarItem>
                {/*
                <Icon.TabBarItem
                    title="Calendar"
                    iconName="ios-calendar-outline"
                    selectedIconName="ios-calendar"
                    selected={this.state.tabIndex === 2}
                    onPress={() => this.setState({ tabIndex: 2 })}
                    iconColor={yayoiTheme.grey}
                    selectedIconColor={yayoiTheme.brandPrimary}>
                    <Text>Calendar Page</Text>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Me"
                    iconName="ios-person-outline"
                    selectedIconName="ios-person"
                    selected={this.state.tabIndex === 3}
                    onPress={() => this.setState({ tabIndex: 3 })}
                    iconColor={yayoiTheme.grey}
                    selectedIconColor={yayoiTheme.brandPrimary}>
                    <Text>My Page</Text>
                </Icon.TabBarItem>
            */}
            </TabBarIOS>
        );
    }

}

export default MainScreen;
