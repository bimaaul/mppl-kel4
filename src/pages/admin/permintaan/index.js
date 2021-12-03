import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Paper,
  Box,
  Modal,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import Loading from "../../../components/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    background: "#0D0C0F",
  },

  h3: {
    alignItems: "left",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontweight: "700",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },
  h5: {
    alignItems: "left",
    fontSize: "26px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    margin: "20px 35px 35px 35px",
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
  card: {
    backgroundColor: "#645E6F",
    color: "white",
    margin: "20px 35px 35px 35px",
  },
  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),
    body2: {
      fontSize: "18px",
    },
  },
  centering: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "16px",
    paddingBottom: "16px",
  },
}));

const RequestTable = ({ data, handleOpen }) => {
  const classes = useStyles();
  const history = useHistory();

  return data.length ? (
    <TableContainer>
      <Table className={classes.table} aria-label="list__testi__table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white" }} align="center">
              No
            </TableCell>
            <TableCell style={{ color: "white" }} align="left">
              Nama
            </TableCell>
            <TableCell style={{ color: "white" }} align="left">
              Persetujuan
            </TableCell>
            <TableCell style={{ color: "white" }} align="left">
              Aksi
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((req, index) => (
            <TableRow key={req._id}>
              <TableCell className={classes.cell} align="center">
                {index + 1}
              </TableCell>
              <TableCell className={classes.cell} align="left">
                {req.name}
              </TableCell>
              <TableCell className={classes.cell} align="left">
                {req.seen ? <span style={{ color: "#137312" }}>Sudah Dilihat</span> : "Belum Dilihat"}
              </TableCell>
              <TableCell className={classes.cell} align="left">
                <Button
                  style={{
                    textTransform: "initial",
                    marginRight: "20px",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => history.push("/admin/permintaan/" + req._id)}
                >
                  Lihat Detail
                </Button>
                <Button
                  style={{
                    background: "#ff0000",
                    color: "#fff",
                    textTransform: "initial",
                  }}
                  variant="contained"
                  onClick={() => {
                    handleOpen(req._id);
                  }}
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
    <div className={classes.centering}>Tidak ada permintaan baru masuk</div>
  );
};

export default function PermintaanPage() {
  const classes = useStyles();

  const [user] = useContext(UserContext);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [permintaan, setPermintaan] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setId(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    axios
      .delete("https://be-mppl.herokuapp.com/api/requests/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setPermintaan((prev) => prev.filter((data) => data._id !== id));
        setOpen(false);
      })
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://be-mppl.herokuapp.com/api/requests", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setPermintaan(res.data);
        setLoading(false);
      });
  }, [user.token]);

  return (
    <div className={classes.root}>
      <Box mb={3}>
        <h5 className={classes.h5}>Permintaan Persetujuan</h5>
      </Box>
      <Paper className={classes.card}>
        <Box padding={3}>
          <Typography variant="body2">
            Berikut daftar pengajuan kerjasama yang harus anda lihat. Anda harus melihat detail pengajuan untuk melihat
            detail informasi kontak dan melakukan tindakan persetujuan atau penolakan.
          </Typography>
        </Box>
      </Paper>
      <div className={classes.list__testi}>
        <h3 className={classes.h3}>Daftar Permintaan</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        {loading ? <Loading /> : <RequestTable data={permintaan} classes={classes} handleOpen={handleOpen} />}
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
