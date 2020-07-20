import React from 'react';
import { DefaultStyles, Container } from './components/styledComponents/index';
import Main from './pages/main/main';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css'



  // const swiper = new Swiper('.swiper-container', {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // });

  AOS.init()

  const theme = {
    colorPrimary: "#2F89FC",
    colorSecondary: "#F5F5F5",
    colorDark: "#707070",
    colorSuccess: "#30E3CA",
    colorRed: "#E24E4E",
    colorPurple: "#E049EA",
    colorLight: "#F8F8FF",
    colorInfo: "#83C1FD",
    colorBg: "#322F55",
    font: {
      xlarge: "15rem",
      large: "5rem",
      medium: "3rem",
      small: "2.4rem",
      xsmall: "2.1rem",
      xxsmall: "2rem",

      mainFont: "Montserrat",
      extra: "Segoe UI",
      offSet: "Mongolian Baiti"
    },
    breakPoints: {
      bpLargest: "1700px", 
      bpxxLarge: "1500px", // 1550px
      bpxLarge: "69.375rem", // 1110px
      bpLarge: "56.25rem", //900px
      bpMedium: "43.75rem",  //700px
      bpSmall: "37.5rem",//600px
      bpxSmall: "400px"  
    }
  }

  function App() {
    return (

      <ThemeProvider theme={theme}>
        <DefaultStyles />
        <Container>
          <Main />
        </Container>
      </ThemeProvider>

    );
  }

  export default App;
