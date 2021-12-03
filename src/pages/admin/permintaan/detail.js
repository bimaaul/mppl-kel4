import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Loading from "../../../components/Loading";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
  },

  h3: {
    alignItems: "center",
    fontSize: "20px",
    fontweight: "700",
    padding: "18px",
    margin: "-20px 0px -10px 0",
  },

  add__permintaan: {
    background: "#111113",
    color: "#fff",
    borderRadius: "10px!important",
    margin: "20px 40px 35px 35px",
    justifyContent: "center",
  },

  h5: {
    alignItems: "left",
    fontSize: "26px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    margin: "20px 35px 35px 35px",
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

  form: {
    marginTop: "30.7px",
    marginLeft: "-325px",
    justifyContent: "center",
  },

  input: {
    color: "#DCD4E7",
    fontFamily: "Poppins",
  },

  label: {
    color: "#DCD4E7",
  },

  add__button: {
    padding: "57px",
  },

  btn: {
    backgroundColor: "#644EEC",
    color: "white",
    fontFamily: "Poppins",
    marginBottom: "30px",
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
  table: {
    // margin: '0 60px 30px 60px'
  },
  // tableHead: {
  //     display:"flex",
  //     flexDirection:"column",
  // },
  tableBody: {
    display: "flex",
    alignItems: "center",
    borderBottom: "none",
  },
  tableRow: {
    display: "flex",
    flexDirection: "column",
  },
  tableCellJudul: {
    borderBottom: "none",
    color: "#fff",
    align: "left",
    fontFamily: "Poppins",
    fontWeight: "bold",
    width: 250,
  },
  tableCellIsi: {
    borderBottom: "none",
    color: "#fff",
    align: "left",
    fontFamily: "Poppins",
  },
}));
const DetailPermintaanPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({});
  const [user] = useContext(UserContext);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://be-mppl.herokuapp.com/api/requests/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setRequest(res.data.request);
      })
      .catch((err) => console.log(err.response.message));
  }, [id, user.token]);

  const tableTitle = ["Name", "Nomor Handphone", "Alamat Email", "Deskripsi Permintaan"];

  return (
    <div className={classes.root}>
      <Box mb={3}>
        <h5 className={classes.h5}>Detail Permintaan</h5>
      </Box>
      <div className={classes.add__permintaan}>
        <h3 className={classes.h3}>Form Permintaan</h3>
        <hr style={{ color: "#fff", height: 1 }} />
        {loading ? (
          <Loading />
        ) : (
          <Box p={7}>
            <Grid container className={classes.table}>
              <Grid item xs={4}>
                {tableTitle.map((title) => (
                  <Box mb={4}>
                    <Typography style={{ fontFamily: "Poppins", fontWeight: "bold" }}>{title}</Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={8}>
                <Typography style={{ marginBottom: "32px", fontFamily: "Poppins" }}>{request.name}</Typography>
                <Typography style={{ marginBottom: "32px", fontFamily: "Poppins" }}>{request.phone}</Typography>
                <Typography style={{ marginBottom: "32px", fontFamily: "Poppins" }}>{request.email}</Typography>
                <Typography style={{ marginBottom: "32px", fontFamily: "Poppins" }}>{request.message}</Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </div>
    </div>
  );
};

export default DetailPermintaanPage;
