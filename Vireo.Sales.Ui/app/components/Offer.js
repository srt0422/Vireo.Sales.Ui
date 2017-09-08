import * as React from "react";
import { View, Text, List, ListItem, Button } from "native-base";

export default (props) => <View style={{
    borderColor: "#ebebeb",
    borderWidth: 0,
    borderRadius: 0,
    boxShadow: "none",
}} className="panel panel-default text-center offer" >
    <View style={{
        backgroundColor: props.theme.subHeadingDefaultBg,
        borderRadius: 0,
        borderWidth: 0,
        paddingVertical: "10px",
        paddingHorizontal: "15px"
    }} className="panel-heading">
        <Text style={props.theme.offerTitle}>{props.title}</Text>
    </View>
    <View style={props.theme.offerPrice} className="panel-body">
        <Text style={{
            fontSize: "45px",
            color: "#fff",
            textAlign: "center"
        }} className="panel-title price">${props.priceDollars}
            <Text style={{
                textAlignVertical: "bottom",
                fontSize: "45%",
                color: "#fff"
            }} className="price-cents">.{props.priceCents}</Text>
            <Text style={{
                fontSize: "30%",
                fontStyle: "italic",
                color: "#fff",
                paddingLeft: "10px",
                whiteSpace: "noWrap"
            }} className="price-month">{props.subscriptionPeriod}</Text>
        </Text>
    </View>
    <List style={{
        backgroundColor: "#fafafa"
    }} className="list-group">
        {props.descriptions.map((description, i) => (
            <ListItem style={props.theme.offerDescription} className="list-group-item" key={i}>
                <Text style={props.theme.offerDescriptionText}>{description}</Text>
            </ListItem>
        ))}

        <ListItem style={props.theme.callToActionContainer} className="list-group-item">
            <Button large block className="btn btn-primary ui-link" onPress={() => props.onCallToAction(props.offerKey)} >{props.callToAction}</Button>
        </ListItem>
    </List>
</View>;