import React, { useState } from 'react';
import {Grid, TextField, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';

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
        marginTop: '40px',
        marginBottom: '100px',
        justifyContent: 'center',
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
        color: 'white',
        backgroundColor: "#644EEC",
        '&:hover': {
            backgroundColor: 'white',
            color: '#644EEC',
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
    },
    
}));

export default function AddTentangKami()  {
    const classes = useStyles();
    const history = useHistory();
    const [image, setImage] = useState([]);

    const [formValues, setFormValues] = useState([{
        //nama: '', 
        //nomorhp: '', 
        //email: '', 
        //pesan: ''
    }])
    const handleSubmit = (e) => {
        console.log(formValues);
    }

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

    return (
        <div className={classes.root}>
            <div className={classes.addData}>
                <h4 className={classes.h4}>Tambahkan Keahlian</h4>
                <hr style={{ color: '#645E6F', height: 0.5 }} />
                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                    <Grid container xs={12} spacing={2} className={classes.container} fullWidth>
                        <Grid item xs={12}>
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
                                            <p className={classes.text__dnd} align="center">Drop Gambar<br />di sini...</p> :
                                            <p className={classes.text__dnd} align="center">Drag dan Drop<br />Gambar di sini</p>
                                    }
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={`${classes.field} ${classes.fieldFull}`}
                                name="skill"
                                placeholder="Keahlian"
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
                                placeholder="Deskripsi Keahlian"
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
                    </Grid>
                </form>
                <Grid container xs={12} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Button
                            onClick={() => {
                                handleSubmit();
                                history.push("/admin");
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