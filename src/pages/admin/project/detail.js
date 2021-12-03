import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, TextField, Button, makeStyles, CircularProgress, InputAdornment } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import { useParams } from "react-router-dom"

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
}));

export default function DetailProjekPage() {
  const [projek, setProjek] = useState({});
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://be-mppl.herokuapp.com/api/projects/"+ id,)
      .then((response) => {
        setLoading(false);
        setProjek(response.data.project);
      });
  }, [projek]);

  // decode JSON startDate, endDate
  function formatDate(string){
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(string).toLocaleDateString('en-GB', options);
  }

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Detail Project</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container alignItems="center" justify="center" direction="column">
            <Grid item class="form-field">
              <TextField
                className={classes.field}
                variant="outlined"
                display="flex"
                size="small"
                InputProps={{ className: classes.input, readOnly: true }}
                fullWidth
                value={projek.name}
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
                value={projek.description}
              />
            </Grid>
            <Grid item class="form-field">
              <Box display="flex">
                <TextField
                  label="Tanggal Mulai"
                  className={classes.field}
                  variant="outlined"
                  display="flex"
                  InputLabelProps={{ className: classes.label, shrink: true }}
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
                  marginRight="50px"
                  value={formatDate(projek.startDate)}
                />
                <TextField
                  label="Tanggal Selesai"
                  className={classes.field}
                  variant="outlined"
                  display="flex"
                  InputLabelProps={{ className: classes.label, shrink: true }}
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
                  marginRight="50px"
                  value={formatDate(projek.endDate)}
                />
              </Box>
            </Grid>
            <Grid item class="form-field">
              <div className={classes.dnd__image}>
                  <div style={{ position: 'absolute', align: 'center', }}>
                      <img src={"http://be-mppl.herokuapp.com/" + projek.coverPath}></img>                                   
                  </div>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
