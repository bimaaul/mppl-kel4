import { useEffect, useState } from "react";
import { Grid, TextField, CircularProgress } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    backgroundColor: "#0D0C0F",
  },
  h4: {
    color: "white",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "medium",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },
  addData: {
    background: "#111113",
    color: "white",
    borderRadius: "10px",
    marginTop: "60px",
    marginBottom: "200px",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  form: {
    justifyContent: "center",
    color: "white",
    margin: "30px 0px 40px 0px",
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
    color: "white",
  },

  input: {
    color: "white",
  },
  label: {
    color: "white",
  },
  btn: {
    backgroundColor: "#644EEC",
    "&:hover": {
      backgroundColor: "#1D1C21",
      color: "#644EEC",
    },
  },
}));

const StyledField = withStyles(() => ({
  root: {
    "& .MuiInputBase-root": {
      color: "white",
    },
  },
}))(TextField);

export default function DetailTentangKami() {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState({});
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios.get("https://be-mppl.herokuapp.com/api/about").then((res) => {
      setLoading(false);
      if (res.data.about) setAbout(res.data.about);
      else history.push("/admin/tentang-kami/add");
    });
  }, [history]);

  return (
    <div className={classes.root}>
      <div className={classes.addData}>
        <h4 className={classes.h4}>Informasi Kami</h4>
        <hr style={{ color: "#645E6F", height: 0.5 }} />
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container xs={12} spacing={2} className={classes.container} fullWidth>
            <Grid item xs={12}>
              <StyledField
                className={`${classes.field} ${classes.fieldFull}`}
                value={about.name}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledField
                className={`${classes.field} ${classes.fieldFull}`}
                value={about.description}
                variant="outlined"
                multiline
                rows={8}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledField
                className={`${classes.field} ${classes.fieldPart}`}
                InputLabelProps={{ className: classes.label, required: true }}
                label="Tahun Pengalaman Kerja"
                value={about.experience}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledField
                className={`${classes.field} ${classes.fieldPart}`}
                InputLabelProps={{ className: classes.label, required: true }}
                label="Total Projek Berhasil"
                value={about.project}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledField
                className={`${classes.field} ${classes.fieldPart}`}
                InputLabelProps={{ className: classes.label, required: true }}
                label="Total Kerjasama Client"
                value={about.client}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                size="small"
              />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
