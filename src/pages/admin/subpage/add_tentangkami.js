import React, { useState } from 'react';
import {Grid, TextField, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins',
        backgroundColor: "#0D0C0F"
      },
    h4: {
        color: 'white',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Poppins',
        fontWeight: 'medium',
        padding: '18px',
        margin: '-20px 0px -10px 0',
    },
    addData: {
        background: '#111113',
        color: 'white',
        borderRadius: '10px',
        // margin: '15px',
        // justifyContent: 'center',
    },
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    form: {
        justifyContent: 'center',
        color: 'white',
        margin: '30px 0px 40px 0px',
    },
    field: {
        "& .MuiOutlinedInput-root": {
            borderColor: "#645E6F"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#645E6F"
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            borderColor: "#645E6F"
        },
        "&  .MuiInputBase-inputMultiline": {
            borderColor: "#645E6F"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
            borderColor: "#644EEC"
        },
        "& p": {
            color: 'white',
        },
        color: 'white',
        // marginTop: '5',
        // marginBottom: '5',
        // display: 'block',
    },
    fieldFull: {
        // fullWidth: '1024px',
    },
    fieldPart: {
        // fullWidth: '200px',
    },
    input: {
        color: "white",
    },
    label: {
        color: "white",
    },
    btn: {
        // fullWidth: '1000px',
        backgroundColor: "#644EEC",
        '&:hover': {
            backgroundColor: '#1D1C21',
            color: '#644EEC',
        },
    },
    
}));

export default function AddTentangKami()  {
    const classes = useStyles();
    const history = useHistory();

    const [formValues, setFormValues] = useState([{
        //nama: '', 
        //nomorhp: '', 
        //email: '', 
        //pesan: ''
    }])
    const handleSubmit = (e) => {
        console.log(formValues);
    }
    return (
        <div className={classes.root}>
            <div className={classes.addData}>
                <h4 className={classes.h4}>Informasi Kami</h4>
                <hr style={{ color: '#645E6F', height: 0.5 }} />
                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                    <Grid container xs={12} spacing={2} className={classes.container} fullWidth>
                        <Grid item xs={12} >
                            <TextField
                                className={`${classes.field} ${classes.fieldFull}`}
                                name="nama"
                                placeholder="Nama Tim"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                fullWidth
                                size="small"
                                required
                                type="text"
                                // onChange={(e) => setNama(e.target.value)}
                                //value={formValues.nama}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                                // error={namaError}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={`${classes.field} ${classes.fieldFull}`}
                                name="desc"
                                placeholder="Visi/Misi/Deskripsi/Tagline Tim"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                multiline
                                rows={8}
                                fullWidth
                                size="small"
                                required
                                type="text"
                                // onChange={(e) => setNama(e.target.value)}
                                //value={formValues.nama}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                                // error={namaError}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={`${classes.field} ${classes.fieldPart}`}
                                name="workexp"
                                placeholder="ex: 3"
                                label="Total Pengalaman Kerja"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                fullWidth
                                size="small"
                                required
                                type="number"
                                // onChange={(e) => setNama(e.target.value)}
                                //value={formValues.nama}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                                // error={namaError}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={`${classes.field} ${classes.fieldPart}`}
                                name="projexp"
                                placeholder="ex: 3"
                                label="Total Proyek Berhasil"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                fullWidth
                                size="small"
                                required
                                type="number"
                                // onChange={(e) => setNama(e.target.value)}
                                //value={formValues.nama}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                                // error={namaError}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={`${classes.field} ${classes.fieldPart}`}
                                name="clientexp"
                                placeholder="ex: 3"
                                label="Total Kerjasama Client"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                fullWidth
                                size="small"
                                required
                                type="number"
                                // onChange={(e) => setNama(e.target.value)}
                                //value={formValues.nama}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                                // error={namaError}
                            />
                        </Grid>
                    </Grid>
                </form>
                <Grid container xs={12} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Button
                            onClick={() => {
                                handleSubmit();
                                history.push("/admin/about");
                            }}
                            className={classes.btn}
                            variant="contained"
                            type="submit"
                            fullWidth
                            // disabled={!formValues.nama && !formValues.nomorhp && !formValues.email && !formValues.pesan}
                        >
                        Tambah
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};