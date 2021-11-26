import { Box, Container, Grid, Link, makeStyles} from '@material-ui/core';

const styles = makeStyles(() =>({
    box:{
        width: "100%",
        backgroundColor: "#1D1C21",
    },
    gridContainer:{
        padding: "10px 0px",
    },
    title: {
        textAlign: "center",
        fontWeight: "bolder",
        fontSize: "20px",
        color: "white",
    },
    desc: {
        textAlign: "center",
        fontWeight: "normal",
        fontSize: "16px",
        color: "white",
        cursor: "pointer",
    },
    link: {
        color: "white",
        textDecorationLine: "none",
        '&:hover': {
            color: '#644EEC',
            textDecorationLine: "none",
        }
    },
}));

export default function Footer(){
    const classes = styles()

    return(
        <Box component="div" className={classes.box}>
                <Grid container xs={12} spacing={4} className={classes.gridContainer}>
                    <Grid item xs={12} className={classes.title}>
                        <Box >Mamen Project</Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.desc} >
                        <Box>
                            Instagram :   
                            <Link href="https://www.instagram.com/" className={classes.link}> @mamenrider</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} className={classes.desc}>
                        <Box>
                            Twitter :   
                            <Link href="https://twitter.com/" className={classes.link}> @mamenrider</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className={classes.desc}>
                        <Box>
                            Email :   
                            <Link href="mailto:MamenRider@gmail.com" className={classes.link}> MamenRider@gmail.com</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
        </Box>
    );
}