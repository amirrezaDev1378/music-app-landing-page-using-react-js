import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    Navbar: {
        backgroundColor: "transparent",
        position:"relative",
        top:0,
        left:0,
        right:0,
        width:'100vw',
        paddingTop:"35px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:5
    },
    NavbarLogo:{
        transition:"0.5s",
        cursor:"pointer",
        "&:hover":{
            transform:"scale(1.15)"
        }
    }
});
export default useStyles;