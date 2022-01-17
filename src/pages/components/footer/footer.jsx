import React from 'react';
import useStyles from "./footer.style";
import {Stack} from "@mui/material";
import {FooterIcon} from "../../../assets/asset-manager";

function FooterLinks(props) {
    const links = props.links;
    const styles = useStyles();

    return (
        <div>
            <Stack textAlign={"left"} direction={"column"} spacing={3}>
                <h3 style={{color: "#848484"}}>{props.title}</h3>
                <br/>
                {
                    links.map((link, index) => (
                        <a className={styles.FooterLinkStyle} key={index} href={link.link}>{link.name}</a>
                    ))
                }
            </Stack>
        </div>
    )
}

function Footer(props) {
    const styles = useStyles();
    return (
        <div className={styles.Footer}>
            <a href="#"><img className={styles.FooterIcon} src={FooterIcon} alt="logo"/></a>
            <br/>
            <br/>
            <br/>
            <Stack alignItems={"center"} justifyContent={"center"} direction={{md: "row" , xs:"column"}} spacing={{md:30,xs:10}}>
                <FooterLinks
                    title={"MUSICBOX"}
                    links={[
                        {link: "#", name: "About"},
                        {link: "#", name: "Premium"},
                        {link: "#", name: "Features"},
                    ]}
                />
                <FooterLinks
                    title={"COMMUNITIES"}
                    links={[
                        {link: "#", name: "For Artists"},
                        {link: "#", name: "Developers"},
                        {link: "#", name: "Press"},
                    ]}
                />
                <FooterLinks
                    title={"USEFUL LINKS"}
                    links={[
                        {link: "#", name: "Help"},
                        {link: "#", name: "Explore Channels"},
                        {link: "#", name: "Download App"},
                    ]}
                />
            </Stack>
        </div>

    );
}

export default Footer;