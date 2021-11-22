import React, { Component, useState } from 'react';
import { Box, Grid, TextField, Button, ListItemSecondaryAction } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import './Hubungi.css';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>  ({
    root: {
    },

    field: {
        color: 'white',  
    },

    TextField: {
    
    },

    cssLabel: {
        color : 'green'
    },
    
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `${theme.palette.primary.main} !important`,
        }
    },
    
    cssFocused: {},
    
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'green !important'
    },
}));

const defaultValues = {
    nama: "",
    nomorhp: "",
    email: "",
    pesan: "",
};

export default function FormHubungi()  {
    const classes = styles();

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { nama, nomorhp, email, pesan, value } = e.target;
        setFormValues({
          ...formValues,
          [nama]: value,
          [nomorhp]: value,
          [email]: value,
          [pesan]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    return (
        <Box class="container-hubungi" sx={{ flexDirection: 'column', maxWidth: 1316}}>
            <h2>Hubungi Kami</h2>
            <h3>Silahkan isi form di bawah ini dan kami akan membalas pesanmu melalui email. Silahkan cek email secara berkala selama maksimal 3 hari setelah form dikirimkan. Jangan lupa cek spam untuk berjaga-jaga.</h3>
            <div class="hubungi-wrapper">
                <div class="form-wrapper">
                    <Box>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <Grid container alignItems="center" justify="center" direction="column">
                            <Grid item class="form-field">
                                <TextField
                                    className={classes.field}
                                    id="input-nama"
                                    name="nama"
                                    label="Nama"
                                    placeholder="Nama"
                                    variant="outlined"
                                    // color="primary"
                                    // type="text"
                                    // value={formValues.nama}
                                    // onChange={handleInputChange}
                                    fullWidth
                                    required
                                    InputLabelProps={{
                                        classes: {
                                          root: classes.cssLabel,
                                          focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                          root: classes.cssOutlinedInput,
                                          focused: classes.cssFocused,
                                          notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item class="form-field">
                                <TextField
                                    id="input-nomorhp"
                                    name="nomorhp"
                                    label="Nomor Handphone"
                                    placeholder="Nomor Handphone"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">+62</InputAdornment>,
                                    }}
                                    // type="text"
                                    // value={formValues.nomorhp}
                                    // onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item class="form-field">
                                <TextField
                                    id="input-email"
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    variant="outlined"
                                    // type="text"
                                    // value={formValues.email}
                                    // onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item class="form-field">
                                <TextField
                                    id="input-pesan"
                                    name="pesan"
                                    label="Pesan"
                                    placeholder="Kirim pesan atau maksud Anda menghubungi kami."
                                    variant="outlined"
                                    // type="text"
                                    // value={formValues.pesan}
                                    // onChange={handleInputChange}
                                />
                            </Grid>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </form>
                    </Box>
                    </div>
                </div>
            </Box>
        );
};

