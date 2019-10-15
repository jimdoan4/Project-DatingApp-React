import styled, { keyframes, css } from 'styled-components'


export const HomeContainer = styled.div`
font-family: 'Be Vietnam', sans-serif;
font-family: 'Ubuntu', sans-serif;
color: white;
}

/* Center Join Button */
.overlay-desc {
    background: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.join-headline {
    display: flex;
    flex-direction: column;
}

.join-text {
    font-size: 1.5rem;
    text-align: center;
    background-color: #802139;
    color: white!important;
    border: 1px solid #802139;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 1px 1px #b3b3b3;
    text-decoration: none;
}


.join-text:hover {
    background-color: #802139!important;
    color: white!important;
    border: 1px solid #802139;
}

/* Background Image */
.home-img-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* this prevents link from working */
    /* pointer-events: none; */
    overflow: hidden;
}

.home-img-wrapper img {
    width: 100vw;
    height: 40.25vw;
    min-height: 100vh;
    min-width: 87.77vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Media for Iphone X */
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 
        .join-text {
    font-size: 1.2rem;
}
    }
`