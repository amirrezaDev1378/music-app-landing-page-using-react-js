import {makeStyles} from "@mui/styles";
import {FirstScrBG, ThirdScrBG} from "../../assets/asset-manager";

const useStyles = makeStyles({
    Section1: {
        backgroundImage: `url(${FirstScrBG})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        top: "0",
        left: 0,
        zIndex: 1,
        "&> h1": {
            color: "white !important",
            paddingTop: 200,
            paddingBottom: 50,
            fontSize: "50pt",
            textAlign: "center",
            margin: 0,
            '@media (max-width:900px)':{
                fontSize: "35pt"
            },
            '@media (max-width:620px)':{
                fontSize: "25pt"
            },
            '@media (max-width:450px)':{
                fontSize: "20pt"
            }
        },
        "&> h3":{
            '@media (max-width:450px)':{
                fontSize: "13pt"
            }
        }
    },
    premiumButton: {
        background: " linear-gradient(45deg ,#770fc7 0%, #2dceef 100% )",
        // '@media (max-width:1500px)':{
        //     display:"none !important"
        // }


    },
    Sec1ButtonGroup: {
        display: "flex",
        justifyContent: 'center',
        "&> button": {
            borderRadius: 25,
            padding: 12
        }
    },
    Section2: {
        backgroundColor: "#161A1A",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
        "@media (max-width:1280px)": {
            height: "70vh"
        },
        "@media (max-width:900px)": {
            height: "100%"
        }
    },
    Section2MainText: {
        whiteSpace: "initial",
        textAlign: "left",
        "@media (max-width:1280px)": {
            width: "100%"
        }
    },
    Section2MainTextParent: {

        "@media (max-width:1070px)": {
            width: "80%"
        }
    },
    Section2MainImage: {
        '@media (max-width:1280px)': {
            width: "100%",

        },
        '@media (max-width:900px)': {
            width: "70%",

        },
        '@media (max-width:500px)': {
            width: "80%",

        },
        "&> img": {
            '@media (max-width:1280px)': {
                width: "100%"
            }
        }
    },
    Section3: {
        backgroundImage: `url(${ThirdScrBG})`,
        width: "100%",
        height: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        top: "0",
        left: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center"
    },
    Section4: {
        backgroundColor: "#161A1A",
        width: "100%",
        position: "relative",
        top: "0",
        left: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    WhyGoPremiumSection: {},

    GradientBox: {

        display: "flex",
        alignItems: "center",

        width: '33%',
        margin: 'auto',
        maxWidth: '33%',

        position: 'relative',
        boxSizing: 'border-box',

        borderWidth: '2px',
        // color: '#FFF',
        background: '#161A1A',
        backgroundClip: 'padding-box',
        border: 'solid border transparent',
        borderRadius: '1em',

        '&:before': {
            content: "\"\"",
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: '-1',
            margin: '-2px',
            borderRadius: 'inherit',
            background: 'linear-gradient(#9b2def 0%, #2d9bef 57.95%, #35edfb 100%)',
        },
        "&> p , h3": {
            width: "fit-content"
        },
        padding: 20

    },
    BorderBox: {
        border: "white 2px solid",
        borderRadius: "20px",
        padding: 20,
        width: "30%",
        "&> p , h3": {
            width: "fit-content"
        },
    },
    ButtonAnimation: {
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms , transform 0.7s !important",
        "&:hover": {
            transform: "scale(1.15)"
        }

    }
});
export default useStyles;