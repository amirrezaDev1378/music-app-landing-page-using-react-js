import React from 'react';

import useStyles from "./navbar.style";
import {logo} from "../../../assets/asset-manager";

function Navbar(props) {
    const styles = useStyles();
    return (
        <div className={styles.Navbar}>
            <div className={""} style={{width:"fit-content"}}>
                <img className={styles.NavbarLogo} src={logo} alt={"logo"}/>
            </div>
        </div>
    );
}

export default Navbar;