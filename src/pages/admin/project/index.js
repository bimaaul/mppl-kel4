import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/box";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    background: "#0D0C0F",
  },

  h3: {
    alignItems: "center",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontweight: "700",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },

  add__testi: {
    background: "#111113",
    color: "#fff",
    borderRadius: "10px!important",
    margin: "20px 35px 35px 35px",
    justifyContent: "center",
  },

  list__testi: {
    color: "#fff",
    background: "#111113",
    borderRadius: "10px!important",
    margin: "35px",
    paddingTop: "30px",
    minheight: "404px",
  },

  add__button: {
    padding: "57px",
  },

  button: {
    height: "56px",
    width: "56px",
  },
  table: {
    background: "#111113",
    marginBottom: "20px",
  },

  p: {
    color: "#645E6F",
  },

  cell: {
    borderBottom: "none",
    color: "white",
  },

  trash_icon: {
    color: "white",
    height: "150px",
    width: "150px",
    margin: "40px 0 15px 260px",
  },

  popup: {
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
  },

  popup_box: {
    display: "flex",
    flexdirection: "column",
    margin: "auto",
    position: "relative",
    width: "662px",
    height: "297px",
    background: "#1D1C21",
    boxShadow: "0px 0px 15px #1B0CA1",
    borderRadius: "10px",
  },

  top_row: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "700px",
    height: "500px",
    margin: "20px 30px",
    margin: "-30px 0px -30px 0px",
  },

  top_column: {
    flex: "50%",
  },

  closes_btn: {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bolded",
    fontFamily: "Poppins",
    color: "#644EEC",
    background: "#1D1C21",
    borderStyle: "none",
    borderRadius: "1%",
    marginTop: "60px",
    marginBottom: "-90px",
    marginRight: " 0%",
    marginLeft: "auto",
    transitionDuration: "0.4s",
    cursor: "pointer",
  },

  empty_list:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function ProjectPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [user] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (project === null) {
      setLoading(true);
      axios
        .get("https://be-mppl.herokuapp.com/api/projects", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((response) => {
          console.log(response);
          setProject(response.data);
          setLoading(false);
        });
    }
  }, [project]);

  function handlePopup(id){
    handleOpen();
    setId(id);
  }

  // decode JSON startDate, endDate
  function formatDate(string){
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(string).toLocaleDateString('en-GB', options);
  }

  const handleDelete = () => {
    setLoading(true);
    
    axios.delete("https://be-mppl.herokuapp.com/api/projects/" + id , {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },     
    }).then((response) => {
      setLoading(false);
      axios.get("https://be-mppl.herokuapp.com/api/projects").then((response) => {
        console.log(response);
        setProject(response.data);
        //setLoading(false);
      });
    });

    handleClose();
  }

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Tambahkan Project</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        <div className={classes.add__button} align="center">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => history.push("/admin/projek/add")}
          >
            <AddIcon />
          </Button>
          <p className={classes.p} align="center">
            Add New Project
          </p>
        </div>
      </div>

      <div className={classes.list__testi}>
        <h3 className={classes.h3}>Daftar Project Kami</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
            <CircularProgress />
          </div>
        ) : project ? (
          <TableContainer>
            <Table className={classes.table} aria-label="list__project__table">
              <TableHead>
                <TableRow>
                  {/* <TableCell style={{ color: "white" }} align="center">
                    No
                  </TableCell> */}
                  <TableCell style={{ color: "white", fontWeight: "bold", width: "20%" }} align="left">
                    Judul
                  </TableCell>
                  <TableCell style={{ color: "white", fontWeight: "bold", width: "40%" }} align="left">
                    Durasi Pengerjaan
                  </TableCell>
                  <TableCell style={{ color: "white", fontWeight: "bold", width: "40%" }} align="left">
                    Aksi
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {project.map((project) => (
                    <TableRow key={project._id}>
                      {/* <TableCell className={classes.cell} align="center">
                        {project.no}
                      </TableCell> */}
                      <TableCell className={classes.cell} align="left">
                        {project.name}
                      </TableCell>
                      <TableCell className={classes.cell} align="left">
                        {formatDate(project.startDate)} - {formatDate(project.endDate)}
                        {/* {project.description} */}
                      </TableCell>
                      <TableCell className={classes.cell} align="left">
                        <Button
                          style={{
                            textTransform: "initial",
                            marginRight: "20px",
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => history.push("/admin/projek/detail/"+ project._id)}
                        >
                          Lihat Detail
                        </Button>
                        <Button
                          style={{
                            textTransform: "initial",
                            marginRight: "20px",
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => history.push("/admin/projek/edit/"+ project._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          style={{
                            background: "#ff0000",
                            color: "#fff",
                            textTransform: "initial",
                          }}
                          variant="contained"
                          onClick={() => handlePopup(project._id)}
                        >
                          Hapus
                        </Button>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="empty_list">
            Catatan proyek masih kosong
          </div>
        )}

        <Modal className={classes.popup} open={open} onClose={handleClose}>
          <Box className={classes.popup_box}>
            <div className={classes.top_row}>
              <div className={classes.top_column}>
                <Button className={classes.closes_btn} onClick={handleClose}>
                  X
                </Button>
                <DeleteOutlineOutlinedIcon className={classes.trash_icon} />
                <h3 className={classes.h3}>Apakah anda yakin ingin menghapus?</h3>
                <Button
                  style={{
                    background: "#ff0000",
                    color: "#fff",
                    textTransform: "initial",
                    marginTop: "20px",
                    marginLeft: "298px",
                  }}
                  variant="contained"
                  onClick={handleDelete}
                >
                  Hapus
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
