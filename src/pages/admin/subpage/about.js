import React, { useState } from 'react';
import { makeStyles, Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";

function createSkill(icon, title, desc) {
  return { icon, title, desc };
}

const dataSkill = [
  createSkill('link', "Mobile Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
];

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Poppins',
    backgroundColor: "#0D0C0F"
  },
  h3: {
    textAlign: 'left',
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: 'bolder',
    padding: '18px',
    margin: '-20px 0px -10px 0',
  },
  h4: {
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    padding: '18px',
    margin: '-20px 0px -10px 0',
  },
  descAbout: {
    backgroundColor: '#645E6F',
    color: 'white',
    textAlign: 'justify',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '3px',
    padding: '3px 20px',
    margin: '20px 0px 50px',
  },
  addAbout: {
    backgroundColor: '#111113',
    color: 'white',
    borderRadius: '10px!important',
    margin: '5px 0px',
    justifyContent: 'center',
    
  },
  aboutButton: {
    backgroundColor: '#111113',
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    backgroundColor: '#644EEC',
    color: 'white',
    height: '60px',
    width: '60px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#1D1C21',
      color: '#644EEC',
    },
  },
  helperText: {
    color: '#645E6F',
  },
  tableAbout: {
    // width: 'max-content',
    background: '#111113',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px',
  }, 
  cell: {
    // borderBottom: "true",
    // width: '500px',
    color: 'white',
  },
}));

function createData(namatim, aksi) {
  return { namatim, aksi };
}

const rows = [
  createData("Mamen Rider", ""),
];


export default function AboutPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      {/* <div className={classes.addAbout}>
        <h3 className={classes.h3}>Tentang Kami</h3>
        <div className={classes.descSection}>
          <p className={classes.desc}>Anda dapat menambahkan deskripsi tim, waktu pengalaman kerja, jumlah total proyek yang berhasil dikerjakan dan total kerja sama client.</p>
        </div>
        <h4 className={classes.h4}>Informasi Kami</h4>
        <hr style={{ color: '#645E6F', height: 0.5 }} />
        <div className={classes.aboutButton}>
          <Button
           className={classes.button}
           varient="contained"
           color="primary"
           onClick={() => history.push("/admin/add_tentangkami")}
           >
            <AddIcon />
          </Button>
          <p className={classes.helperText}>Isi Detail Informasi</p>
        </div>
      </div> */}
      <div className={classes.addAbout}>
        <h3 className={classes.h3}>Tentang Kami</h3>
        <div className={classes.descAbout}>
          <p className={classes.desc}>Anda dapat menambahkan deskripsi tim, waktu pengalaman kerja, jumlah total proyek yang berhasil dikerjakan dan total kerja sama client.</p>
        </div>
        <h4 className={classes.h4}>Informasi Kami</h4>
        <hr style={{ color: '#645E6F', height: 0.5 }} />
        <TableContainer >
            <Table className={classes.tableAbout} style={{ tableLayout: "auto" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: 'white', fontWeight: 'bold', width: '50%' }} align="left">Nama Tim</TableCell>
                        <TableCell style={{ color: 'white', fontWeight: 'bold', width: '50%' }} align="left">Aksi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.namatim}>
                      <TableCell className={classes.cell} align='left' style={{ width: '50%' }}>{row.namatim}</TableCell>
                      <TableCell className={classes.cell} align='left' style={{ width: '50%' }}>
                        <Button
                          style={{
                            textTransform: 'initial',
                            marginRight: '20px',
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => history.push("/admin/detail_testimoni")}
                          >Lihat Detail
                        </Button>
                        <Button
                          style={{
                          textTransform: 'initial',
                          marginRight: '20px',
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => history.push("/admin/detail_testimoni")}
                          >Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}                      
              </TableBody>
            </Table>
        </TableContainer>
      </div>
      {/* <div className={classes.addSkill}>
        <h3 className={classes.h3}>Keahlian Kami</h3>
        <Card className={classes.cardSkill}>
          <figure className={classes.cardIcon}>
            <img src={dataSkill.icon} alt="icon"></img>
          </figure>
          <p className={classes.cardTitle}>{dataSkill.title}</p>

        </Card>
      </div> */}
    </div>
  );
};

