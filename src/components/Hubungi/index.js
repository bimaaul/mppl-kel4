import { TextField } from '@material-ui/core';
import { Box, maxWidth } from '@mui/system';
import React, { Component } from 'react';
import './Hubungi.css';
import { withStyles } from "@material-ui/core/styles";

// const styles = {
//   root: {
//     background: "#131216"
//   },
//   input: {
//     color: "#644EEC"
//   }
// };

export default class Hubungi extends Component{
    render(){
        const { classes } = this.props;
        return (
            <Box class="container-hubungi" sx={{ flexDirection: 'column', maxWidth: 1316}}>
                <h2>Hubungi Kami</h2>
                <h3>Silahkan isi form di bawah ini dan kami akan membalas pesanmu melalui email. Silahkan cek email secara berkala selama maksimal 3 hari setelah form dikirimkan. Jangan lupa cek spam untuk berjaga-jaga.</h3>
                <div class="hubungi-wrapper">
                    <div class="form-wrapper">
                        <Box
                         component="form"
                         sx={{
                             '& > :not(style)': { m: 5, width: '700px' },
                         }}
                         noValidate
                         autoComplete="off"
                        >
                            <TextField 
                             id="name" 
                             label="Nama" 
                             variant="outlined"
                             required
                             InputProps={{
                                // className: classes.input
                             }}
                            />
                        </Box>
                    </div>
                    {/* <div class="row">
                        <div className="form-input-wrapper" key={i}>
                        <input
                            type="text"
                            value={field.nama}
                            className="form-input"
                            placeholder="Nama"
                            label={field.nama}
                            onChange={e => handleChangeNama(i, e)}
                            autoFocus={true}
                        />
                        </div>
                        <div className="form-input-wrapper" key={i}>
                        <input
                            value={field.nomorhp}
                            className="form-input"
                            type="text"
                            placeholder="Nomor Handphone"
                            label={field.nomorhp}
                            onChange={e => handleChangeNohp(i, e)}
                        />
                        </div>
                        <div className="form-input-wrapper" key={i}>
                        <input
                            value={field.email}
                            className="form-input"
                            type="email"
                            placeholder="Email"
                            label={field.email}
                            onChange={e => handleChangeEmail(i, e)}
                        />
                        </div>
                        <div className="form-input-wrapper" key={i}>
                        <input
                            value={field.pesan}
                            className="form-input"
                            type="text"
                            placeholder="Kirim pesan atau maksud Anda menghubungi kami."
                            label={field.pesan}
                            onChange={e => handleChangePesan(i, e)}
                        />
                        </div>
                    </div> */}
                </div>
            </Box>
        );
    }
}