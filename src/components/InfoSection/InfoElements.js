import styled from 'styled-components'

export const InfoContainer= styled.div`
  color: #fff;
  background: ${({lightBg})=> (lightBg ? '#f9f9f9' : '#0A0A0A')};
 
`
export const InfoWrapper= styled.div`
  width:100%;
`

export const InfoRow = styled.div`
  align-content: flex-end;
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'`: `'col1 col2'`)};
}
`

export const Column1= styled.div`
  //background-color: blue;
  //margin-top: 30px;
  margin-bottom: 15px;
  padding: 0 0 0 10%;
  grid-area: col1;
  width: 100%;
`
export const TextWrapper= styled.div`
  position: relative;
  margin-bottom: 46px;
  padding-top: 30px;
`

export const PoinWrapper= styled.div`
  position: relative;
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: flex-start;
  align-item: center;
  grid-gap: 0px;
  max-width: 100%;
`

export const InfoCard= styled.div`
  //background: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  border-radius: 10px;
  max-width: 180px;
  max-height: 200px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
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

export const Heading1= styled.h1`
  color: #644EEC;  
  font-size: 42px;
  font-weight: 700;
  margin-bottom: -20px;
  margin-top: -5px;
`

export const Subtitle= styled.p`
  max-width: 688px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
  color: ${({darkText})=> (darkText ? '#010606' : '#fff')};
`

export const InfoP= styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-bottom: -20px;
`

export const InfoPs= styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
`

export const BtnWrap= styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap= styled.div`
  position: absolute;
  float:right;
  right: 0px;
  max-width: 640px;
  grid-area: img;
  height: 200%;
  justify-content: flex-end;

  @media (max-width: 756px) {
      display: none;
  }
`

export const Img= styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  align-items: right;
`