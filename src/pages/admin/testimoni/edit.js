import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../../context/UserContext";
import { useHistory, useParams } from "react-router-dom";
import { Grid, TextField, Button, makeStyles} from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { Controller, useForm } from "react-hook-form";
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import axios from 'axios';

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
        width: '232px',
        textTransform: 'initial',
        '&:hover': {
            color: 'black',
        },
    },

    btn_cancel: {
        backgroundColor: "#645E6F",
        color: 'white',
        fontFamily: "Poppins",
        margin: '0 35px 30px 100px',
        width: '232px',
        textTransform: 'initial',
        '&:hover': {
            backgroundColor: 'red',
            color: 'white',
        },
    },

    dnd__image: {
        borderRadius: '5px',
        border: '1px solid #645E6F',
        width: '193px',
        height: '170px',
        margin: '5px 0 5px 0'
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

export default function EditTestimoniPage() {
    const [user] = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const classes = useStyles();
    const [image, setImage] = useState([]);
    const history = useHistory();
    const [testi, setTesti] = useState({});
    const [formValues, setFormValues] = useState(false)
    
    const { getRootProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })        
    
    useEffect(() =>{
        if(formValues === false){
            setLoading(true);
            axios
                .get("https://be-mppl.herokuapp.com/api/clients/"+ id)
                .then((res) => {
                    setLoading(false);
                    setTesti(res.data.client); 
                });
        }
    }, [testi]);

    const handleFormChange = (e) => {

        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormValue = {...formValues};
        newFormValue[fieldName] = fieldValue;

        setFormValues(newFormValue);
        console.log(newFormValue);
    }

    console.log(formValues);
    console.log(image);

    const handleSubmit = () => {
        let formdata = new FormData();
        formdata.append("name", formValues.name);
        formdata.append("job", formValues.job);
        formdata.append("testimoni", formValues.testimoni);
        formdata.append("_id", id);
        formdata.append("profile", image[0]);

        axios
          .put(
            "https://be-mppl.herokuapp.com/api/clients",
            formdata,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          )
          .then((res) => {
            history.push("/admin/testimoni");
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
    };

    return (
        <div className={classes.root}>
            <div className={classes.add__testi}>
                <h3 className={classes.h3}>Edit Testimoni</h3>
                <hr style={{ color: '#fff', height: 1 }} />
                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid item class="form-field">
                            <TextField
                                className={classes.field}
                                name="name"
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
                                onChange={handleFormChange}
                                value={formValues.name ? (formValues.name) : (testi.name)}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                            // error={namaError}
                            />
                        </Grid>
                        <Grid item class="form-field">
                            <TextField
                                className={classes.field}
                                name="job"
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
                                onChange={handleFormChange}
                                value={formValues.job ? (formValues.job) : (testi.job)}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                            // error={namaError}
                            />
                        </Grid>
                        <Grid item class="form-field">
                            <TextField
                                className={classes.field}
                                name="testimoni"
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
                                onChange={handleFormChange}
                                value={formValues.testimoni ? (formValues.testimoni) : (testi.testimoni)}
                                //onChange={e => handleChangeNama(e)}
                                autoFocus={true}
                            // error={namaError}
                            />
                        </Grid>
                        <Grid item class="form-field">
                            <div {...getRootProps()}>
                                <div className={classes.dnd__image}>
                                    <div style={{ position: 'absolute', align: 'center', }}>
                                        {image.map((upFile) => {
                                            return (
                                                <div>
                                                    <img src={upFile.preview} className={classes.preview} alt="preview" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <AddPhotoAlternateOutlinedIcon className={classes.dnd__icon} />
                                    {
                                        isDragActive ?
                                            <p className={classes.text__dnd} align="center" >Drop foto<br />di sini...</p> :
                                            <p className={classes.text__dnd} align="center">Drag dan drop<br />foto di sini</p>
                                    }
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </form>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item class="form-field">
                        <Button
                            onClick= {() => history.goBack()}
                            className={classes.btn_cancel}

                            variant="contained"
                            type="submit"
                        // disabled={!formValues.nama & !formValues.nomorhp && !formValues.email && !formValues.pesan}
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            className={classes.btn}

                            variant="contained"
                            type="submit"
                        // disabled={!formValues.nama && !formValues.nomorhp && !formValues.email && !formValues.pesan}
                        >
                            Simpan
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};


