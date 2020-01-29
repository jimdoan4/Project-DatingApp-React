import styled from 'styled-components'

export const HomeContainer = styled.div`

.home-body-container {
height: 100vh!important;
}

img {
    width: 100%;
    box-shadow: 1px 3px 7px 1px #b3b3b3;
}

.home-img {
    padding: 25px 0;
}

.home-img h2{
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 1px;
}

.home-img h2 span{
    float: right;
    padding: 5px;
    background-color: #f2f2f2;
}

.home-img h4{
    font-size: 14px;
    color: #bdbdbd;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Media for Iphone X */
@media only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) {
    .col-md-12 img {
        height: 160px;
    }
}


    
`