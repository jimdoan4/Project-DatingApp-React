import styled, { keyframes, css } from 'styled-components'

export const UserLogContainer=styled.div` 
.woman-form {
    max-width: 40vw;
    max-height: 74vh;
    margin-top: 20px;
    padding: 25px;
    border-radius: 15px;
    justify-content: center;
}

.register-button {
    padding: 12px 22px 12px 22px;
    margin-top: 9px;
    background-color: black!important;
border-color: black;
color: white!important;
border-radius: 10px;
text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1.5px;
  font-weight: bold;
}

.register-button:hover {
    background-color: white!important;
border-color: white;
color: black!important;
}


/* Media for Iphone X */
@media only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) {
    .woman-form {
        width: 84vw;
        height: 65vh;
        padding:15px;
        margin-top: 20px;

    }
}

`