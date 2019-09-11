const backendurl = 'http://localhost:1337';
const frontendurl = 'http://localhost:3000';

const config = {
    sitekey:'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
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
        footertext1: '<a href="/">Home</a><br><a href="/">Home</a><br><a href="/">Home</a><br><a href="/">Home</a><br><a href="/">Home</a><br><a href="/">Home</a><br>',
        footertext2: '<a href="/html/hidden">hidden</a>',
        footertext3: 'not a link',
        headerimgstyle: {
            height: 100,
            padding: 10
        },
        footerimgstyle: {
            height: 70,
            padding: 20
        },
        gridtitle: {
            fontSize: 50
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
            textDecoration: 'none'
        },
    }
};
export default config;