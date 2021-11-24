import styled from 'styled-components'

export const ServicesContainer = styled.div`  
  max-height: 2000px;
  display: flex;
  flex-direction:column;
  align-items:center;
  background: #0D0C0F;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    max-height: 2000px;
  }
`

export const ServicesText= styled.div`
  //background-color: blue;
  margin-top: 20px;
  display: grid;
  width:100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  }
`

export const ServicesWrapper= styled.div`
  //background-color: blue;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items:center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`


export const ServicesCard= styled.div`
  background: #0D0C0F;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px 30px 10px 30px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon= styled.img`
  height: 160px;
  width: 160px;
  justify-content: center;
  align-items: center;
`

export const ServicesIcon1= styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: -50px;
  margin-top: -15px;
  margin-left: 220px;
`

export const ServicesH1= styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesH2= styled.h2`
  max-width: 180px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ServicesP= styled.p`
  color: #644EEC;
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  &:active {
    color: #0C046B;
  }

  &:hover{
    color: #B1A1FB;
    transition: 0.2s ease-in-out;
  }
`
export const ServiceP= styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
`

