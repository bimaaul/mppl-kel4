import styled from 'styled-components'

export const InfoContainer= styled.div`
  color: #fff;
  background: ${({lightBg})=> (lightBg ? '#f9f9f9' : '#0A0A0A')};
  
 
`
export const InfoWrapper= styled.div`
// background-color: green;
  display: grid;
  z-index: 1;
  width:100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  padding-top: 30px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'`: `'col1 col2'`)};
  
  @media screen and (max-width: 768px){
    padding-top:0;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col col2'`: `'col1 col1' 'col2 col2'`)};
}
`

export const Column1= styled.div`
// background-color: blue;
  margin-bottom: 15px;
  padding: 0 0 0 25px;
  grid-area: col1;
`

export const Column2= styled.div`
// background-color: red;
  margin-bottom: 15px;
  grid-area: col2;
  justify-content: flex-end;
`
export const TextWrapper= styled.div`
  max-width: 440px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Heading= styled.h1`  
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText})=> (lightText ? '#fff' : '#000')};
  
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const Subtitle= styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText})=> (darkText ? '#010606' : '#fff')};
`

export const BtnWrap= styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap= styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img= styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`