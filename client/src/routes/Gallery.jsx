import React from "react";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import "../components/Gallery.css";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: '/images/gallery1.jpg'
    },
    {
      id: 2,
      imgSrc: '/images/gallery2.jpg'
    },
    {
      id: 3,
      imgSrc: '/images/gallery3.jpg'
    },
    {
      id: 4,
      imgSrc: '/images/gallery4.jpg'
    },
    {
      id: 5,
      imgSrc: '/images/gallery5.jpg'
    },
    {
      id: 6,
      imgSrc: '/images/gallery6.jpg'
    },
    {
      id: 7,
      imgSrc: '/images/gallery7.jpg'
    },
    {
      id: 8,
      imgSrc: '/images/gallery8.jpg'
    },
    {
      id: 9,
      imgSrc: '/images/gallery9.jpg'
    },
    {
      id: 10,
      imgSrc: '/images/gallery10.jpg'
    },
    {
      id: 11,
      imgSrc: '/images/gallery11.jpg'
    },
    {
      id: 12,
      imgSrc: '/images/gallery12.jpg'
    },
    {
      id: 13,
      imgSrc: '/images/gallery13.jpg'
    },
    {
      id: 14,
      imgSrc: '/images/gallery14.jpg'
    },
    {
      id: 15,
      imgSrc: '/images/gallery15.jpg'
    },
    {
      id: 16,
      imgSrc: '/images/gallery16.jpg'
    },
    {
      id: 17,
      imgSrc: '/images/gallery17.jpg'
    },
    {
      id: 18,
      imgSrc: '/images/gallery18.jpg'
    },
    {
      id: 19,
      imgSrc: '/images/gallery19.jpg'
    },
    {
      id: 20,
      imgSrc: '/images/gallery20.jpg'
    },
    {
      id: 21,
      imgSrc: '/images/gallery21.jpg'
    },
    {
      id: 22,
      imgSrc: '/images/gallery22.jpg'
    },
    {
      id: 23,
      imgSrc: '/images/gallery23.jpg'
    },
    {
      id: 24,
      imgSrc: '/images/gallery24.jpg'
    },
    {
      id: 25,
      imgSrc: '/images/gallery25.jpg'
    },
    {
      id: 26,
      imgSrc: '/images/gallery26.jpg'
    }
  ]
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg='images/gallery.avif'
        title="Gallery"
        btnClass="hide"
      />
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="gimage"/>
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt={item.imgSrc} style={{ width: '100%' }} />

            </div>
          )
        })}
      </div>

      <Footer />
    </>
  );
}

export default Gallery;