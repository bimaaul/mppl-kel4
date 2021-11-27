import React, { useState } from 'react';
import icon from "./calendar.png"
import { Box, Grid, TextField, Button, makeStyles, InputAdornment } from '@material-ui/core';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDropzone } from 'react-dropzone';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';

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

    icon:{
        color: "#FFFFFF"
    }
}));
const DetailPermintaanPage = () => {
    const classes = useStyles();
    const [image, setImage] = useState([]);
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

    const [formValues, setFormValues] = useState([{
        //nama: '', 
        //nomorhp: '', 
        //email: '', 
        //pesan: ''
    }])

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
    }
    