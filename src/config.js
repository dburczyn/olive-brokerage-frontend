const backendurl = process.env.REACT_APP_BACKEND_URL || 'https://digifof.boc-group.eu/';
const frontendurl = process.env.REACT_APP_FRONTEND_URL || 'http://localhost:5000';
const sitekey = process.env.REACT_APP_SITE_KEY || '6LfeP7gUAAAAADqHzA8qdmK0Uu1vT9YRsF_Em8Ro';
const config = {
    sitekey: sitekey,
    serverurl: backendurl,
    htmlurl: backendurl + '/htmlpages',
    gridurl: backendurl + '/grids',
    authurl: backendurl + '/auth/local',
    signupurl: backendurl + '/auth/local/register',
    resetpasswordurl: backendurl + '/auth/forgot-password',
    changeredirecturl: frontendurl + '/changepassword',
    resetpasswordurlsubmit: backendurl + '/auth/reset-password',
    styles: {
        footerimgleft: "https://digifof.boc-group.eu/uploads/1904ff043b614a0989c893d0bc48187e.jpg",
        footerimgright: "",
        headerimg: "https://digifof.boc-group.eu/uploads/0cc6d8ac4f454eb585fc4f88dc0c11d1.png",
        headertext: 'Open Models Laboratory',
        footertext1: '<b>Open Models Laboratory</b> \n Währinger Straße 29 \n  1090 Vienna',
        footertext2: '<b>Coordinator</b> \n The OMiLAB Community',
        footertext3: '<a style="color: #000;" href="https://digifof.eu/legal-mentions"><strong>Legal Information</strong></a>',
        headerimgstyle: {
            maxHeight: 40,
            maWidth: 155,
            padding: 25,
            float: 'left'
        },
        footerimgstyle: {
            height: 70,
            paddingTop: '30px',
            paddingBottom: '2px',
            paddingLeft: '150px'
        },
        gridtitle: {
            fontSize: 30,
        },
        header: {
            background: '#4B8DC5',
            height: 140,
        },
        headerlinkstyle: {
            fontSize: 14,
            color: '#FFFFFF',
            fontFamily: "\"Helvetica Neue\" , sans-serif",
        },
        headerpopupstyle: {
            fontSize: 14,
            color: '#000000',
            fontFamily: "\"Helvetica Neue\" , sans-serif",
        },
        footer: {
            background: '#EFF9FF'
        },
        footertextstyle: {
            fontFamily: "\"Helvetica Neue\" , sans-serif",
            fontSize: 14,
            color: 'black',
        },
        headertextstyle: {
            fontFamily: "\"Helvetica Neue\" , sans-serif",
            fontSize: 28,
            color: 'black',
        },
        toolbardown: {
            minHeight: "50px",
            paddingRight: "200px",
            paddingLeft: "200px",
        },
        toolbarup: {
            minHeight: "50px",
            paddingRight: "200px",
            paddingLeft: "200px",
            background: '#FFFFFF'
        },
    }
};
export default config;