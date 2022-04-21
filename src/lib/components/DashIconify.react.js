import React, { Component } from "react";
import PropTypes from "prop-types";
import { DashIconify as RealComponent } from "../LazyLoader";

/**
 * Iconify for Plotly Dash. Visit this site to browse all the available icons: https://icon-sets.iconify.design/
 */
export default class DashIconify extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props} />
            </React.Suspense>
        );
    }
}

DashIconify.defaultProps = {};

DashIconify.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Color
     */
    color: PropTypes.string,

    /**
     * Flip the icon horizontally or vertically
     */
    flip: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * Icon height
     */
    height: PropTypes.number,

    /**
     * Icon name is a string, which has 3 parts: @api-provider : icon-prefix : icon-name
     * provider points to API source. Starts with "@", can be empty (empty value is used for public Iconify API).
     * prefix is name of icon set.
     * name is name of icon.
     */
    icon: PropTypes.string.isRequired,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Toggles inline or block mode.
     */
    inline: PropTypes.bool,

    /**
     * Rotates icon, 0: 0 deg, 1: 90 deg, 2: 180 deg, 3: 270 deg
     */
    rotate: PropTypes.oneOf([0, 1, 2, 3]),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Inline style
     */
    style: PropTypes.object,

    /**
     * Icon width
     */
    width: PropTypes.number,
};

export const defaultProps = DashIconify.defaultProps;
export const propTypes = DashIconify.propTypes;
