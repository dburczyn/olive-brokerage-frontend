const backendurls = ['http://localhost:1337', 'http://localhost:1337'];
const frontendurl = 'http://localhost:3000';
const jobseps = ['/jobs', '/secretjobs'];
const config = {
    serverurl: backendurls[0],
    authurl: backendurls[0] + '/auth/local',
    signupurl: backendurls[0] + '/auth/local/register',
    resetpasswordurl: backendurls[0] + '/auth/forgot-password',
    changeredirecturl: frontendurl + '/changepassword',
    resetpasswordurlsubmit: backendurls[0] + 'auth/reset-password',
    multirepos: backendurls,
    jobseps: jobseps
};
export default config;