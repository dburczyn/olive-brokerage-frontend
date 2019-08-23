import React from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Reply from '@material-ui/icons/Reply';


const Back = ({ history }) => (


    <Button variant="contained" size="small"  onClick={history.goBack}>
        <Reply />
        Back
    </Button>


);

export default withRouter(Back);