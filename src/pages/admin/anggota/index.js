import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/box";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core/";
import img1 from "../../../assets/profil.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    background: "#0D0C0F",
    display: "grid",
  },

  h3: {
    alignItems: "center",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontweight: "700",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },

  h4: {
    alignItems: "center",
    fontSize: "16px",
    fontFamily: "Poppins",
    fontweight: "700",
    padding: "18px",
    marginBottom: -20,
  },

  add__anggota: {
    color: "#fff",
    borderRadius: "10px!important",
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
    marginTop: 30,
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
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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

  gridwrap: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  gridcard: {
    alignItems: "center",
    justifyContent: "center",
  },

  card1: {
    marginLeft: 30,
    marginBottom: 20,
    backgroundColor: "#111113",
    borderRadius: 10,
    height: 368,
    width: 294,
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
}));

function createData(no, nama, jabatan, aksi) {
  return { no, nama, jabatan, aksi };
}

const rows = [
  createData(1, "Ali Naufal Ammarullah", "CTO Mamen", ""),
  createData(2, "Ali Naufal Ammarullah", "CTO Mamen", ""),
  createData(3, "Ali Naufal Ammarullah", "CTO Mamen", ""),
  createData(4, "Ali Naufal Ammarullah", "CTO Mamen", ""),
];

export default function AnggotaPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = [
    { nama: "Ali Naufal Ammarullah", job: "Mobile Developer & QA" },
    { nama: "Mutia Marcha Fatika", job: "Mobile Developer & QA" },
    { nama: "Bima Aulia", job: "Mobile Developer & QA" },
    { nama: "Arya Arminata", job: "Mobile Developer & QA" },
  ];

  return (
    <div className={classes.root}>
      <Grid className={classes.gridwrap} container spacing={0} rowSpacing={1} columnSpacing={{ xs: 4, sm: 8, md: 12 }}>
        <Grid className={classes.gridcard} item xs={2} sm={4} md={4}>
          <Card className={classes.card1}>
            <CardContent>
              <h3 className={classes.h3}>Tambahkan Anggota</h3>
              <hr style={{ color: "#fff", height: 1 }} />
              <div className={classes.add__button} align="center">
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => history.push("/admin/add_anggota")}
                >
                  <AddIcon />
                </Button>
                <p className={classes.p} align="center">
                  Tambah Anggota
                </p>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {data.map((elem) => (
          <Grid item xs={2} sm={4} md={4} key={data.indexOf(elem)}>
            <Card className={classes.card1}>
              <CardContent>
                <CardMedia className={classes.cardimg} component="img" height="140" src={img1} alt="profil picture" />
                <h3 className={classes.h4}> {elem.nama} </h3>
                <p className={classes.p}> {elem.job} </p>
                <Button
                  className={classes.edit_button}
                  variant="contained"
                  color="primary"
                  onClick={() => history.push("/admin/edit_anggota")}
                >
                  Edit
                </Button>
                <Button className={classes.delete_button} variant="contained" onClick={handleOpen}>
                  Hapus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
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
                  onClick={handleClose}
                >
                  Hapus
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}
