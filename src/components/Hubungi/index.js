import React, { Component } from 'react';
import './Hubungi.css';

export default class Hubungi extends Component{
    render(){
        return (
            <div className="container-hubungi">
                <h2>Hubungi Kami</h2>
                <h3>Silahkan isi form di bawah ini dan kami akan membalas pesanmu melalui email. Silahkan cek email secara berkala selama maksimal 3 hari setelah form dikirimkan. Jangan lupa cek spam untuk berjaga-jaga.</h3>
                <div className="hubungi-wrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus.</p>
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
            </div>
        );
    }
}