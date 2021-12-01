import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    backgroundColor: "#0D0C0F",
  },
  h3: {
    textAlign: "left",
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: "bolder",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },
  h4: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "normal",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },
  descAbout: {
    backgroundColor: "#645E6F",
    color: "white",
    textAlign: "justify",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    padding: "3px 20px",
    margin: "20px 0px 50px",
  },
  addAbout: {
    backgroundColor: "#111113",
    color: "white",
    borderRadius: "10px!important",
    margin: "30px 0px",
    justifyContent: "center",
  },
  aboutButton: {
    backgroundColor: "#111113",
    textAlign: "center",
    padding: "20px",
  },
  add__button: {
    padding: "57px",
  },
  button: {
    height: "56px",
    width: "56px",
  },
  helperText: {
    color: "#645E6F",
  },
  tableAbout: {
    background: "#111113",
    marginBottom: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "50px",
  },
  cell: {
    color: "white",
  },
  gridwrap: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  gridcard: {
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    color: "#645E6F",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    backgroundColor: "#111113",
    borderRadius: 10,
    height: 350,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  cardimg: {
    borderRadius: "50%",
    width: 130,
    height: 130,
    marginLeft: 65,
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  edit_button: {
    alignItems: "center",
    textTransform: "initial",
    marginLeft: 30,
    marginBottom: 15,
    width: 200,
    justifyContent: "center",
  },
  delete_button: {
    alignItems: "center",
    background: "#ff0000",
    color: "#fff",
    textTransform: "initial",
    marginLeft: 30,
    width: 200,
    justifyContent: "center",
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
}));

export default function AboutPage(props) {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (about === null) {
      setLoading(true);
      axios.get("https://be-mppl.herokuapp.com/api/about").then((res) => {
        setLoading(false);
        setAbout(res.data.about);
      });
    }
  }, [about]);

  return (
    <div className={classes.root}>
      <div className={classes.addAbout}>
        <h3 className={classes.h3}>Tentang Kami</h3>
        <div className={classes.descAbout}>
          <p className={classes.desc}>
            Anda dapat menambahkan deskripsi tim, waktu pengalaman kerja, jumlah total proyek yang berhasil dikerjakan
            dan total kerja sama client.
          </p>
        </div>
        <h4 className={classes.h4}>Informasi Kami</h4>
        <hr style={{ color: "#645E6F", height: 0.5 }} />
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "16px" }}>
            <CircularProgress />
          </div>
        ) : about ? (
          <TableContainer>
            <Table className={classes.tableAbout} style={{ tableLayout: "auto" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "white", fontWeight: "bold", width: "50%" }} align="left">
                    Nama Tim
                  </TableCell>
                  <TableCell style={{ color: "white", fontWeight: "bold", width: "50%" }} align="left">
                    Aksi
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={about._id}>
                  <TableCell className={classes.cell} align="left" style={{ width: "50%" }}>
                    {about.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="left" style={{ width: "50%" }}>
                    <Button
                      style={{
                        textTransform: "initial",
                        marginRight: "20px",
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() => history.push("/admin/tentang-kami/detail")}
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
                      onClick={() => history.push("/admin/tentang-kami/edit")}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className={classes.add__button} align="center">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => history.push("/admin/tentang-kami/add")}
            >
              <AddIcon />
            </Button>
            <p className={classes.p} align="center">
              Isi detail informasi
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
