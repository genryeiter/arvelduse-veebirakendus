import React from 'react'
import {useHistory} from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../icons/pngIcons/logo500x.png'

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
