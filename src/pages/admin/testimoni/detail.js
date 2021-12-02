import React, { useState,  useContext, useEffect} from 'react';
import axios from 'axios';
import { UserContext } from "../../../context/UserContext";
import { useHistory } from 'react-router';
import { Grid, TextField, Button, makeStyles, InputAdornment, circularProgress } from '@material-ui/core';
import { useParams } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins',
    },

    h3: {
        alignItems: 'center',
        fontSize: '20px',
        fontweight: '700',
        padding: '18px',
        margin: '-20px 0px -10px 0',
    },

    add__testi: {
        background: '#111113',
        color: '#fff',
        borderRadius: '10px!important',
        margin: '15px',
        justifyContent: 'center',
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
        marginTop: 5,
        marginBottom: 5,
        display: "block",
        width: '1024px',
    },

    form: {
        marginTop: '30.7px',
        marginLeft: '-325px',
        justifyContent: 'center',
    },

    input: {
        color: "#DCD4E7",
        fontFamily: "Poppins"

    },

    label: {
        color: "#DCD4E7",
    },

    add__button: {
        padding: '57px'
    },

    btn: {
        backgroundColor: "#644EEC",
        color: 'white',
        fontFamily: "Poppins",
        marginBottom: '30px',
        width: '1024px',
        marginLeft: '-160px',
        textTransform: 'initial',
        '&:hover': {
            color: 'black',
        },
    },

    dnd__image: {
        borderRadius: '5px',
        border: '1px solid #645E6F',
        width: '193px',
        height: '170px',
        margin: '5px 0 73px 0'
    },

    dnd__icon: {
        color: "#645E6F",
        align: "center",
        width: '69px',
        height: '69px',
        margin: '20.5px 62px 0 63px'
    },

    preview: {
        margin: `calc(calc(160px - 100%)/2)`,
        height: "160px",
        maxWidth: '180px'
    },

    text__dnd: {
        color: "#645E6F",
    }
}));

const DetailTestimoniPage = () => {
    const [user] = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [testi, setTesti] = useState(null)
    const classes = useStyles();
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        axios.get("https://be-mppl.herokuapp.com/api/clients").then((res) => {
            setLoading(false);
            setTesti(res.data);     
        });
    }, [testi]);

    

    return (
        <div className={classes.root}>
            <div className={classes.add__testi}>
                <h3 className={classes.h3}>Detail Testimoni</h3>
                <hr style={{ color: '#fff', height: 1 }} />
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid item class="form-field">
                            <TextField
                                className={classes.field}
                                name="nama"
                                // label="Nama"
                                placeholder="Nama Lengkap"
                                variant="outlined"
                                display="flex"
                                size="small"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                fullWidth
                                required
                                type="text"
                                //defaultValue={testi.name}
                                //value={formValues.nama}
                                autoFocus={true}
                            // error={namaError}
                            />
                        </Grid>
                        <Grid item class="form-field">
                            <TextField
                                className={classes.field}
                                name="nama"
                                // label="Nama"
                                placeholder="Jabatan"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                fullWidth
                                size="small"
                                required
                                type="text"
                                //value={formValues.nama}
                                autoFocus={true}
                            // error={namaError}
                            />
                        </Grid>
                        <Grid item class="form-field">
                            <TextField
                                className={classes.field}
                                name="nama"
                                // label="Nama"
                                placeholder="Testimoni"
                                variant="outlined"
                                display="flex"
                                InputLabelProps={{ className: classes.label, required: false }}
                                InputProps={{ className: classes.input }}
                                multiline
                                rows={5}
                                fullWidth
                                size="small"
                                required
                                type="text"
                                //value={formValues.nama}
                                autoFocus={true}
                            // error={namaError}
                            />
                        </Grid>
                        <Grid item class="form-field">
                                <div className={classes.dnd__image}>
                                    <div style={{ position: 'absolute', align: 'center', }}>
                                        
                                    </div>
                                </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default DetailTestimoniPage;
