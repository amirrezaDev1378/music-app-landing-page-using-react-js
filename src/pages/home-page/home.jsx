import React, {useEffect} from 'react';
import MusicShow from "../components/home/musicShow";
import useStyles from "./home.style";
import Button from "@mui/material/Button";
import {Grid, Stack, useMediaQuery} from "@mui/material";
import {FourthScrIcons, FourthScrImage, Section2Icon, Section2Mobile} from "../../assets/asset-manager";
import AOS from "aos";
import "aos/dist/aos.css";
import {Check} from "@mui/icons-material";
import {useTheme} from '@mui/material/styles';

function PremiumOptions(props) {
    return (
        <Grid direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <div style={{
                backgroundColor: "#363535",
                width: 200,
                height: 200,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={props.icon} style={{width: 150, display: "flex", justifyContent: "center"}} alt=""/>
            </div>
            <br/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </Grid>
    );

}


function Home(props) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 400,
            once: false,
            mirror: true,
        });
        // AOS.refresh();
    }, []);
    const styles = useStyles();
    const icons = FourthScrIcons;
    const theme = useTheme();
    const isSmaller450 = useMediaQuery('@media (max-width:450px)')
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        console.log("  is large  " + isLarge, "   Is medium  " + isMedium)
    }, [isLarge, isMedium]);

    const ButtonDirection = isSmaller450 ? 'column' : 'row';
    return (
        <div style={{marginTop: "-130px"}}>
            <section className={styles.Section1}>
                <h1 data-aos="zoom-in-up">
                    Open the world of music.
                    <br/>
                    It’s all here.
                </h1>

                <Stack alignItems={"center"} className={styles.Sec1ButtonGroup} spacing={2} direction={ButtonDirection}>
                    <Button className={styles.premiumButton} style={{width:isSmaller450 ? `70%` : `initial`}} variant="contained">MUSICBOX PREMIUM</Button>
                    <Button style={{color: "white", borderColor: "white" , width:isSmaller450 ? `70%` : `initial`}} variant="outlined">MUSICBOX FREE</Button>
                </Stack>
                <h3 style={{color: "white", marginTop: 20}}>

                    1-month free trial <b style={{color: "#2DCEEF"}}>$7.99</b>/month after
                </h3>
            </section>

            <section className={styles.Section2}>
                <Stack justifyContent={"center"} alignItems={"center"} direction={{md: "row", xs: "column"}}>
                    <div className={styles.Section2MainImage} data-aos="fade-right">

                        <img style={{marginRight: "10%"}} src={Section2Mobile} alt={"sample image"}/>
                    </div>

                    <Stack className={styles.Section2MainTextParent} data-aos-delay="550" data-aos="fade-left" direction={"column"} spacing={5}>
                        <Stack style={{width: "min-content"}} direction={"row"} spacing={3}>
                            <img src={Section2Icon} alt="icon"/>
                            <h1><b>FLOW</b></h1>
                        </Stack>
                        <h3 className={styles.Section2MainText}>
                            Listen to a personalized mix of tracks based on your

                            {isLarge ? <br/> : ``}

                            listening history, or create your own mix of genres, artists

                            {isLarge ? <br/> : ``}

                            and playlists - letting you enjoy more of the music you love.
                        </h3>
                    </Stack>
                </Stack>
                {isMedium ? <br/> : ``}{isMedium ? <br/> : ``}{isMedium ? <br/> : ``}
            </section>
            <section className={styles.Section3}>
                <Grid data-aos-delay="100" data-aos="fade-right" style={{marginLeft: "150px"}} xs={12} md={3}>
                    <h2 style={{color: "black"}}>
                        Listen anytime, anywhere
                    </h2>
                    <br/>
                    <h3>
                        All your favorite songs and episodes are always
                        available - even without WiFi or LTE.
                    </h3>
                </Grid>
            </section>
            <section className={styles.Section4}>
                <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={30}>
                    <Grid data-aos="fade-right" md={4}>
                        <h1>
                            <b>
                                Find the music you want
                            </b>
                        </h1>
                        <br/>
                        <br/>
                        <h3>
                            Search for your favorite songs using the description,
                            or turn on the <span style={{color: "#2DCEEF"}}>MusicFinder</span> feature to find the song
                            that is playing near you.
                        </h3>
                    </Grid>
                    <img src={FourthScrImage} alt="image"/>
                </Stack>
                <br/>
                <br/>

                <div className={styles.WhyGoPremiumSection}>
                    <h1>
                        Why go Premium?
                    </h1>
                    <br/>
                    <br/>
                    <br/>

                    <Stack direction={"row"} spacing={3} justifyContent={"center"}>
                        <PremiumOptions name={"Offline mode."} icon={icons.icon1} description={"Save and listen anywhere."}/>
                        <PremiumOptions name={"High quality audio."} icon={icons.icon2} description={"Enjoy the full range of sound."}/>
                        <PremiumOptions name={"No ads."} icon={icons.icon3} description={"Enjoy nonstop music."}/>
                        <PremiumOptions name={"Unlimited skips."} icon={icons.icon4} description={"Just tap skip."}/>
                    </Stack>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <p style={{textAlign: "center"}}>Listen free or subscribe to MusicBox Premium.</p>

                        <br/>
                        <br/>
                        <Stack justifyContent={"center"} direction={"row"} spacing={5}>

                            <div className={styles.BorderBox}>
                                <Grid justifyContent={"flex-start"}>
                                    <h3>MusicBox Free</h3>
                                    <p style={{textAlign: "left"}}><b>$0.00</b>/month</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Stack direction={"column"} spacing={3}>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check/>
                                            <p>Online listening</p>
                                        </Grid>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check/>
                                            <p>Regular audio</p>
                                        </Grid>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check/>
                                            <p>With advertising</p>
                                        </Grid>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check/>
                                            <p>30 skips per day</p>
                                        </Grid>
                                    </Stack>
                                </Grid>
                            </div>
                            <div className={styles.GradientBox}>
                                <Grid justifyContent={"flex-start"}>
                                    <h3>MusicBox Premium</h3>
                                    <p style={{textAlign: "left"}}><b style={{color: "#2DCEEF"}}>$7.99</b>/month</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Stack direction={"column"} spacing={3}>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check style={{color: "#2DCEEF"}}/>
                                            <p>Offline mode</p>
                                        </Grid>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check style={{color: "#2DCEEF"}}/>
                                            <p>High quality audio</p>
                                        </Grid>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check style={{color: "#2DCEEF"}}/>
                                            <p>No ads</p>
                                        </Grid>
                                        <Grid display={"flex"} justifyContent={'row'}>
                                            <Check style={{color: "#2DCEEF"}}/>
                                            <p>Unlimited skips</p>
                                        </Grid>
                                    </Stack>
                                </Grid>

                            </div>

                        </Stack>
                        <br/>
                        <br/>
                        <br/>
                        <Stack alignItems={"center"} justifyContent={"space-evenly"} direction={"row"} spacing={5}>
                            <Button className={styles.ButtonAnimation} style={{color: "white", borderColor: "white", borderRadius: 30, padding: 10}}
                                    variant="outlined">GET MUSICBOX FREE</Button>
                            <Button style={{margin: "0 !important", borderRadius: 30, padding: 10}}
                                    className={styles.premiumButton + " " + styles.ButtonAnimation} variant="contained">GET MUSICBOX PREMIUM</Button>
                        </Stack>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                </div>

            </section>
            {/*<MusicShow musicName={'mame'}/>*/}
        </div>
    );
}

export default Home;