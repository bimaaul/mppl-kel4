import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Grid, TextField, Button, CircularProgress } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
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
    marginBottom: "120px",
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
}));

const StyledButton = withStyles(() => ({
  root: {
    backgroundColor: "#644EEC",
    color: "white",
    fontFamily: "Poppins",
    marginBottom: "30px",
    width: "232px",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "#644EEC",
    },
    "&.Mui-disabled": {
      color: "white",
      background: "#645E6F",
    },
  },
}))(Button);

export default function EditTentangKami() {
  const [user] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(null);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://be-mppl.herokuapp.com/api/about")
      .then((res) => {
        setLoading(false);
        if (res.data.about) setAbout(res.data.about);
        else history.push("/admin/tentang-kami/add");
      })
      .catch((err) => console.log(err.response.data));
  }, [history]);

  useEffect(() => {
    if (about) {
      setValue("name", about.name);
      setValue("description", about.description);
      setValue("experience", about.experience);
      setValue("project", about.project);
      setValue("client", about.client);
    }
  }, [about, setValue]);

  const onSubmit = ({ name, description, experience, project, client }) => {
    axios
      .put(
        "https://be-mppl.herokuapp.com/api/about",
        {
          name,
          description,
          experience,
          project,
          client,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        history.push("/admin/tentang-kami");
      })
      .catch((err) => console.log(err.response.data));
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Nama tim harus diisi",
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      className={`${classes.field} ${classes.fieldFull}`}
                      placeholder="Nama Tim"
                      variant="outlined"
                      InputLabelProps={{ className: classes.label, required: true }}
                      InputProps={{ className: classes.input }}
                      fullWidth
                      size="small"
                      type="text"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "Deskripsi tim harus diisi",
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      className={`${classes.field} ${classes.fieldFull}`}
                      placeholder="Visi/Misi/Deskripsi/Tagline Tim"
                      variant="outlined"
                      InputLabelProps={{ className: classes.label, required: true }}
                      InputProps={{ className: classes.input }}
                      fullWidth
                      multiline
                      rows={8}
                      size="small"
                      type="text"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Controller
                  name="experience"
                  control={control}
                  rules={{
                    required: "Tahun pengalaman kerja harus diisi",
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      className={`${classes.field} ${classes.fieldFull}`}
                      placeholder="ex: 3"
                      label="Total Pengalaman Kerja"
                      variant="outlined"
                      InputLabelProps={{ className: classes.label, required: true }}
                      InputProps={{ className: classes.input }}
                      fullWidth
                      size="small"
                      type="number"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Controller
                  name="project"
                  control={control}
                  rules={{
                    required: "Tahun projek harus diisi",
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      className={`${classes.field} ${classes.fieldFull}`}
                      placeholder="ex: 3"
                      label="Total Projek Berhasil"
                      variant="outlined"
                      InputLabelProps={{ className: classes.label, required: true }}
                      InputProps={{ className: classes.input }}
                      fullWidth
                      size="small"
                      type="number"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Controller
                  name="client"
                  control={control}
                  rules={{
                    required: "Total kerjasama harus diisi",
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      className={`${classes.field} ${classes.fieldFull}`}
                      placeholder="ex: 3"
                      label="Total Kerjasama Client"
                      variant="outlined"
                      InputLabelProps={{ className: classes.label, required: true }}
                      InputProps={{ className: classes.input }}
                      fullWidth
                      size="small"
                      type="number"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid container alignItems="center" justify="center" direction="column" style={{ marginTop: "16px" }}>
                {isSubmitting ? (
                  <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
                    <CircularProgress />
                  </div>
                ) : (
                  <Grid item class="form-field">
                    <Button onClick={() => history.goBack()} variant="contained" className={classes.btn_cancel}>
                      Batal
                    </Button>
                    <StyledButton
                      type="submit"
                      variant="contained"
                      className={classes.btn}
                      disabled={!isDirty || !isValid}
                    >
                      Simpan
                    </StyledButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </form>
        )}
      </div>
    </div>
  );
}
