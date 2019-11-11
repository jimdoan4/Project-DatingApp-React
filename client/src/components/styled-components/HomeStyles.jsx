import styled from 'styled-components'

export const HomeContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Tinos:400,700&display=swap');
background-color: #8C6C79!important;
width: 100%;
height: 100%; 
overflow: hidden; 
font-family: 'Be Vietnam', sans-serif;
font-family: 'Ubuntu', sans-serif;
z-index: -1;
}

* {
  /* margin: 0; */
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
  background-color: #8C6C79!important;
  z-index: -1;
}

/* IMAGES
=========================== */
.img-wrapper01 {
  position: absolute;
  top: 120px;
  left: 200px;
}

.img-wrapper01 .img01 {
  background: url('https://image.businessinsider.com/5d5ae4cfcd9784562a7d9693?width=1100&format=jpeg&auto=webp') no-repeat;
  background-position: 35%;
  background-size: cover;
  height: 500px;
  width: 380px;
  opacity: 0;
  animation: image-appear 0.0001s linear forwards;
  animation-delay: 2.2s;
}

.img-wrapper02 {
  position: absolute;
  top: 0;
  left: 650px;
  color: white;
}

.img-wrapper02 .img02 {
  background-position: 130%;
  background-size: cover;
  height: 100vh;
  background-color: #8C6C79;
  width: 800px;
  opacity: 0;
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
  background: rgb(163, 124, 140);
  animation: block-appear 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 1.5s;
}

.img-wrapper02 .block {
  animation-delay: 1.8s;
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
  color: black;
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
    font-size: 1.2rem;
    text-align: center;
    background-color: #8C6C79;
    color: white!important;
    border: 1px solid #8C6C79;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 10px;
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
  background: url('https://imgix.bustle.com/uploads/shutterstock/2019/8/21/2c4a078b-3f9f-43a1-8c4c-6139ee46b149-shutterstock-1432454765.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70') no-repeat;
  background-position: 50%;
  background-size: cover;
  height: 200px;
  width: 300px;
}

    
`