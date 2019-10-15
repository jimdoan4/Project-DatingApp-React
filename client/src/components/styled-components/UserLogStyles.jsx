import styled, { keyframes, css } from 'styled-components'

export const UserLogContainer=styled.div` 
.woman-form {
    width: 36rem;
    height: 41.4rem;
    padding-top: 35px;
    margin-top: 20px;
}

.register-button {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 9px;
    background-color: #802139;
    border-color: #802139;
    color: white;

}

/* Media for Iphone X */
@media only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) {
    .woman-form {
        width: 21rem;
        height: 39.4rem;
        padding-top: 35px;
        margin-top: 20px;

    }
}

`