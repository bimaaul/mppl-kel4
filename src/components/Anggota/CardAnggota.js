import React, { useState } from 'react';
import './CardAnggota.css';
import Box from '@material-ui/core/box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Lilogo from "./lilogo.png";


function CardAnggota(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box component="div" class="card-anggota">
                <Box component="div" class="card-anggota-pic">
                    <figure class="card-anggota-img">
                        <img src={props.img} alt="foto"></img>
                    </figure>
                </Box>
                <Box component="div" class="card-data">
                    <h5 class="card-nama">
                        <p>Halo, Saya {props.name}</p>
                    </h5>
                    <h4 class="card-role">
                        {props.role}
                    </h4>
                        <p class="cards-desc">
                            {props.desc}
                        </p>
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
                                <div class="exp-row">
                                    <div class="exp-col">
                                        <h6 class="proj">Pengalaman Projek</h6>
                                        <p class="exp-proj">{props.expproj}</p>
                                    </div>
                                    <div class="exp-col">
                                        <h6 class="work">Pengalaman Kerja</h6>
                                        <p class="exp-proj">{props.expwork}</p>
                                    </div>
                                </div>
                                <div class="bot-row">
                                    <div class="line2"></div>
                                    <h6 class="narahubung">Narahubung</h6>
                                    <a class="logo-li" target="_blank" href={props.linkli}>
                                        <img classname="img-li" src={Lilogo} />
                                    </a>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </Box>                   
            </Box>
        </>
    )
}

export default CardAnggota