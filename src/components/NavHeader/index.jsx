import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(3),
    }
}));

function NavHeader() {

    const classes = useStyles();

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <img width="30" height="30" className={classes.icon} src="https://i.ibb.co/kQMtP0L/Shirt.png"  />
                    <Typography variant="h6" color="inherit" noWrap>
                        Moda
          </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavHeader;