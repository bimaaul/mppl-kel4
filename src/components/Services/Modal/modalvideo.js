import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ServicesP } from '../ServicesElements';
import { ServiceP } from '../ServicesElements';
import { ServicesIcon1 } from '../ServicesElements';
import Icon3 from './icon3.svg';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 662,
        backgroundColor: '#1D1C21',
        border: '2px solid #644EEC',
        boxShadow: '0px 0px 8.55274px #1B0CA1',
        borderRadius: '10px',
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ModalVid() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ServicesP text-transform="lowercase" variant="text" color="primary" onClick={handleOpen}>
                Selengkapnya
            </ ServicesP>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                
            >
                <Fade in={open}>
                <div className={classes.paper}>
                        <ServicesIcon1 src={Icon3}/>
                        <h2>Pengeditan Video</h2>
                        <ServiceP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ac aliquam quis in elementum auctor maecenas tortor. Proin tempus, sagittis aliquet dignissim sit dictum metus, enim, gravida. Aliquam etiam odio velit aenean amet. Nam commodo cursus et nulla. 
                        </ServiceP>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}