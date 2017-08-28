import Color from 'color';

const { Platform, Dimensions } = require('react-native');

let isMobile = Dimensions.get("window").width <= 720;

let theme = {
    brandPrimary: '#ff5917',
    brandInfo: '#ddd',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',

    fontFamily: 'HelveticaNeue',
    btnFontFamily: 'HelveticaNeue',
    iconFamily: 'Ionicons',

    inverseTextColor: '#fff',
    textColor: '#000',

    subtitleColor: '#8e8e93',

    fontSizeBase: 15,
    titleFontSize: 32,
    subTitleFontSize: 12,

    inputFontSize: 15,
    inputLineHeight: 24,

    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },
    get btnTextSize() {
        return this.fontSizeBase * 1.1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * .8;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * .6;
    },

    buttonPadding: 6,

    borderRadiusBase: 5,

    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },

    footerHeight: 55,
    toolbarHeight: (Platform.OS === 'ios') ? 64 : 56,
    //Header component
    toolbarDefaultBg: "#1abc9c",//'#ff5917',
    toolbarInverseBg: '#222',

    iosToolbarBtnColor: '#fff',

    toolbarTextColor: '#fff',

    //Custom
    subHeadingDefaultBg: "#16a085",

    checkboxBgColor: '#039BE5',
    checkboxTickColor: '#fff',

    checkboxSize: 23,

    radioColor: '#7e7e7e',
    get radioSelectedColor() {
        return Color(this.radioColor).darken(0.2).hexString();
    },

    radioBtnSize: 25,

    tabBgColor: '#F8F8F8',
    tabFontSize: 15,
    tabTextColor: '#fff',

    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',

    cardDefaultBg: '#fff',

    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString();
    },
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },
    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },
    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },
    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },
    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },

    borderWidth: 1,
    iconMargin: 7,

    get inputColor() {
        return this.textColor;
    },
    get inputColorPlaceholder() {
        return '#575757';
    },
    inputBorderColor: '#D9D5DC',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',
    inputHeightBase: 40,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon() {
        return this.inputPaddingLeft * 8;
    },

    btnLineHeight: 19,

    dropdownBg: '#000',
    dropdownLinkColor: '#414142',

    jumbotronPadding: 30,
    jumbotronBg: '#C9C9CE',

    contentPadding: 10,

    listBorderColor: '#ddd',
    listDividerBg: '#ddd',
    listItemPadding: 9,
    listNoteColor: '#808080',
    listNoteSize: 13,

    iconFontSize: 30,

    badgeColor: '#fff',
    badgeBg: '#ED1727',

    lineHeight: 20,
    iconLineHeight: 37,

    toolbarIconSize: 20,

    toolbarInputColor: '#CECDD2',

    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',

    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',

    grey: '#666',

    // Custom

};

theme = Object.assign(theme, {

    // header

    //// logo
    logoImage: {
        width: "50px",
        height: "50px",
        marginTop: "-12px"
    },

    outerWrapper: { flexShrink: 1, alignItems: "stretch" },

    // content
    innerWrapper: { backgroundColor: '#FFFFFF', alignSelf: "center" },

    topContentWrapper: {
        alignItems: "center", paddingTop: "45px", paddingBottom: "25px", paddingHorizontal: 15,
        marginLeft: isMobile ? 0 : -25
    },

    //// text content
    divider: {
        height: "1px",
        width: "70px",
        marginTop: "17px",
        marginBottom: "17px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#dbdbdb"
    },

    //// offers

    offerTitle: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: "22px",
        textAlign: "center",
        lineHeight: "1.5"
    },

    offerPrice: {
        backgroundColor: theme.toolbarDefaultBg,
        alignItems: "center",
        padding: "15px"
    },

    offerDescription: {
        margin: 0,
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: "1px",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#ecebeb",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginTop: 0,
        marginBottom: "-1px",
        marginLeft: 0
    },
    offerDescriptionText: {
        color: "#666",
        fontSize: 18
    },
    callToActionContainer: {
        borderBottomWidth: 0,
        fontSize: 24
    },

    //// contact

    contactTextInputContainer: {
    },

    contactTextInput: {
        fontSize: "13px"
    },

    // Checkout
    checkoutHeader: {
        backgroundColor: theme.subHeadingDefaultBg
    },
    checkoutHeaderText: {

        color: "#fff"
    }
});

export default theme;