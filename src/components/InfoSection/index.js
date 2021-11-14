import React from 'react'
import { Button } from '../ButtonElements'
import { 
    BtnWrap, 
    Column1, 
    Column2, 
    Heading, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    TopLine 
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
