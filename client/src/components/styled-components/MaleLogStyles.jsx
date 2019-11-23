import styled from 'styled-components'

export const MaleLogContainer = styled.div ` 
padding: 0;
}

.man-form {
    max-width: 500px;
    max-height: 74vh;
    margin-top: 30px;
    padding: 15px;
    border-radius: 15px;
    justify-content: center;
}

.man-form .form-label {
    font-size: 16px;
}

.form-control {
    margin: -5px 0px!important;
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
@media only screen and (min-device-width : 375px) and (max-device-height : 812px) and (-webkit-device-pixel-ratio : 3) {
    .man-form {
       width: 314px!important;
       height: 61.5vh;
        padding: 10px 13px;
        margin-top: 20px;
    }
}

`