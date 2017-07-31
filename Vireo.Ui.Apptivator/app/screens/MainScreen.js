import React, { Component } from 'react';
import {
    TabBarIOS,
    Text,
} from 'react-native';
import theme from '../themes/banzhow';
import HomeTab from '../containers/HomeTab';
import ContactTab from '../containers/ContactTab';
import Icon from 'react-native-vector-icons/Ionicons';

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

    callToAction() {
        this.setState({ tabIndex: 1 });
    }

    submit() {
        this.props.navigator.push({index: 1, title: "Purchase Screen"});
    }

    render() {
        return (
            <TabBarIOS                
                tintColor={theme.brandPrimary}
                unselectedTintColor={theme.grey}>                
                <Icon.TabBarItem
                    title="Home"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={ this.state.tabIndex === 0}
                    onPress={() => this.setState({ tabIndex: 0 })}
                    iconColor={theme.grey}
                    selectedIconColor={theme.brandPrimary}
                    style={{flex: 1}}>
                    <HomeTab
                        onCallToAction={this.callToAction.bind(this)} />

                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Contact"
                    iconName="ios-paperplane-outline"
                    selectedIconName="ios-paperplane"
                    selected={this.state.tabIndex === 1}
                    onPress={() => this.setState({ tabIndex: 1 })}
                    iconColor={theme.grey}
                    selectedIconColor={theme.brandPrimary}>
                    <ContactTab onSubmit={this.submit.bind(this)} />
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
