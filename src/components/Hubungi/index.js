import React, { useState } from 'react';
import { Box, Grid, TextField, Button, makeStyles, InputAdornment } from '@material-ui/core';
import './Hubungi.css';

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

    const [formValues, setFormValues] = useState([{
        nama: '', 
        nomorhp: '', 
        email: '', 
        pesan: ''
    }])

    const [isDisabled, setIsDisabled] = useState(false);
    // const [namaValue, setNama] = useState('')
    // const [nohpValue, setNohp] = useState('')
    // const [emailValue, setEmail] = useState('')
    // const [pesanValue, setPesan] = useState('')
    // const [namaError, setNamaError] = useState(false)
    // const [nohpError, setNohpError] = useState(false)
    // const [emailError, setEmailError] = useState(false)
    // const [pesanError, setPesanError] = useState(false)

    const handleChangeNama = (i, e) => {
        const _nama = [...formValues];
        _nama[i].nama = e.target.value;
        setFormValues(_nama);
    }
    const handleChangeNomorhp = (i, e) => {
        const _nomorhp = [...formValues];
        _nomorhp[i].nomorhp = e.target.value;
        setFormValues(_nomorhp);
    }
    const handleChangeEmail = (i, e) => {
        const _email = [...formValues];
        _email[i].email = e.target.value;
        setFormValues(_email);
    }
    const handleChangePesan = (i, e) => {
        const _pesan = [...formValues];
        _pesan[i].pesan = e.target.value;
        setFormValues(_pesan);
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // setNamaError(false)
        // setNohpError(false)
        // setEmailError(false)
        // setPesanError(false)

        // if(namaValue == ''){
        //     setNamaError(true)
        // }
        // if(nohpValue == ''){
        //     setNohpError(true)
        // }
        // if(emailValue == ''){
        //     setEmailError(true)
        // }
        // if(pesanValue == ''){
        //     setPesanError(true)
        // }
        // if(namaValue && nohpValue && emailValue && pesanValue){
        //     console.log(formValues);
        // }
        
        // setIsDisabled(false);

        // if(formValues.nama == '' && formValues.nomorhp = '' && formValues.email = '' && formValues.pesan = ''){
        //     setIsDisabled(true)
        // }

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
                                        name="nama"
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
                                        onChange={e => handleChangeNama(e)}
                                        autoFocus={true}
                                        // error={namaError}
                                    />
                                </Grid>
                                <Grid item class="form-field">
                                    <TextField
                                        className={classes.field}
                                        name="nomorhp"
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
                                        onChange={e => handleChangeNomorhp(e)}
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
                                        onChange={e => handleChangeEmail(e)}
                                        autoFocus={true}
                                        // error={emailError}
                                    />
                                </Grid>
                                <Grid item class="form-field">
                                    <TextField
                                        className={classes.field}
                                        name="pesan"
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
                                        onChange={e => handleChangePesan(e)}
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
                                onClick={handleSubmit}
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
        </Box>
    );
};

