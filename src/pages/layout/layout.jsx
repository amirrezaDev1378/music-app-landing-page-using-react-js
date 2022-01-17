import React from 'react';
import Home from "../home-page/home";
import useStyles from "./layout.style";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {createTheme, ThemeProvider} from "@mui/material";

function Layout(props) {
    const styles = useStyles();

    return (
            <div className={styles.LayoutBody}>
                <Navbar/>
                <Home/>
                <Footer/>

            </div>
    );
}

export default Layout;