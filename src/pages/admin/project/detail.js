import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, TextField, Button, makeStyles, CircularProgress, InputAdornment } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
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
      borderColor: "#645E6F",
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

export default function DetailProjekPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [user] = useContext(UserContext);
  const [id, setId] = useState(null);
  // image data
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

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://be-mppl.herokuapp.com/api/projects/"+ id, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        // console.log(response);
        setLoading(false);
        if (response.data) setProject(response.data);
        else history.push("/admin/projek/add");
      });
  }, [project]);

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Detail Projek</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid key={project._id} container alignItems="center" justify="center" direction="column">
            <Grid item class="form-field">
              <TextField
                className={classes.field}
                variant="outlined"
                display="flex"
                size="small"
                InputProps={{ className: classes.input, readOnly: true }}
                fullWidth
                value={project.name}
              />
            </Grid>
            <Grid item class="form-field">
              <TextField
                className={classes.field}
                variant="outlined"
                display="flex"
                InputProps={{ className: classes.input, readOnly: true }}
                multiline
                rows={5}
                fullWidth
                size="small"
                value={project.description}
              />
            </Grid>
            <Grid item class="form-field">
              <Box display="flex">
                <TextField
                  className={classes.field}
                  variant="outlined"
                  display="flex"
                  InputProps={{
                    className: classes.input,
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarTodayIcon className={classes.icon} />
                      </InputAdornment>
                    ),
                    readOnly: true,
                  }}
                  size="small"
                  value={project.startDate}
                />
                <TextField
                  className={classes.field}
                  variant="outlined"
                  display="flex"
                  InputProps={{
                    className: classes.input,
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarTodayIcon className={classes.icon} />
                      </InputAdornment>
                    ),
                    readOnly: true,
                  }}
                  size="small"
                  value={project.endDate}
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
        )}
      </div>
    </div>
  );
}
