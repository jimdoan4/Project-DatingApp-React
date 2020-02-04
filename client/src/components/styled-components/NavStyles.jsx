import styled from 'styled-components'

export const NavContainer = styled.div`
a,a:hover{
    text-decoration: none;
    color: #000;
    
}

header .navbar{
    background-color: transparent !important;
    padding: 0;
    height: 80px;
    width: 100%;
}

header .navbar-brand{
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 5px;
}

header .navbar-nav .nav-link{
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 25px!important;
}

.navbar-icon {
    color: black;
    font-size: 25px;
}


`