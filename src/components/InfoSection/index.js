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

const InfoSection = ({id,
                      lightBg, 
                      imgStart, 
                      headLine,
                      lightText, 
                      darkText, 
                      description, 
                      buttonLabel, 
                      img, 
                      alt,
                      numberOf,
                      primary, 
                      dark, 
                      dark2
    }) => {
    return (
        <>
         <InfoContainer id={id}  lightBg={lightBg}>
             <InfoWrapper>
            <InfoRow imgStart= {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText }>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>

                        <PoinWrapper>
                            <InfoCard>
                                <Heading1 lightText={lightText }>{numberOf}</Heading1>
                                <InfoP>Tahun</InfoP>
                                <InfoPs>Pengalaman Kerja</InfoPs>
                            </InfoCard>
                            <InfoCard>
                                <Heading1 lightText={lightText }>{numberOf}</Heading1>
                                <InfoP>Total</InfoP>
                                <InfoPs>Projek Berhasil</InfoPs>
                            </InfoCard>
                            <InfoCard>
                                <Heading1 lightText={lightText }>{numberOf}</Heading1>
                                <InfoP>Total</InfoP>
                                <InfoPs>Kerjasama Client</InfoPs>
                            </InfoCard>
                        </PoinWrapper>

                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
        </>
    )
}

export default InfoSection
