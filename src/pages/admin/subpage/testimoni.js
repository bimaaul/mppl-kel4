import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Poppins',
  },

  h3: {
    alignItems: 'center',
    fontSize: '20px',
    fontweight: '700',
    padding: '18px',
    margin: '-20px 0px -10px 0',
  },

  add__testi: {
    background: '#111113',
    color: '#fff',
    borderRadius: '10px!important',
    margin: '35px',
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
    borderBottom:"none", 
    color: 'white',
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

const TestimoniPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.add__testi}>
        <h3 className={classes.h3}>Tambahkan Testimoni</h3>
        <hr style={{color: '#fff', height: 1}}/>
        <div className={classes.add__button} align="center">
          <Button
            className={classes.button}
            variant = "contained"
            color = "primary"
          >
            <AddIcon />
          </Button>
          <p className={classes.p} align = "center">Add new testimoni</p>
        </div>
        
      </div>
      <div className={classes.list__testi}>
        <h3 className={classes.h3}>Daftar Testimoni</h3>
        <hr style={{color: '#fff', height: 1}}/>
        <TableContainer>
          <Table className={classes.table} aria-label="list__testi__table">
            <TableHead>
              <TableRow>
                <TableCell style={{color: 'white'}} align="center">No</TableCell>
                <TableCell style={{color: 'white'}} align="left">Nama</TableCell>
                <TableCell style={{color: 'white'}} align="left">Jabatan</TableCell>
                <TableCell style={{color: 'white'}} align="left">Aksi</TableCell>
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
                      style = {{
                        textTransform: 'initial',
                        marginRight: '20px'
                      }}
                      variant = "contained"
                      color = "primary"
                    >
                        Lihat Detail
                    </Button>
                    <Button
                      style = {{
                        textTransform: 'initial',
                        marginRight: '20px'
                      }}
                      variant = "contained"
                      color = "primary"
                    >
                        Edit
                    </Button>
                    <Button
                      style = {{
                        background: "#ff0000",
                        color: "#fff",
                        textTransform: 'initial'                       
                      }}
                      variant = "contained"
                    >
                        Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TestimoniPage;
