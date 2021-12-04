import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Box, Grid, TextField, Button, makeStyles, InputAdornment, CircularProgress } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import { UserContext } from "../../../context/UserContext";
import { Controller, useForm } from "react-hook-form";
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
    marginTop: 5,
    marginBottom: 5,
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
    color: "#DCD4E7",
  },

  add__button: {
    padding: "57px",
  },

  btn: {
    backgroundColor: "#644EEC",
    color: "white",
    fontFamily: "Poppins",
    marginBottom: "30px",
    width: "232px",
    textTransform: "initial",
    "&:hover": {
      color: "black",
    },
  },

  btn_cancel: {
    backgroundColor: "#645E6F",
    color: "white",
    fontFamily: "Poppins",
    margin: "0 35px 30px 100px",
    width: "232px",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },

  dnd__image: {
    borderRadius: "5px",
    border: "1px solid #645E6F",
    width: "200px",
    height: "180px",
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
    // margin: `calc(calc(160px - 100%)/2)`,
    height: "160px",
    maxWidth: "180px",
    margin: "5% 5%",
  },

  text__dnd: {
    color: "#645E6F",
  },

  icon: {
    color: "#FFFFFF",
  },
}));

export default function EditProjekPage() {
  const classes = useStyles();
  const [projek, setProjek] = useState({});
  const [user] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(false)
  const history = useHistory();
  const { id } = useParams();
  // const date = new Date(2021-11-30T00:00:00.000Z) date.getFullYear() + date.getMonth() + date.getDate()
  
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
  console.log(formValues);

  useEffect(() =>{
    if(formValues === false){
        setLoading(true);
        axios
            .get("https://be-mppl.herokuapp.com/api/projects/"+ id)
            .then((response) => {
                setLoading(false);
                setProjek(response.data.project); 
            });
    }
  }, [projek]);

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
    let formdata = new FormData();
    formdata.append("_id", id);
    formdata.append("name", formValues.name);
    formdata.append("description", formValues.description);
    formdata.append("startDate", formValues.startDate);
    formdata.append("endDate", formValues.endDate);
    formdata.append("cover", image[0]);

    axios
      .put(
        "https://be-mppl.herokuapp.com/api/projects",
          formdata, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            }
        })
      .then((response) => {
        console.log(response);
        history.push("/admin/projek");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // decode JSON startDate, endDate
  function formatDate(string){
    var options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Edit Detail Projek</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
          <Grid container alignItems="center" justify="center" direction="column">
            <Grid item class="form-field">
              <TextField
                name="name"
                className={`${classes.field}`}
                placeholder="Nama Projek"
                variant="outlined"
                size="small"
                InputProps={{ className: classes.input }}
                fullWidth
                required
                type="text"
                autoFocus={true}
                onChange={handleFormChange}
                value={formValues.name ? (formValues.name) : (projek.name)}
              />
            </Grid>
            <Grid item class="form-field">
              <TextField
                name="description"
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
                autoFocus={true}
                onChange={handleFormChange}
                value={formValues.description ? (formValues.description) : (projek.description)}
              />
            </Grid>
            <Grid item class="form-field">
              <Box display="flex">
                <TextField
                  name="startDate"
                  className={classes.field}
                  label="Tanggal mulai"
                  placeholder="MM/DD/YYYY"
                  variant="outlined"
                  display="flex"
                  InputLabelProps={{ className: classes.label, required: true, shrink: true }}
                  InputProps={{ className: classes.input }}
                  size="small"
                  required
                  type="date"
                  autoFocus={true}
                  onChange={handleFormChange}
                  value={formValues.startDate ? (formValues.startDate) : (projek.startDate)}
                />
                <TextField
                  name="endDate"
                  className={classes.field}
                  label="Tanggal Selesai"
                  placeholder="MM/DD/YYYY"
                  variant="outlined"
                  display="flex"
                  InputLabelProps={{ className: classes.label, required: true, shrink: true }}
                  InputProps={{ className: classes.input }}
                  size="small"
                  required
                  type="date"
                  autoFocus={true}
                  onChange={handleFormChange}
                  value={formatDate(formValues.endDate) ? (formValues.endDate) : (projek.endDate)}
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
              onClick={() => history.goBack()}
              className={classes.btn_cancel}
              variant="contained"
              type="submit"
            >
              Batal
            </Button>
            <Button
              onClick={handleSubmit}
              className={classes.btn}
              variant="contained"
              type="submit"
            >
              Simpan
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};


