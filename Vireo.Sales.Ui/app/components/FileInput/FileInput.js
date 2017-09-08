import React, { Component } from "react";
import { View } from "native-base";

export default class FileInput extends Component {

    render() {

        let containerStyle = {},
            labelContainerStyle = {},
            labelStyle = {
                color: "rgb(87, 87, 87)",
                fontSize: 15,
                lineHeight: "20px",
                fontFamily: "HelveticaNeue",
                height: "40px",
                paddingLeft: "10px"
            },
            inputContainerStyle = {
                paddingVertical: 0,
                paddingHorizontal: "5px",
                borderColor: "rgb(217, 213, 220)",
                borderRadius: "30px",
                borderStyle: "solid",
                borderWidth: "1px"
            },
            style = {
                flex: 1,
                boxSizing: "border-box",
                color: "rgb(0, 0, 0)",
                backgroundColor: "transparent",
                fontSize: "13px",
                lineHeight: "24px",
                height: "40px",
                paddingVertical: "0px",
                paddingHorizontal: "5px",
                paddingTop: "8px",
                paddingLeft: "15px"
            };

        if (this.props.labelStyle) {
            labelStyle = { ...labelStyle, ...this.props.labelStyle };
        }

        if (this.props.containerStyle) {
            containerStyle = { ...containerStyle, ...this.props.containerStyle };
        }

        if (this.props.inputContainerStyle) {
            inputContainerStyle = { ...inputContainerStyle, ...this.props.inputContainerStyle };
        }

        if (this.props.style) {
            style = { ...style, ...this.props.style };
        }

        return (
            <View>
                <label style={labelStyle}
                    htmlFor={this.props.id}>
                    {this.props.label}
                    <span style={{ verticalAlign: "middle", height: '100%', display: 'inline-block' }}></span>
                </label>
                <View style={inputContainerStyle}>
                    <input {...this.props}
                         style={style}
                        onChange={this.props.onChange ? (e) => {

                            var fr = new FileReader();

                            fr.onload = (f: any) => {

                                this.props.onChange({ target: { name: e.target.name, value: { data: f.target.result.split(',')[1], fileName: e.target.files.item(0).name } } });
                            }

                            fr.readAsDataURL(e.target.files.item(0));
                            e.persist();
                        }
                        : null}
                        type="file" />
                </View>
            </View>
        );
    }
}