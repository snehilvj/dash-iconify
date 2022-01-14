import React, { Component } from "react";
import { defaultProps, propTypes } from "../components/DashIconify.react";
import { Icon } from "@iconify/react";
import { omit } from "ramda";

/**
 * Iconify for Plotly Dash. Visit this site to browse all the available icons: https://icon-sets.iconify.design/
 */
export default class DashIconify extends Component {
    render() {
        return <Icon {...omit(["setProps"], this.props)} />;
    }
}

DashIconify.defaultProps = defaultProps;
DashIconify.propTypes = propTypes;
