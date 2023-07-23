import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import Footer from './Footer'

const pic1 = 'images/sports1.png'
const pic2 = 'images/sports2.jpg'
const pic3 = 'images/sports3.png'
const pic4 = 'images/sports4.jpg'
const pic5 = 'images/sports5.jpg'
const pic6 = 'images/sports6.jpg'
const pic7 = 'images/sports7.jpg'
const pic8 = 'images/sports8.jpg'
const pic9 = 'images/sports9.JPG'
const pic10 = 'images/sports10.jpg'
const pic11 = 'images/sports11.jpg'
const pic12 = 'images/sports12.jpg'
const pic13 = 'images/sports13.jpeg'
const pic14 = 'images/sports14.jpg'


export default function Sports() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="images\sports0.avif"
        title="Sports"
        text="Playing a sport starts out as a means of fun and recreation; but,
         somewhere along the way, in the midst of all the fun, we realize that sports
          can often be a metaphor for achieving success, because of the lessons it teaches 
          us about life. Sports motivational quotes, thus, naturally tend to help us shed our 
          self-pity and inspire us to do better."
      />
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-100" alt={pic1}></img>
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100" alt={pic2}></img>
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt={pic3}></img>
          </div>
          <div class="carousel-item">
            <img src={pic4} class="d-block w-100" alt={pic4}></img>
          </div>
          <div class="carousel-item">
            <img src={pic5} class="d-block w-100" alt={pic5}></img>
          </div>
          <div class="carousel-item">
            <img src={pic6} class="d-block w-100" alt={pic6}></img>
          </div>
          <div class="carousel-item">
            <img src={pic7} class="d-block w-100" alt={pic7}></img>
          </div>
          <div class="carousel-item">
            <img src={pic8} class="d-block w-100" alt={pic8}></img>
          </div>
          <div class="carousel-item">
            <img src={pic9} class="d-block w-100" alt={pic9}></img>
          </div>
          <div class="carousel-item">
            <img src={pic10} class="d-block w-100" alt={pic10}></img>
          </div>
          <div class="carousel-item">
            <img src={pic11} class="d-block w-100" alt={pic11}></img>
          </div>
          <div class="carousel-item">
            <img src={pic12} class="d-block w-100" alt={pic12}></img>
          </div>
          <div class="carousel-item">
            <img src={pic13} class="d-block w-100" alt={pic14}></img>
          </div>
          <div class="carousel-item">
            <img src={pic14} class="d-block w-100" alt={pic14}></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Footer />

    </>
  )
}
