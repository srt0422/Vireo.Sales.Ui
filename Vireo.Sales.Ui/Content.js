const SITE_NAME = process.env.SITE_NAME;
//export default require(`./app/config/sites/mobile-app-builder`).default;
export default require(`./app/config/sites/${SITE_NAME}`).default;