import styled, { keyframes, css } from 'styled-components'


export const FooterContainer = styled.div`

.container{
    max-height: 14vh;
}

.contact{
    padding-bottom: 25px;
}

.contact h4{
    font-size: 15px;
    font-weight: normal;
    margin-bottom: 25px;
}

.contact p{
    font-size: 14px;
    line-height: 28px;
}

.contact a{
    font-size: 14px;
    width: 100%;
    display: inline-block;
}

.textField{
    border: 1px solid #e2e2e2;
    height: 40px;
    padding: 10px;
    outline: none;
    float: left;
    width: 70%;
    font-size: 14px;
}

.contact .submitBtn{
    width: 100px;
    height: 40px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    background: #e2e2e2;
    border: none;
}

.copyright{
    border-top: 1px solid #e2e2e2;
    padding: 15px 0;
    font-size: 12px;
    color: grey;
    max-height: 4vh!important;
}



`