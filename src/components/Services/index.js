import React from 'react'
import Icon1 from './icon1.svg'
import Icon2 from './icon2.svg'
import Icon3 from './icon3.svg'
import Icon4 from './icon4.svg'
import ModalApk from './Modal/modalapk'
import ModalDsn from './Modal/modaldesain'
import ModalVid from './Modal/modalvideo'
import ModalWeb from './Modal/modalweb'
import { 
  ServicesCard, 
  ServicesContainer, 
  ServicesH1,
  ServicesH2,
  ServiceP,
  ServicesP,
  ServicesText,
  ServicesIcon, 
  ServicesWrapper 
} from './ServicesElements'

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesText>
          <ServicesH1>Keahlian Kami</ServicesH1>
          <ServiceP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Egestas mauris ut pellentesque tincidunt pellentesque elit pharetra eget vivamus. 
                    Posuere massa, gravida mauris risus elit velit ut proin ultricies. 
                    Libero egestas sociis volutpat convallis ridiculus molestie malesuada. 
                    Elementum erat diam risus non id dolor, gravida ipsum. Dictum facilisis et congue duis egestas nec eu. 
                    Sed porttitor suspendisse velit nunc vitae vulputate vestibulum, porttitor.</ServiceP>
        </ServicesText>
      
        <ServicesWrapper>
          
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Pengembangan Aplikasi</ServicesH2>
            <ModalApk />
          </ServicesCard>
  
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Pengembangan Website</ServicesH2>
            <ModalWeb />
          </ServicesCard>
  
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Pengeditan Video</ServicesH2>
            <ModalVid />
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon4}/>
            <ServicesH2>Desain Tampilan Web dan Aplikasi</ServicesH2>
            <ModalDsn />
          </ServicesCard>
  
        </ServicesWrapper>
        
      </ServicesContainer>
    )
  }
  
  export default Services