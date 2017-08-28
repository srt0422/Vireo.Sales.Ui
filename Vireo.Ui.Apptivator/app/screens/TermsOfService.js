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
                <View style={{paddingVertical: "25px"}}>
                    <Text>By using the apptivator.cloudvireo.com web site ("Service"), all services of Scott Terry ("Vireo"), you are agreeing to be bound by the following terms and conditions ("Terms of Service").</Text>
                    <Text>Vireo reserves the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current Service, including the release of new tools and resources, are subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes. You can review the most current version of the Terms of Service at any time at: https://www.apptivator.cloudvireo.com/terms-service/.</Text>
                    <Text>Violation of any of the terms below will result in the termination of your Account. While Vireo prohibits such conduct and Content on the Service, you understand and agree that Vireo cannot be responsible for the Content posted on the Service and you nonetheless may be exposed to such materials. You agree to use the Service at your own risk.</Text>
                </View>
                <H1>Account Terms</H1>
                <View style={{ paddingVertical: "25px" }}>
                    <Text>You must be 13 years or older to use this Service.

You must be a human. Accounts registered by "bots" or other automated methods are not permitted.

You must provide your legal full name, a valid email address, and any other information requested in order to complete the signup process.

You are responsible for maintaining the security of your account and password. Vireo cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.

You are responsible for all Content posted and activity that occurs under your account (even when Content is posted by others who have access to your account).

You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).

You must provide a privacy policy on your mobile application to inform your end users and visitors of the privacy practices of your mobile application. You may supply your own; provided, however, you do not, Vireo reserves the right to supply one for you or terminate your account and its services to you, in its sole discretion.</Text>
                </View>
                <H1>Payments and Refund Terms</H1>
                <View style={{ paddingVertical: "25px" }}>
                    <Text>A valid credit card is required.

There will be no refunds or credits for setup fees, partial months of service, upgrade/downgrade refunds, or refunds for months unused with an open account. In order to treat everyone equally, no exceptions will be made.

All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, levies, or duties, excluding only United States (federal or state) taxes.

Vireo will use commercially reasonable efforts to have the application approved by the appropriate mobile platform provider. Although there is a high likelihood of approval, we do not and cannot guarantee acceptance. If your application is denied by the appropriate mobile platform provider you may cancel your account, however there are no refunds under any circumstances.</Text>
                </View>
                <H1>Cancelation and Termination</H1>
                <View style={{ paddingVertical: "25px" }}>
                    <Text>Term. This Agreement will be in effect from the time that the Service(s) are activated until (1) it is terminated as provided for by this Agreement or by any addendum to this Agreement or (2) it is replaced by a revised Agreement.

Cancellation. You must cancel your subscription before your monthly renewal date and prior to debiting of funds to Vireo in order to avoid the next billing (each Monthly Period). We will bill the monthly subscription fee plus any applicable taxes to the Payment Method you provide to us during registration (or to a different Payment Method if you change your account information). WE DO NOT PROVIDE REFUNDS OR CREDITS FOR ANY PARTIAL-MONTH SERVICE PERIODS. Vireo shall not refund to You any fees paid in advance of such cancellation and You shall be obligated to pay all fees and charges accrued prior to the effectiveness of such cancellation; further, You shall be obligated to pay 100% of all charges for all Services remaining in the Term

Cancellation. To cancel, go to the "Dashboard" on our website and follow the instructions for cancellation. All cancellations must be made in writing, via email, to info@cloudvireo.com. Sending an email to any other Vireo email address shall not constitute as a proper notification of cancellation.

Your Obligations Upon Cancellation. Once an email is sent to info@cloudvireo.com regarding cancelling your services, a Vireo representative will reach out to you for a close out interview within 48 hours. This exit interview is mandatory to cancelling your services and Vireo will continue to bill your account if your exit interview does not occur within two (2) weeks.

Vireo reserves the right to refuse service to anyone for any reason at any time.</Text>
                </View>
                <H1>Modifications to the Service and Prices</H1>
                <View style={{ paddingVertical: "25px" }}>
                    <Text>Vireo reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.

Vireo shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.

From time to time, Vireo may issue an update to the Vireo application which may add, modify, and/or remove features from the application. These updates may be pushed out automatically with little or no notice, although Vireo will do everything in its power to notify you in advance of an upcoming update, including details on what the update includes.</Text>
                </View>
                <H1>Copyright and Content Ownership</H1>
                <View style={{ paddingVertical: "25px" }}>
                    <Text>We claim no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours. However, by using the Vireo application to create your mobile application, you agree to allow others to view and share your Content.

Vireo does not pre-screen Content, but Vireo and its designee have the right (but not the obligation) in their sole discretion to refuse or remove any Content that is available via the Service.

The look and feel of the Service is copyright 2017 Vireo All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML/CSS or visual design elements without express written permission from Vireo.

Vireo may make certain software available to you through the Service. If you download or otherwise use the software from the Service, the software, including all files and images contained in or generated by the software, look and feel, HTML/CSS, visual design elements, and accompanying data (collectively, “Software”) are deemed to be licensed to you by Vireo, for your personal and noncommercial use only. Vireo does not transfer either the title or the intellectual property rights to the Software, and Vireo retains full and complete title to the Software as well as all intellectual property rights therein. You may not sell, redistribute, or reproduce the Software, nor may you decompile, reverse-engineer, disassemble, or otherwise convert the Software to a human-perceivable form.

You grant Vireo a license to use the materials you post to the Services. By posting, downloading, displaying, performing, transmitting, or otherwise distributing user content to the Service, you are granting Vireo, its affiliates, officers, directors, employees, consultants, agents, and representatives a license to use user content in connection with the operation of Vireo, its affiliates, officers, directors, employees, consultants, agents, and representatives, including without limitation, a right to copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate, and reformat user content. You will not be compensated for any user content. By posting user content on the Service, you warrant and represent that you own the rights to the user content or are otherwise authorized to post, distribute, display, perform, transmit, or otherwise distribute user content.

When accessing or using the Services, you agree to obey the law and to respect the intellectual property rights of others. Your use of the Services is at all times governed by and subject to laws regarding copyright, trademark, patent, and trade secret ownership and use of intellectual property. You agree not to upload, download, display, perform, transmit, or otherwise distribute any information or content in violation of any party’s copyrights, trademarks, patents, trade secrets, or other intellectual property or proprietary rights. You agree to abide by laws regarding copyright, trademark, patent, and trade secret ownership and use of intellectual property, and you shall be solely responsible for any violations of any laws and for any infringements of any intellectual property rights caused by any content you provide, post, or transmit, or that is provided or transmitted using your user name or user ID. The burden of proving that any Content does not violate any laws or intellectual property rights rests solely with you.

All Vireo content included on its site, its Software, and through the Service is the property of Vireo and is protected by U.S. and international intellectual property laws. All Vireo content, Software, code, HTML/CSS, and visual design data is is copyright 2017 Vireo</Text>
                </View>
                <H1>General Conditions</H1>
                <View style={{ paddingVertical: "25px" }}>
                    <Text>Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.

Technical support is only available via email and phone. The technical support email address is info@cloudvireo.com. Our live phone support hours are available 6am - 6pm PST, Monday through Friday, which can be reached by dialing 1-800-549-8138. Email support is available 24/7.

You authorize the Company to use, reuse, and to grant others the right to use and reuse, your Content, and any reproduction or simulation thereof, in any form of media or technology now known or hereafter developed, both during and after your use of the Services, for any purposes related to the Service.

You understand that Vireo uses third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.

You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, or any other Vireo service.

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Vireo.

We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.

Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Vireo customer, employee, member, or officer will result in immediate account termination.

You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.

You must not upload, post, host, or transmit unsolicited email, SMSs, or "spam" messages.

You must not transmit any worms or viruses or any code of a destructive nature.

Vireo does not warrant that (i) the service will meet your specific requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the Service will be corrected.

You expressly understand and agree that Vireo shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if Vireo has been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the service; (v) or any other matter relating to the service.

The failure of Vireo to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision. The Terms of Service constitutes the entire agreement between you and Vireo and govern your use of the Service, superseding any prior agreements between you and Vireo (including, but not limited to, any prior versions of the Terms of Service).

In no event shall Vireo liability to you exceed the amount actually paid to Vireo by you during the preceding 12 months.

Any exclusions of liability contained herein are not applicable to residents of New Jersey. With respect to residents of New Jersey, Vireo shall not be liable for any damages resulting from the use of this Site or Services unless such damages are the result of our negligent or reckless acts or omissions.

SOME STATES AND/OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF DIRECT, INDIRECT, INCIDENTAL, SPECIAL AND/OR CONSEQUENTIAL DAMAGES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.</Text>
                </View>
                <View>
                    <Button small primary onPress={props.onBackButtonPress}><Text style={{ lineHeight: 1, color: "#fff" }}>Back</Text></Button>
                </View>
            </View>
        </Content>
    </Container>
);