import React from 'react'
import { Button } from '../ButtonElements'
import { 
    BtnWrap, 
    Column1, 
    Column2, 
    Heading, 
    Heading1,
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoRow,
    InfoP,
    InfoPs, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    TopLine,
    InfoCard,
    PoinWrapper 
  } from './InfoElements'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'


const InfoSection = ({id,
                      lightBg, 
                      imgStart,
                      lightText, 
                      darkText, 
                      img, 
                      alt,
    }) => {
    
    const [loading, setLoading] = useState(false);
    const [about, setAbout] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        axios.get("https://be-mppl.herokuapp.com/api/about")
        .then((res) => {
            setLoading(false);
            setAbout(res.data.about);
        });
    }, [about]);
    
    
    return (
        <>
         <InfoContainer id={id}  lightBg={lightBg} imgStart= {imgStart}>
            <ImgWrap>
                <Img src={img} alt={alt}/>
            </ImgWrap>
             <InfoWrapper>
            <InfoRow>
                    <Column1>
                        
                        <TextWrapper>
                            <Heading lightText={lightText }>{about.name}</Heading>
                            <Subtitle darkText={darkText}>{about.description}</Subtitle>
                        </TextWrapper>

                        <PoinWrapper>
                            <InfoCard>
                                <Heading1 lightText={lightText }>{about.experience}</Heading1>
                                <InfoP>Tahun</InfoP>
                                <InfoPs>Pengalaman Kerja</InfoPs>
                            </InfoCard>
                            <InfoCard>
                                <Heading1 lightText={lightText }>{about.project}</Heading1>
                                <InfoP>Total</InfoP>
                                <InfoPs>Projek Berhasil</InfoPs>
                            </InfoCard>
                            <InfoCard>
                                <Heading1 lightText={lightText }>{about.client}</Heading1>
                                <InfoP>Total</InfoP>
                                <InfoPs>Kerjasama Client</InfoPs>
                            </InfoCard>
                        </PoinWrapper>

                    </Column1>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
        </>
    )
}

export default InfoSection
