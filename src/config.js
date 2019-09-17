const backendurl = 'https://olive-brokerage-cms.herokuapp.com';     //IMPORTANT
const frontendurl = 'https://olive-brokerage.herokuapp.com';        //IMPORTANT
const sitekey = '6Le7CrgUAAAAALYfcXV3i8kp3w1si5HRhgoRhqgU';        //IMPORTANT

const config = {
    sitekey:sitekey,
    serverurl: backendurl,
    htmlurl: backendurl + '/htmlpages',
    gridurl: backendurl + '/grids',
    authurl: backendurl + '/auth/local',
    signupurl: backendurl + '/auth/local/register',
    resetpasswordurl: backendurl + '/auth/forgot-password',
    changeredirecturl: frontendurl + '/changepassword',
    resetpasswordurlsubmit: backendurl + '/auth/reset-password',
    styles: {
        footerimgleft: "https://digifof.eu/sites/default/files/logo_digifof.png",
        footerimgright: "https://digifof.eu/sites/default/files/images/erasmus.jpg",
        headerimg: "https://digifof.eu/sites/default/files/logo_digifof.png",
        footertext1: '<a href="https://digifof.eu/contact">Contact</a>',
        footertext2: '<a href="https://digifof.eu/legal-mentions">Legal mentions</a>',
        footertext3: '',
        headerimgstyle: {
            height: 100,
            padding: 0
        },
        footerimgstyle: {
            height: 70,
            padding: 20
        },
        gridtitle: {
            fontSize: 50,
            textTransform: 'uppercase'
        },
        header: {
            background: '#FFE500'
        },
        headerlinkstyle: {
            fontSize: 17,
            color: '#000000',
            fontFamily: "\"Roboto Condensed\" , sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase'
        },
        footer: {
            background: '#FFE500'
        },
        footertextstyle: {
            fontFamily: "\"Roboto Condensed\" , sans-serif",
            fontSize: 14,
            color: 'black',
        },
    }
};
export default config;