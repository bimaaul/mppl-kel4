import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Poppins',
    background: "#0D0C0F"
  },

  h3: {
    alignItems: 'center',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontweight: '700',
    padding: '18px',
    margin: '-20px 0px -10px 0',
  },

  add__testi: {
    background: '#111113',
    color: '#fff',
    borderRadius: '10px!important',
    margin: '20px 35px 35px 35px',
    justifyContent: 'center',
  },

  list__testi: {
    color: '#fff',
    background: '#111113',
    borderRadius: '10px!important',
    margin: '35px',
    paddingTop: '30px',
    minheight: '404px'
  },

  add__button: {
    padding: '57px'
  },

  button: {
    height: '56px',
    width: '56px',

  },
  table: {
    background: '#111113',
    marginBottom: '20px'
  },

  p: {
    color: "#645E6F"
  },

  cell: {
    borderBottom: "none",
    color: 'white',
  },

  trash_icon: {
    color: 'white',
    height: '150px',
    width: '150px',
    margin: '40px 0 15px 260px'
  },

  popup: {
    display: 'flex',
    justifycontent: 'center',
    alignitems: 'center',
  },

  popup_box: {
    display: 'flex',
    flexdirection: 'column',
    margin: 'auto',
    position: 'relative',
    width: '662px',
    height: '297px',
    background: '#1D1C21',
    boxShadow: '0px 0px 15px #1B0CA1',
    borderRadius: '10px',
  },

  top_row: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '700px',
    height: '500px',
    margin: '20px 30px',
    margin: '-30px 0px -30px 0px',
  },

  top_column: {
    flex: '50%',
  },

  closes_btn: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bolded',
    fontFamily: 'Poppins',
    color: '#644EEC',
    background: '#1D1C21',
    borderStyle: 'none',
    borderRadius: '1%',
    marginTop: '60px',
    marginBottom: '-90px',
    marginRight:' 0%',
    marginLeft: 'auto',
    transitionDuration: '0.4s',
    cursor: 'pointer',
  }


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

export default function TestimoniPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Tambahkan Testimoni</h3>
        <hr style={{ color: '#fff', height: 1 }} />
        <div className={classes.add__button} align="center">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => history.push("/admin/add_testimoni")}
          >
            <AddIcon />
          </Button>
          <p className={classes.p} align="center">Add new testimoni</p>
        </div>

      </div>
      <div className={classes.list__testi}>
        <h3 className={classes.h3}>Daftar Testimoni</h3>
        <hr style={{ color: '#fff', height: 1 }} />
        <TableContainer>
          <Table className={classes.table} aria-label="list__testi__table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'white' }} align="center">No</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Nama</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Jabatan</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.no}>
                  <TableCell className={classes.cell} align="center">{row.no}</TableCell>
                  <TableCell className={classes.cell} align="left">{row.nama}</TableCell>
                  <TableCell className={classes.cell} align="left">{row.jabatan}</TableCell>
                  <TableCell className={classes.cell} align="left">
                    <Button
                      style={{
                        textTransform: 'initial',
                        marginRight: '20px'
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() => history.push("/admin/detail_testimoni")}
                    >
                      Lihat Detail
                    </Button>
                    <Button
                      style={{
                        textTransform: 'initial',
                        marginRight: '20px'
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() => history.push("/admin/edit_testimoni")}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{
                        background: "#ff0000",
                        color: "#fff",
                        textTransform: 'initial',
                      }}
                      variant="contained"
                      onClick={handleOpen}
                    >
                      Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          className={classes.popup}
          open={open}
          onClose={handleClose}>
          <Box className={classes.popup_box}>
            <div className={classes.top_row}>
              <div className={classes.top_column}>
                <Button className={classes.closes_btn} onClick={handleClose}>X</Button>
                <DeleteOutlineOutlinedIcon className={classes.trash_icon}/>
                <h3 className={classes.h3}>Apakah anda yakin ingin menghapus?</h3>
                <Button
                    style={{
                      background: "#ff0000",
                      color: "#fff",
                      textTransform: 'initial',
                      marginTop: '20px',
                      marginLeft: '298px'
                    }}
                    variant="contained"
                    onClick= {handleClose}
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
};
