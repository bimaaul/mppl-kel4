import React, { useState, useEffect, useContext} from "react";
import { Box, Grid, TextField, Button, makeStyles } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
  },

  h3: {
    alignItems: "center",
    fontSize: "20px",
    fontweight: "700",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },

  add__testi: {
    background: "#111113",
    color: "#fff",
    borderRadius: "10px!important",
    margin: "15px",
    justifyContent: "center",
  },

  field: {
    "& .MuiOutlinedInput-root": {
      borderColor: "#645E6F",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#645E6F",
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      borderColor: "#645E6F",
    },
    "&  .MuiInputBase-inputMultiline": {
      borderColor: "#645E6F",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
      borderColor: "#644EEC",
    },
    "& p": {
      color: "white",
    },
    display: "block",
    width: "1024px",
  },

  form: {
    marginTop: "30.7px",
    marginLeft: "-325px",
    justifyContent: "center",
  },

  input: {
    color: "#DCD4E7",
    fontFamily: "Poppins",
  },

  label: {
    color: "#645E6F",
  },

  add__button: {
    padding: "57px",
  },

  btn: {
    backgroundColor: "#644EEC",
    color: "white",
    fontFamily: "Poppins",
    marginBottom: "30px",
    width: "1024px",
    marginLeft: "-160px",
    textTransform: "initial",
    "&:hover": {
      color: "black",
    },
  },

  dnd__image: {
    borderRadius: "5px",
    border: "1px solid #645E6F",
    width: "193px",
    height: "170px",
    margin: "5px 0 5px 0",
  },

  dnd__icon: {
    color: "#645E6F",
    align: "center",
    width: "69px",
    height: "69px",
    margin: "20.5px 62px 0 63px",
  },

  preview: {
    margin: `calc(calc(160px - 100%)/2)`,
    height: "160px",
    maxWidth: "180px",
  },

  text__dnd: {
    color: "#645E6F",
  },
}));

export default function AddProjekPage() {
  const classes = useStyles();
  const history = useHistory();
  const [user] = useContext(UserContext);

  const [image, setImage] = useState([]);
  const { getRootProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });

  console.log(image);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      name: "", 
      desription: "", 
      startDate: "", 
      endDate: "",
      img: "",
    },
    mode: "onChange",
  });

  const onSubmit = ({ name, description, startDate, endDate, img }) => {
    axios
      .post(
        "https://be-mppl.herokuapp.com/api/projects",
        {
          name,
          description,
          startDate,
          endDate,
          img,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        history.push("/admin/projek");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // const handleFormChange = (e) => {
  //   e.preventDefault();
  //   const fieldName = e.target.getAttribute("name");
  //   const fieldValue = e.target.value;
  //   const newFormValue = {...formValues};
  //   newFormValue[fieldName] = fieldValue;
  //   setFormValues(newFormValue);
  //   console.log(newFormValue);
  // }
  // const handleSubmit = (e) => {
  // };

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Tambahkan Projek</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate autoComplete="off">
          <Grid container alignItems="center" justify="center" direction="column">
            <Grid item class="form-field">
              <Controller
                name="name"
                control={control}
                rules={{required: "Nama proyek harus diisi"}}
                render={({ field, fieldState: { error }}) => (
                  <TextField
                    className={`${classes.field}`}
                    placeholder="Nama Projek"
                    variant="outlined"
                    size="small"
                    InputProps={{ className: classes.input }}
                    fullWidth
                    required
                    type="text"
                    autoFocus={true}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item class="form-field">
              <Controller
                name="description"
                control={control}
                rules={{required: "Deskripsi proyek harus diisi"}}
                render={({ field, fieldState: { error }}) => (
                  <TextField
                    className={`${classes.field}`}
                    placeholder="Deskripsi Projek"
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
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item class="form-field">
              <Box display="flex">
                <TextField
                  className={classes.field}
                  name="nama"
                  label="Tanggal mulai"
                  variant="outlined"
                  display="flex"
                  InputLabelProps={{ className: classes.label, required: true, shrink: true }}
                  InputProps={{ className: classes.input }}
                  size="small"
                  required
                  type="date"
                />
                <TextField
                  className={classes.field}
                  name="nama"
                  label="Tanggal Selesai"
                  variant="outlined"
                  display="flex"
                  InputLabelProps={{ className: classes.label, required: true, shrink: true }}
                  InputProps={{ className: classes.input }}
                  size="small"
                  required
                  type="date"
                />
              </Box>
            </Grid>
            <Grid item class="form-field">
              <div {...getRootProps()}>
                <div className={classes.dnd__image}>
                  <div style={{ position: "absolute", align: "center" }}>
                    {image.map((upFile) => {
                      return (
                        <div>
                          <img src={upFile.preview} className={classes.preview} alt="preview" />
                        </div>
                      );
                    })}
                  </div>
                  <AddPhotoAlternateOutlinedIcon className={classes.dnd__icon} />
                  {isDragActive ? (
                    <p className={classes.text__dnd} align="center">
                      Drop foto
                      <br />
                      di sini...
                    </p>
                  ) : (
                    <p className={classes.text__dnd} align="center">
                      Drag dan drop
                      <br />
                      foto di sini
                    </p>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </form>
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
              Tambah
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


