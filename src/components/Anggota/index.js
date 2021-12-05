import React, { Component, useState, useEffect} from "react";
import CardAnggota from "./CardAnggota";
import { Box, Button } from "@material-ui/core";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import axios from "axios";

const ReadMore = ({ children }) => {
  const member = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="member">
      {isReadMore ? member.slice(0, 2) : member}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <Box class="readmore" component="div">
            <Button class="rm-btn" startIcon={<KeyboardArrowDownRoundedIcon fontsize="large" />}>
              Tampilkan Lebih Banyak
            </Button>
          </Box>
        ) : (
          <Box class="readmore" component="div">
            <Button class="rm-btn" startIcon={<KeyboardArrowUpRoundedIcon fontsize="large" />}>
              Tampilkan Lebih Sedikit
            </Button>
          </Box>
        )}
      </span>
    </p>
  );
};

export default function Anggota () {
  const [memberData, setMember] = useState([]);

  useEffect(() => {  
      axios.get("https://be-mppl.herokuapp.com/api/members").then((response) => {
        console.log(response);
        setMember(response.data);
      });     
  }, [memberData]);

  //console.log(memberData);

  function formatDate(string){
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(string).toLocaleDateString('en-GB', options);
  } 

  return (
      <Box component="div" className="container-anggota">
        <h2>Anggota Kami</h2>
        <div className="anggota-wrapper">
          <ReadMore>
            {memberData.map((mem) => (
            <CardAnggota
              key={mem._id}
              img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"
              name={mem.name}
              role={mem.role}
              desc={mem.description}
              projtitle1={mem.projects[0].name}
              startproj1={formatDate(mem.projects[0].startDate)}
              endproj1={formatDate(mem.projects[0].endDate)}
              descproj1={mem.projects[0].description}
              worktitle1={mem.works[0].role}
              startwork1={formatDate(mem.works[0].startDate)}
              endwork1={formatDate(mem.works[0].endDate)}
              descwork1={mem.works[0].description}
              projtitle2={mem.projects[1].name}
              startproj2={formatDate(mem.projects[1].startDate)}
              endproj2={formatDate(mem.projects[1].endDate)}
              descproj2={mem.projects[1].description}
              worktitle2={mem.works[1].role}
              startwork2={formatDate(mem.works[1].startDate)}
              endwork2={formatDate(mem.works[1].endDate)}
              descwork2={mem.works[1].description}
              linkli={mem.linkedin}
            />
            ))}
          </ReadMore>
        </div>
      </Box>
    );
}
