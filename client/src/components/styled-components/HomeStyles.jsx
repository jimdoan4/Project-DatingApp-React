import styled from 'styled-components'

export const HomeContainer = styled.div`

.home-body {
  font-family: 'Be Vietnam', sans-serif;
  font-family: 'Ubuntu', sans-serif;
  color: #fff;
  height: 100vh;
  overflow: hidden;
  background-color: #8C6C79!important;
}

* {
  margin: 0; 
  padding: 0;
  box-sizing: 0;
}

ul {
  list-style: none;
}

.bg {
  position: absolute;
  left: 0%;
  width: 0%;
  height: 100%;
  background: #8C6C79!important;
  background-size: cover;
  z-index: -1;
}

/* SOCIAL MEDIA
=========================== */
.media {
  position: absolute;
  top: 350px;
  right: -90px;
  transform: rotate(-90deg);
}

.media ul li {
  display: inline-block;
  padding: 0 20px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  z-index: 1;
}

/* IMAGES
=========================== */
.img-wrapper01 {
  position: absolute;
  top: 120px;
  left: 160px;
  opacity: .85;
}

.img-wrapper01 .img01 {
  background: url('https://image.businessinsider.com/5d5ae4cfcd9784562a7d9693?width=1100&format=jpeg&auto=webp') no-repeat;
  background-position: 15%;
  opacity: .85;
  height: 70vh;
  width: 370px;
  opacity: 0;
  animation: image-appear 0.0001s linear forwards;
  animation-delay: 2.2s;
}

.img-wrapper02 {
  position: absolute;
  top: 0;
  left: 682px;
  color: white;
  opacity: .9;
}

.img-wrapper02 .img02 {
  background: url('https://image.businessinsider.com/5d5ae4cfcd9784562a7d9693?width=1100&format=jpeg&auto=webp') no-repeat;
  background-position: 95%; 
  height: 100vh;
  background-color: white;
  width: 556px;
  opacity: .9;
  animation: image-appear 0.0001s linear forwards;
  animation-delay: 2.4s;
  color: white!important;
}

@keyframes image-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* BLOCKS
=========================== */
.block {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: rgb(163, 124, 140)!important;
  animation: block-appear 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 1.5s;
}

.img-wrapper02 .block {
  animation-delay: 2.5s;
}

@keyframes block-appear {
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}


/* TEXT
=========================== */
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  width: 1000px;
}

.text h1 {
  font-size: 100px;
  font-family: 'Be Vietnam', sans-serif;
  font-family: 'Ubuntu', sans-serif;
  font-weight: lighter;
  letter-spacing: 5px;
  position: relative;
  overflow: hidden;
  height: 120px;
  width: 100%;
  color: white;
}

.text h1 .hidetext {
  position: absolute;
}

.text p {
  font-size: 35px;
  font-family: 'Be Vietnam', sans-serif;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: lighter;
  position: relative;
  overflow: hidden;
  height: 40px;
  width: 100%;
}

.text p .hidetext {
  position: absolute;
}

.join-text {
    position: relative;
    overflow: hidden;
    font-size: 1.1rem;
    text-align: center;
    background-color: black;
    color: white!important;
    border: 1px solid black;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 21px;
    padding-bottom: 21px;
    border-radius: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    text-decoration: none;
}

.join-text:hover {
    background-color: white!important;
    color: black!important;
    border: 1px solid white;
}

/* DESC
=========================== */
.desc {
  position: absolute;
  left: 200px;
  bottom: 70px;
  display: flex;
}

.desc ul {
  margin-right: 50px;
}

.desc ul li {
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 500;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
}

.desc p {
  width: 250px;
  font-size: 10px;
  font-weight: 300;
  line-height: 2;
}

/* SCROLLDOWN
=========================== */
.scrolldown {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  position: absolute;
  bottom: 110px;
  left: -60px;
  transform: rotate(-90deg);
}

.scrolldown::before {
  content: "";
  border: 1px solid #fff;
  width: 100px;
  margin: 0 20px 0 0;
  transform: translateY(-3px);
  opacity: .5;
  display: inline-block;
}


/* BOTTOMNAV
=========================== */
.bottomnav {
  position: absolute;
  bottom: 30px;
  right: 50px;
}

.bottomnav .next {
  font-size: 10px;
  letter-spacing: 8px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.bottomnav .next::after {
  content: "";
  display: inline-block;
  border: 1px solid #fff;
  width: 148px;
  margin: 0 0 0 20px;
  transform: translateY(-3px);
}

.bottomnav .nav {
  display: flex;
}

.bottomnav ul {
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottomnav ul li {
  padding: 30px 20px;
  font-size: 25px;
}

.bottomnav-img {
  background: url('https://www.emirates247.com/polopoly_fs/1.520896.1452278089!/image/image.png') no-repeat;
  background-position: 50%;
  background-size: cover;
  height: 200px;
  width: 300px;
  box-shadow: 0px 1px 1px .5px #b3b3b3;
}

    
`