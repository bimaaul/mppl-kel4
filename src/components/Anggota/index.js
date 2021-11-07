import React, {Component} from 'react'
import CardAnggota from './CardAnggota'

export default class Anggota extends Component {
  render(){
    return (
      <div className="container-anggota">
          <h2>Anggota Kami</h2>
          <div className="anggota-wrapper">
            <CardAnggota
              img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"                name="Anonymous 1"
              role="Full-stack Developer"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
              expwork="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
              expproj="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
            />
            <CardAnggota
              img="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar-300x300.png"
              name="Anonymous 2"
              role="Full-stack Developer"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
              expwork="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
              expproj="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus."
            />
          </div>
      </div>
    );
  }
}