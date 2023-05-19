import React from "react"
import Slider from "react-slick"

function Slide() {

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    row: 1,
    slidesPerRow: 1,
    responsive: [
      { breakpoint:992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      }
    ]
  }

  return(
      <Slider {...settings}>
        <img src="./img/burgers/hamburger-double.jpg" alt="burger double" />
        <img src="./img/burgers/hamburger-crafters.jpg" alt="burger delicious" />
        <img src="./img/burgers/hamburger-cheese.jpg" alt="burger cheese" />
        <img src="./img/burgers/hamburger-gourmet.jpg" alt="burger gourmet" />
        <img src="./img/burgers/hamburger-noir.jpg" alt="burger noir" />
        <img src="./img/burgers/hamburger-poulet.jpg" alt="burger poulet" />
      </Slider>
  )
}
export default Slide

