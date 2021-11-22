import React, {Component, useState} from 'react';
import CardAnggota from './CardAnggota';
import { Box, Button } from '@material-ui/core';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

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
        {isReadMore ? 
        <Box class="readmore" component="div">
          <Button class="rm-btn" startIcon={<KeyboardArrowDownRoundedIcon fontsize="large"/>}>
            Tampilkan Lebih Banyak  
          </Button>
        </Box> : 
        <Box class="readmore" component="div">
          <Button class="rm-btn" startIcon={<KeyboardArrowUpRoundedIcon fontsize="large"/>}>
            Tampilkan Lebih Sedikit  
          </Button>
        </Box>}
      </span>
    </p>
  );
};

export default class Anggota extends Component {
  render(){
    return (
      <Box component="div" className="container-anggota">
          <h2>Anggota Kami</h2>
          <div className="anggota-wrapper">
            <ReadMore>
              <CardAnggota
                img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"                
                name="Anonymous 1"
                role="Full-stack Developer"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle1="Project 1"
                startproj1="01 Desember 2021"
                endproj1="01 Januari 2022"
                descproj1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle1="Work 1"
                startwork1="01 Desember 2021"
                endwork1="01 Januari 2022"
                descwork1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle2="Project 2"
                startproj2="01 Desember 2021"
                endproj2="01 Januari 2022"
                descproj2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle2="Work 2"
                startwork2="01 Desember 2021"
                endwork2="01 Januari 2022"
                descwork2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                linkli="https://www.linkedin.com/"
              />
              <CardAnggota
                img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"
                name="Anonymous 2"
                role="Front-end Developer"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle1="Project 1"
                startproj1="01 Desember 2021"
                endproj1="01 Januari 2022"
                descproj1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle1="Work 1"
                startwork1="01 Desember 2021"
                endwork1="01 Januari 2022"
                descwork1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle2="Project 2"
                startproj2="01 Desember 2021"
                endproj2="01 Januari 2022"
                descproj2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle2="Work 2"
                startwork2="01 Desember 2021"
                endwork2="01 Januari 2022"
                descwork2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                linkli="https://www.linkedin.com/"
              />
              <CardAnggota
                img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"                
                name="Anonymous 3"
                role="Back-end Developer"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle1="Project 1"
                startproj1="01 Desember 2021"
                endproj1="01 Januari 2022"
                descproj1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle1="Work 1"
                startwork1="01 Desember 2021"
                endwork1="01 Januari 2022"
                descwork1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle2="Project 2"
                startproj2="01 Desember 2021"
                endproj2="01 Januari 2022"
                descproj2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle2="Work 2"
                startwork2="01 Desember 2021"
                endwork2="01 Januari 2022"
                descwork2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                linkli="https://www.linkedin.com/"
              />
              <CardAnggota
                img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"
                name="Anonymous 4"
                role="Database Engineer"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle1="Project 1"
                startproj1="01 Desember 2021"
                endproj1="01 Januari 2022"
                descproj1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle1="Work 1"
                startwork1="01 Desember 2021"
                endwork1="01 Januari 2022"
                descwork1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                projtitle2="Project 2"
                startproj2="01 Desember 2021"
                endproj2="01 Januari 2022"
                descproj2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                worktitle2="Work 2"
                startwork2="01 Desember 2021"
                endwork2="01 Januari 2022"
                descwork2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
                linkli="https://www.linkedin.com/"
              />
            </ReadMore>
          </div>
      </Box>
    );
  }
}