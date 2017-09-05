import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import "../vendor/stripe.js";

import './index.css'

globals.window = {
    history: {

    }
};

const TemplateWrapper = ({ children }) =>
    <div>
        <Helmet
            title="Vireo Apptivator"
            meta={[
                { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=0" },
                { name: 'description', content: 'Easy and Affordable Mobile App Services' },
                { name: 'keywords', content: 'mobile, mobile app, ios app, ' },
            ]}>
            <style>
                {"div {-webkit - overflow - scrolling: touch;}"}
            </style>
            {/*<!-- Facebook Pixel Code -->*/}
            <script type="text/javascript">{`
                !function (f, b, e, v, n, t, s) {
                    if (f.fbq) return; n = f.fbq = function () {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                    n.queue = []; t = b.createElement(e); t.async = !0;
                    t.src = v; s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1819282851430311');
                fbq('track', 'PageView');
            `}</script>
            <noscript>{`
                <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=1819282851430311&ev=PageView&noscript=1" />
            `}</noscript>
            {/*<!-- End Facebook Pixel Code -->*/}
        </Helmet>
        {children()}
    </div>

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
