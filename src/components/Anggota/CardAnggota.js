import React, { useState } from 'react';
import './CardAnggota.css';
import Box from '@material-ui/core/box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Lilogo from "./lilogo.png";
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() =>({
    exptag:{
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bolder',
        marginTop: '50px',
        marginBottom: '0px',
    },
    
    exptitle: {
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bolder',
        marginTop: '20px',
        marginBottom: '0px',
    },
    
    expdate: {
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '-10px',
    },
    
    expdesc: {
        color: 'white',
        fontSize: '14px',
        fontWeight: 'normal',
        textAlign: 'justify',
    },

    expbox:{
        marginTop: '-30px',
        marginBottom: '10px',
    },
    
    footer:{
        color: 'white',
        alignItems: 'right',
        marginBottom: '-10px',
    },
}));

export default function CardAnggota(props) {
    const classes = styles()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
            <Box component="div" class="card-anggota">
                <Box component="div" class="card-anggota-pic">
                    <figure class="card-anggota-img">
                        <img src={props.img} alt="foto"></img>
                    </figure>
                </Box>
                <Box component="div" class="card-data">
                    <Box component="div">
                        <p class="card-nama">Halo, Saya {props.name}</p>
                        <p class="card-role">{props.role}</p>
                        <p class="cards-desc">{props.desc}</p>    
                    </Box>
                    <Button class="rm-link" onClick={handleOpen}>Selengkapnya</Button>
                    <Modal
                        class='popup-container'
                        open={open}
                        onClose={handleClose}>
                        <Box class="popup-box">
                            <div class="popup-data">
                                <div class="top-row">
                                    <div class="top-col">
                                        <h5 class="popup-nama">
                                            <p>{props.name}</p>
                                        </h5>
                                        <h4 class="popup-role">
                                            <p>{props.role}</p>
                                        </h4>
                                        <div class="line1"></div>
                                    </div>
                                    <div class="top-col">
                                        <Button class="close-btn" onClick={handleClose}>X</Button>
                                    </div>
                                </div>

                                <Grid container xs={12} spacing={3}>
                                    <Grid item xs={6} >
                                        <p className={classes.exptag}>Pengalaman Projek</p>
                                        <p className={classes.exptitle}>{props.projtitle1}</p>
                                        <p className={classes.expdate}>{props.startproj1} - {props.endproj1}</p>
                                        <p className={classes.expdesc}>{props.descproj1}</p>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <p className={classes.exptag}>Pengalaman Kerja</p>
                                        <p className={classes.exptitle}>{props.worktitle1}</p>
                                        <p className={classes.expdate}>{props.startwork1} - {props.endwork1}</p>
                                        <p className={classes.expdesc}>{props.descwork1}</p>
                                    </Grid>
                                    <Grid item xs={6} className={classes.expbox}>
                                        <p className={classes.exptitle}>{props.projtitle2}</p>
                                        <p className={classes.expdate}>{props.startproj2} - {props.endproj2}</p>
                                        <p className={classes.expdesc}>{props.descproj2}</p>
                                    </Grid>
                                    <Grid item xs={6} className={classes.expbox}>
                                        <p className={classes.exptitle}>{props.worktitle2}</p>
                                        <p className={classes.expdate}>{props.startwork2} - {props.endwork2}</p>
                                        <p className={classes.expdesc}>{props.descwork2}</p>
                                    </Grid>
                                </Grid>
                                <Box class="bot-row" className={classes.footer}>
                                    <div class="line2"></div>
                                    <div>
                                        <p class="narahubung">Narahubung</p>
                                    </div>
                                    <div class="box-logo">
                                        <a class="logo-li" target="_blank" href={props.linkli}>
                                            <img classname="img-li" src={Lilogo} />
                                        </a>
                                    </div>
                                </Box>
                            </div>
                        </Box>
                    </Modal>
                </Box>                   
            </Box>
    )
};

