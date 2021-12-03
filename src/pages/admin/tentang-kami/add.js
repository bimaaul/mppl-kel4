import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../../../components/Loading";

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

const StyledButton = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    marginTop: "16px",
    padding: "8px",
    color: "white",
    background: "#644EEC",
    "&:hover": {
      background: "#644EEC",
    },
    "&.Mui-disabled": {
      color: "white",
      background: "#645E6F",
    },
  },
}))(Button);

export default function AddTentangKami() {
  const history = useHistory();
  const [user] = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      name: "Mamen Rider",
      description: "Visi misi foya",
      experience: 3,
      project: 20,
      client: 10,
    },
    mode: "onChange",
  });

  const classes = useStyles();

  const onSubmit = ({ name, description, experience, project, client }) => {
    axios
      .post(
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
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.addData}>
        <h4 className={classes.h4}>Informasi Kami</h4>
        <hr style={{ color: "#645E6F", height: 0.5 }} />
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
                    autoFocus={true}
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
            <Grid item xs={12}>
              {isSubmitting ? (
                <Loading />
              ) : (
                <StyledButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  // disabled={!isDirty || !isValid}
                >
                  Tambah
                </StyledButton>
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
