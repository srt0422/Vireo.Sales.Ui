
const path = require("path");

exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
        case 'develop':
        case 'build-css':
        case 'build-html':
        case 'build-javascript':
        default: reconfig(config);
    }

    return config;
};

function reconfig(config) {

    config.merge({
        resolve: {
            alias: {
                'react-native': 'react-native-web-extended',
                'native-base': 'native-base-web',
                //Icon.TabBarItem
                'react-native-vector-icons/Ionicons': 'native-base-web/lib/Components/Widgets/Icon',
                'react/lib/ReactNativePropRegistry': 'react-native-web-extended/dist/modules/ReactNativePropRegistry'
            },
            modulesDirectories: [path.join(__dirname, "../../../node_modules")],
            extensions: [".web.js"]
        }
    });

    return config;
}