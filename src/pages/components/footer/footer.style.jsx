import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    Footer: {
        backgroundColor: "#111313",
        width: '100%',
        paddingTop:50,
        paddingBottom:50,
    },
    FooterLinkStyle:{
        color:"white",
        textDecoration:"none",
        transition:"0.5s"
        ,"&:hover":{
            color:"#5feec8"

        }
    },
    FooterIcon:{
        transition:"0.7s",
        cursor:"pointer",
        "&:hover":{
            transform:"scale(1.2)"
        }
    }
});
export default useStyles;