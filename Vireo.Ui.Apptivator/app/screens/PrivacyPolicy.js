import * as React from "react";
import { Text, Dimensions, Image, RefreshControl } from "react-native";
import { View, H1, H2, H3, Button, Container, Header, Content, Title } from "native-base";
import theme from "../themes/banzhow";
import Contents from "../../Content";

export default (props) => (
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
        </Header>
        <Content refreshControl={
            <RefreshControl
                refreshing={false}
                onRefresh={() => { }}
            />}
            style={theme.innerWrapper} >
            <View style={{ padding: "50px", lineHeight: "36px" }}>
                <View>
                    <Button small primary onPress={props.onBackButtonPress}><Text style={{ lineHeight: 1, color: "#fff" }}>Back</Text></Button>
                </View>
                <H1 style={{ paddingTop: "25px" }}>Privacy Policy</H1>
                <View style={{paddingVertical: "25px"}}>
                    <Text>I, Scott Terry (“us,” “we,” or “Company”), am committed to respecting the privacy rights of its customers, visitors, and other users of the Company Website, software platform, and all associated smartphone applications (collectively, “the Platform”). We created this Website Privacy Policy (“Privacy Policy”) to give you confidence as you visit and use the Platform, and to demonstrate our commitment to fair information practices and the protection of privacy. This Privacy Policy is only applicable to the Platform, and not to any other websites or applications that you may be able to access from the Platform, each of which may have data collection, storage, and use practices and policies that differ materially from this Privacy Policy.</Text>
                </View>
                <H2>Information Gathering & Usage</H2>
                <H3 style={{ paddingVertical: "25px" }}>Types of Information Collected</H3>
                <H3>Traffic Data Collected</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>We automatically track and collect the following categories of information when you visit our Platform: (1) IP addresses; (2) domain servers; (3) types of computers, smartphones, or tablets accessing the Platform; (4) types of web browsers used to access the Platform; and (5) analytics data related to mobile application use, including, but not limited to, length of time on the application, activities on the application, and features accessed on the application (collectively “Traffic Data”). Traffic Data is anonymous information that does not personally identify you but is helpful for marketing purposes or for improving your experience on the Platform. We also use “cookies” to customize content specific to your interests, to ensure that you do not see the same advertisement repeatedly, and to store your password so you do not have to re-enter it each time you visit the Platform.</Text>
                </View>
                <H3>Personal Information Collected</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>In order for you to access certain services and products that we offer via the Platform, we require you to provide us with certain information that personally identifies you (“Personal Information”). Personal Information may include the following categories of information: (1) Contact Data (such as your name, mailing address, and e-mail address, or other optional information you may provide via an application); (2) Financial Data (such as your account or credit card number); and (3) Demographic Data (such as your zip code, age, and income). If you communicate with us by e-mail, post messages to any of our chat groups, bulletin boards, or forums, or otherwise complete online forms, surveys, or contest entries, any information provided in such communication may be collected as Personal Information.  This shall include the e-mail addresses of those who communicate with us via e-mail, aggregate information on what pages consumers access or visit, and information volunteered by the consumer (such as survey information and/or site registrations).</Text>
                </View>
                <H3>Potential for Location Data to be Collected</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>Certain applications provided via the Platform and service may provide you the choice of allowing access to your location data, particularly if you give such application access to your social media account(s) such as Facebook, Twitter, or Instagram.  This means that the application provider may know the exact physical location of an end user and contact an end user to provide product offerings in a given area.  If you wish to disable this functionality, you may do so in the given application.</Text>
                </View>
                <H3>Potential for Other Users to Contact You</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>To the extent that a given application supports personal messaging functionality between and among end users, you may receive personal messages from other end users.  You can disable this functionality by using the unsubscribe and other disabling instructions in the given application.</Text>
                </View>
                <H3>Potential for Advertisement Links to Other Sites and Applications</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>A given application may provide you with an advertising link to other, third-party sites and applications.  Such third-party sites will have their own data collection practices and policies.  Please review the privacy policy for such sites and exercise caution in providing information that personally identifies you.  We have no responsibility, access, or control over the data collection practices and policies of such third-party sites and applications.  You will use such sites and applications at your own risk and outside of the scope of this Privacy Policy.  The provision of such advertisements is done on an “As Is” basis, with no endorsements or representations.</Text>
                </View>
                <H2>Uses of Information Collected</H2>
                <H3 style={{ paddingTop: "25px" }}>Company Use of Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>We use Contact Data to send you information about our company or our products or services, or promotional material from some of our partners, or to contact you when necessary. We use your Financial Data to verify your qualifications for certain products or services and to bill you for products and services. We use your Demographic Data to customize and tailor your experience on the Platform, displaying content that we think you might be interested in and according to your preferences.  We and the applications available on the Platform may use Personal Information to contact you regarding information that may interest you or to otherwise offer you coupons, services, advice, information, or other redeemable promotions.  If you wish to unsubscribe from such communications, please follow the unsubscribe instructions provided via the given application or the as provided in any such communication.</Text>
                </View>
                <H3>Sharing of Personal Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>We may share certain categories of information we collect from you in the ways described in this Privacy Policy. We may share Demographic Data with advertisers and other third parties only on an aggregate (i.e., non-personally-identifiable) basis. We will not share Contact Data with other companies who may want to send you information about their products or services, unless you we have your permission to do so or as provided for at the end of this subsection. We also share Contact Data and Financial Data with our business partners who assist us by performing core services (such as hosting, billing, fulfillment, or data storage and security) related to our operation of the Platform. Those business partners have all agreed to uphold the same standards of security and confidentiality that we have promised to you in this Privacy Policy, and they will only use your Contact Data and other Personal Information to carry out their specific business obligations to Company. The Contact Data and Financial Data we collect is used to improve the content of our applications and the quality of our service, and is not shared with or sold to other organizations for commercial purposes, except to provide products or services you’ve requested, when we have your permission, or under the following circumstances:</Text>
                    <Text>1) It is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Terms of Service, or as otherwise required by law.</Text>
                    <Text>2) We transfer information about you if Company is acquired by or merged with another company. In this event, Company will notify you before information about you is transferred and becomes subject to a different privacy policy.</Text>
                </View>
                <H3>Users choice regarding collection, use, and distribution of Personal Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>You may choose not to provide us with any Personal Information. In such an event, you can still access and use certain parts of the Platform; however you will not be able to access and use those portions of the Platform, including our core services, which require your Personal Information.</Text>
                </View>
                <H3>Confidentiality and Security of Personal Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>Except as otherwise provided in this Privacy Policy, we will keep your Personal Information private and will not share it with third parties, unless such disclosure is necessary to: (a) comply with a court order or other legal process; (b) protect our rights or property; or (c) enforce our Terms of Service.</Text>
                </View>
                <H3>User Ability to Access, Update, and Correct Personal Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>We maintain a procedure in order to help you confirm that your Personal Information remains correct and up-to-date. At any time, you may visit your personal profile. Through your personal profile you may: (a) review and update your Personal Information that we have already collected; (b) choose whether or not you wish us to send you information about our company, or promotional material from some of our partners; and/or (c) choose whether or not you wish for us to share your Personal Information with third parties.</Text>
                    <Text>You may contact us at any time to receive information regarding disclosure of personally identifiable information to third-parties for direct marketing purposes, pursuant to CA Civil Code 1798.83, at info@cloudvireo.com.</Text>
                </View>
                <H3>Age Limitation</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>Our Platform, and all applications promulgated through it, are not directed to or should be available to children under 13 years of age.  We do not knowingly collect any kind of personal data from children under 13 years of age.  If we become aware of such data collection, we will immediately delete such data.  If any parent or guardian learns or otherwise becomes aware of a child under 13 years of age using the Platform or otherwise providing personal information, please contact us at info@cloudvireo.com.</Text>
                </View>
                <H3>Lost or Stolen Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>You must promptly notify us if your credit card, user name, or password is lost, stolen, or used without permission. In such an event, we will remove that credit card number, user name, or password from your account and update our records accordingly.</Text>
                </View>
                <H3>Public Information</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>The Platform contains links to other websites. We are not responsible for the privacy practices or the content of such websites. We also make chat rooms, forums, message boards, and newsgroups available to you. Please understand that any information that is disclosed in these areas becomes public information. We have no control over its use and you should exercise caution when deciding to disclose your Personal Information.</Text>
                </View>
                <H3>Changes</H3>
                <View style={{paddingVertical: "25px"}}>
                    <Text>We reserve the right, at any time and without notice, to add to, change, update, or modify this Privacy Policy, simply by posting such change, update, or modification on the Platform and without any other notice to you. Any such change, update, or modification will be effective immediately upon posting on the Platform.</Text>
                </View>
                <View>
                    <Button small primary onPress={props.onBackButtonPress}><Text style={{ lineHeight: 1, color: "#fff" }}>Back</Text></Button>
                </View>
            </View>
        </Content>
    </Container>
);