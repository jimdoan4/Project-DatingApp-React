import styled from 'styled-components'


export const MaleContainer = styled.div`
font-family: 'Be Vietnam', sans-serif;
font-family: 'Ubuntu', sans-serif;
}

.male-profile {
width: 14rem;
background-color: white;
margin: 10px;	
text-align: center;								
}

.male-img {
    max-height: 260px;
    max-width: 430px;
}

.interest-button {
background-color: white!important;
border: 1px solid white;
color: black!important;
font-size: 11px;
padding: 10px 26px 10px 26px;
text-transform: uppercase;
border-radius: 30px;
font-weight: bold;
letter-spacing: 1.3px;
}

.not-interested-button {
background-color: black!important;
border: 1px solid black;
color: white!important;
font-size: 11px;
padding: 12px 15px 12px 15px;
text-transform: uppercase;
border-radius: 30px;
font-weight: bold;
letter-spacing: 1.3px;
}

/* Iphone X */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .male-img {
   width: 155px;
   height: 220px;

}
}
`

