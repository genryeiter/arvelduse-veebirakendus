import React, {useState, useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import decode from 'jwt-decode'
import styles from './Header.module.css'
import logo from '../../icons/pngIcons/logo500x.png'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


const Header = () => {
    const history = useHistory()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={styles.header2}>
            <img style={{width: '50px', cursor: 'pointer'}} onClick={() => history.push('/')}
                 src={logo} alt="arc-invoice"/>
            <button onClick={() => history.push('/login')} className={styles.login}>Login</button>
        </div>
    )

}

export default Header
