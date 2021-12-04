import React, { useState } from 'react';
import axios from "axios";
import { Box, Grid, TextField, Button, makeStyles, InputAdornment } from '@material-ui/core';
import './Hubungi.css';
import Notification from './notif';

const styles = makeStyles(() =>({
    field: {
        "& .MuiOutlinedInput-root": {
            borderColor: "white"
        }, 
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            borderColor: "white"
        },
        "&  .MuiInputBase-inputMultiline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
            borderColor: "#644EEC"
        },
        "& p":{
            color:'white',
        },
        marginTop: 5,
        marginBottom: 5,
        display: "block",
    },

    input: {
        color: "white",
    },

    label: {
        color: "white",
    },

    kodehp: {
        "& p":{
            color:'white',
        },
    },

    btn: {
        backgroundColor: "#644EEC",
        '&:hover': {
            backgroundColor: '#1D1C21',
            color: '#644EEC',
        },
    }

}));

export default function FormHubungi()  {
    const classes = styles()
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

    const [formValues, setFormValues] = useState([{
        nama: '', 
        nomorhp: '', 
        email: '', 
        pesan: ''
    }])

    const [isDisabled, setIsDisabled] = useState(false);

    const handleFormChange = (e) => {

        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormValue = {...formValues};
        newFormValue[fieldName] = fieldValue;

        setFormValues(newFormValue);
        console.log(newFormValue);
    }

    const handleSubmit = () => {
        axios
          .post("https://be-mppl.herokuapp.com/api/requests", {
              name: formValues.name,
              phone: formValues.phone,
              email: formValues.email,
              message: formValues.message,
            })
          .then((res) => {
            console.log(res);
            // alert(res.data.message);
            setNotify({
                isOpen: true,
                message: 'Email Berhasil Terkirim',
                type: 'success'
            })
          })
          .catch((error) => {
            // alert(error.response.data.message);
            setNotify({
                isOpen: true,
                message: 'Email Gagal Terkirim',
                type: 'error'
            })
          });
        console.log(formValues);       
    };
    return (
        <Box class="container-hubungi" sx={{ flexDirection: 'column', maxWidth: 1316}}>
            <h2>Hubungi Kami</h2>
            <h3>
                <p>Silahkan isi form di bawah ini dan kami akan membalas pesanmu melalui email. Silahkan cek email secara berkala selama maksimal 3 hari setelah form dikirimkan.
                    <br></br>Jangan lupa cek spam untuk berjaga-jaga.</p>
            </h3>
            <Box component="div" class="hubungi-wrapper">
                <Box component="div" class="form-wrapper">
                    <Box component="div" class="form-wrapper">
                    {/* {formValues.map((val, i) => { */}
                        {/* return( */}
                        <form onSubmit={handleSubmit} noValidate autoComplete="off">
                            <Grid container alignItems="center" justify="center" direction="column">
                                <Grid item class="form-field">
                                    <TextField
                                        className={classes.field}
                                        name="name"
                                        // label="Nama"
                                        placeholder="Nama"
                                        variant="outlined"
                                        display="flex"
                                        InputLabelProps={{className: classes.label, required: false}}
                                        InputProps={{className: classes.input}}
                                        fullWidth
                                        required
                                        type="text"
                                        value={formValues.nama}
                                        onChange={handleFormChange}
                                        autoFocus={true}
                                        // error={namaError}
                                    />
                                </Grid>
                                <Grid item class="form-field">
                                    <TextField
                                        className={classes.field}
                                        name="phone"
                                        // label="Nomor Handphone"
                                        placeholder="Nomor Handphone"
                                        variant="outlined"
                                        display="flex"
                                        InputLabelProps={{className: classes.label, required: false}}
                                        InputProps={{
                                            className: classes.input,
                                            startAdornment: <InputAdornment className={classes.kodehp} position="start"><p>+62</p></InputAdornment>,
                                        }}
                                        helperText="contoh: 81234567890"
                                        fullWidth
                                        required
                                        type="tel"
                                        value={formValues.nomorhp}
                                        onChange={handleFormChange}
                                        autoFocus={true}
                                        // error={nohpError}
                                    />
                                </Grid>
                                <Grid item class="form-field">
                                    <TextField
                                        className={classes.field}
                                        name="email"
                                        // label="Email"
                                        placeholder="Email"
                                        variant="outlined"
                                        display="flex"
                                        InputLabelProps={{className: classes.label, required: false}}
                                        InputProps={{className: classes.input}}
                                        helperText="contoh: example@gmail.com"
                                        fullWidth
                                        required
                                        type="email"
                                        value={formValues.email}
                                        onChange={handleFormChange}
                                        autoFocus={true}
                                        // error={emailError}
                                    />
                                </Grid>
                                <Grid item class="form-field">
                                    <TextField
                                        className={classes.field}
                                        name="message"
                                        // label="Pesan"
                                        placeholder="Kirim pesan atau maksud Anda menghubungi kami."
                                        variant="outlined"
                                        display="flex"
                                        InputLabelProps={{className: classes.label, required: false}}
                                        InputProps={{className: classes.input}}
                                        multiline
                                        rows={10}
                                        fullWidth
                                        required
                                        type="text"
                                        value={formValues.pesan}
                                        onChange={handleFormChange}
                                        autoFocus={true}
                                        // error={pesanError}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                        {/* )     */}
                    {/* })} */}
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid item class="form-field">
                            <Button 
                                onClick={() => {
                                    handleSubmit();
                                }}
                                className={classes.btn}
                                variant="contained" 
                                type="submit" 
                                fullWidth
                                // disabled={!formValues.nama && !formValues.nomorhp && !formValues.email && !formValues.pesan}
                                >
                                    Kirim Pesan
                                </Button>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </Box>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </Box>
    );
};

