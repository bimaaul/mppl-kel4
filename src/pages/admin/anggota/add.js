import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Box, Grid, TextField, Button, makeStyles, Card } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import { useHistory } from "react-router-dom";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import Loading from "../../../components/Loading";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
  },

  h3: {
    fontFamily: "Poppins",
    alignItems: "center",
    fontSize: "20px",
    fontweight: "700",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },

  h4: {
    fontFamily: "Poppins",
    alignItems: "flex-start",
    fontSize: "16px",
    fontweight: "500",
    color: "#DCD4E7",
    marginBottom: -2,
  },

  h4_1: {
    fontFamily: "Poppins",
    alignItems: "flex-start",
    fontSize: "16px",
    fontweight: "500",
    color: "#DCD4E7",
    marginLeft: "-520px",
    marginBottom: -2,
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

  field_date: {
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
    marginTop: 25,
    marginBottom: 5,
    color: "#DCD4E7",
    display: "block",
    fontFamily: "Poppins",
  },

  dateform: {
    marginLeft: "-350px",
    display: "grid",
  },

  form: {
    justifyContent: "center",
    marginLeft: "-325px",
  },

  input: {
    color: "#DCD4E7",
    fontFamily: "Poppins",
  },

  label: {
    color: "#645E6F",
    fontFamily: "Poppins",
  },

  add__button: {
    padding: "57px",
  },

  add__button: {
    padding: "57px",
  },

  btn: {
    backgroundColor: "#644EEC",
    color: "white",
    fontFamily: "Poppins",
    marginTop: "20px",
    marginBottom: "20px",
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

  icon: {
    color: "#FFFFFF",
  },

  gridwrap: {
    padding: 15,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#111113",
  },

  datelogo: {
    color: "white",
  },
}));

const projectState = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
};

const workState = {
  role: "",
  description: "",
  startDate: "",
  endDate: "",
};

const formState = {
  name: "",
  role: "",
  description: "",
  linkedin: "",
  profile: "",
};

export default function AddAnggotaPage() {
  const [user] = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();
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

  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState([formState]);
  const [projects, setProjects] = useState([projectState, projectState]);
  const [works, setWorks] = useState([workState, workState]);

  const handleFormChange = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormValue = { ...formValues };
    newFormValue[fieldName] = fieldValue;

    setFormValues(newFormValue);
  };

  const handleChange = (stateName, name, value, index) => {
    if (stateName === "projects") {
      setProjects((oldState) => {
        oldState[index][name] = value;
        return oldState;
      });
    } else {
      setWorks((oldState) => {
        oldState[index][name] = value;
        return oldState;
      });
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);

    let formdata = new FormData();
    formdata.append("name", formValues.name);
    formdata.append("role", formValues.role);
    formdata.append("description", formValues.description);
    formdata.append("linkedin", formValues.linkedin);
    formdata.append("projects", JSON.stringify(projects));
    formdata.append("works", JSON.stringify(works));
    formdata.append("profile", image[0]);

    axios
      .post("https://be-mppl.herokuapp.com/api/members", formdata, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/admin/anggota");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Card className={classes.gridwrap}>
      <h3 className={classes.h3}>Tambahkan Anggota</h3>
      <hr style={{ color: "#fff", height: 1 }} />
      <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
        <Grid container alignItems="center" justify="center" direction="column">
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

          <Grid item class="form-field">
            <TextField
              className={classes.field}
              name="name"
              placeholder="Nama Anggota"
              variant="outlined"
              display="flex"
              size="small"
              InputLabelProps={{ className: classes.label, required: false }}
              InputProps={{ className: classes.input }}
              fullWidth
              required
              type="text"
              onChange={handleFormChange}
              value={formValues.name}
              autoFocus={true}
            />
          </Grid>

          <Grid item class="form-field">
            <TextField
              className={classes.field}
              name="role"
              placeholder="Role Keahlian Anggota"
              variant="outlined"
              display="flex"
              InputLabelProps={{ className: classes.label, required: false }}
              InputProps={{ className: classes.input }}
              fullWidth
              size="small"
              required
              type="text"
              onChange={handleFormChange}
              value={formValues.role}
            />
          </Grid>

          <Grid item class="form-field">
            <TextField
              className={classes.field}
              name="description"
              placeholder="Deskripsi Keahlian Anggota"
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
              value={formValues.description}
            />
          </Grid>

          <Grid item class="form-field">
            <TextField
              className={classes.field}
              name="linkedin"
              placeholder="Link Akun LinkedIn"
              variant="outlined"
              display="flex"
              size="small"
              InputLabelProps={{ className: classes.label, required: false }}
              InputProps={{ className: classes.input }}
              fullWidth
              required
              type="text"
              onChange={handleFormChange}
              value={formValues.linkedin}
            />
          </Grid>

          {projects.map((data, index) => (
            <>
              <h4 className={classes.h4_1}>Pengalaman Projek {index + 1}</h4>
              <Grid item class="form-field">
                <TextField
                  onChange={(e) => handleChange("projects", e.target.name, e.target.value, index)}
                  name="name"
                  className={classes.field}
                  placeholder={`Nama Projek ${index + 1}`}
                  variant="outlined"
                  display="flex"
                  size="small"
                  InputLabelProps={{ className: classes.label, required: false }}
                  InputProps={{ className: classes.input }}
                  fullWidth
                  required
                  type="text"
                />
              </Grid>

              <Grid item class="form-field">
                <Box display="flex">
                  <TextField
                    onChange={(e) => handleChange("projects", e.target.name, e.target.value, index)}
                    name="startDate"
                    className={classes.field}
                    type="date"
                    label="Tanggal mulai"
                    placeholder="DD/MM/YYYY"
                    variant="outlined"
                    display="flex"
                    size="small"
                    InputLabelProps={{ className: classes.label, required: false, shrink: true }}
                    InputProps={{
                      className: classes.input,
                    }}
                    required
                  />
                  <TextField
                    onChange={(e) => handleChange("projects", e.target.name, e.target.value, index)}
                    name="endDate"
                    className={classes.field}
                    type="date"
                    label="Tanggal selesai"
                    placeholder="DD/MM/YYYY"
                    variant="outlined"
                    display="flex"
                    size="small"
                    InputLabelProps={{ className: classes.label, required: false, shrink: true }}
                    InputProps={{
                      className: classes.input,
                    }}
                    required
                  />
                </Box>
              </Grid>

              <Grid item class="form-field">
                <TextField
                  onChange={(e) => handleChange("projects", e.target.name, e.target.value, index)}
                  name="description"
                  className={classes.field}
                  placeholder={`Deskripsi Umum Projek ${index + 1}`}
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
                />
              </Grid>
            </>
          ))}

          {works.map((data, index) => (
            <>
              <h4 className={classes.h4_1}>Pengalaman Kerja {index + 1}</h4>
              <Grid item class="form-field">
                <TextField
                  onChange={(e) => handleChange("works", e.target.name, e.target.value, index)}
                  name="role"
                  className={classes.field}
                  placeholder={`Nama Kerja ${index + 1}`}
                  variant="outlined"
                  display="flex"
                  size="small"
                  InputLabelProps={{ className: classes.label, required: false }}
                  InputProps={{ className: classes.input }}
                  fullWidth
                  required
                  type="text"
                />
              </Grid>

              <Grid item class="form-field">
                <Box display="flex">
                  <TextField
                    onChange={(e) => handleChange("works", e.target.name, e.target.value, index)}
                    name="startDate"
                    className={classes.field}
                    type="date"
                    label="Tanggal mulai"
                    placeholder="DD/MM/YYYY"
                    variant="outlined"
                    display="flex"
                    size="small"
                    InputLabelProps={{ className: classes.label, required: false, shrink: true }}
                    InputProps={{
                      className: classes.input,
                    }}
                    required
                  />
                  <TextField
                    onChange={(e) => handleChange("works", e.target.name, e.target.value, index)}
                    name="endDate"
                    className={classes.field}
                    type="date"
                    label="Tanggal selesai"
                    placeholder="DD/MM/YYYY"
                    variant="outlined"
                    display="flex"
                    size="small"
                    InputLabelProps={{ className: classes.label, required: false, shrink: true }}
                    InputProps={{
                      className: classes.input,
                    }}
                    required
                  />
                </Box>
              </Grid>

              <Grid item class="form-field">
                <TextField
                  onChange={(e) => handleChange("works", e.target.name, e.target.value, index)}
                  name="description"
                  className={classes.field}
                  placeholder={`"Deskripsi Umum Kerja ${index + 1}`}
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
                />
              </Grid>
            </>
          ))}
        </Grid>
      </form>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item class="form-field">
          {loading ? (
            <Loading />
          ) : (
            <Button
              className={classes.btn}
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              fullWidth
              // disabled={!formValues.nama && !formValues.nomorhp && !formValues.email && !formValues.pesan}
            >
              Tambah
            </Button>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
