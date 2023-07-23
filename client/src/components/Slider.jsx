import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SliderStyle.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className='review-back'>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/surya.jpeg" alt="review" />
              <p className="card-main"><strong>Enchanting Campus Harmony: A Haven of Academic Brilliance and Natural Beauty</strong><br></br>
                This college's picturesque campus offers a harmonious blend of architectural splendor and natural beauty.
                The idyllic surroundings, adorned with lush greenery, create a serene atmosphere for learning. Inside,
                cutting-edge facilities and passionate professors inspire academic brilliance. The vibrant campus life
                nurtures creativity and encourages personal growth. From its captivating architecture to its commitment to
                excellence, this college is a true haven for students seeking a beautiful and enriching educational experience.</p>
              <p className="card-footer">Surya Majumder</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/swapnonil.jpeg" alt="review" />
              <p className="card-main"><strong>Proud to Be a HITIAN</strong><br></br>
                As far as I know, students are eligible for campus placement after the 7th semester. Companies such as TCS, Wipro,
                Berger Paints, and Infosys visit the campus during the college placement drive. It was one of the few colleges of Bengal
                which could place students in the time of covid with an avg package of 5LPA. Last year many of our seniors got interns
                from product-based companies like Amazon, Goldman Sachs, etc, and ultimately got PPO's.<br></br>
              </p>
              <p className="card-footer">Swapnonil Acharyya</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/saikat.jpeg" alt="review" />
              <p className="card-main"><strong>Life Like IIT In HIT</strong><br></br>
                Games And Sports Are Promoted In Our College, Faculty Is Very Supportive And Helping,
                They Are Always Ready To Help Us, Campus Is Very Big And It Has A Lot Of Greenery
                Placements come around the 7th semester in the college. Every final-year student is eligible for placement.
                We have good placement scores as compared to other private colleges in West Bengal. Companies like TCS,
                Wipro, EY, Deloitte, LTMintree, etc offer campus placement to students at our campus. average placement is around 400000</p>
              <p className="card-footer">Saikat Karar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/tathagata1.jpg" alt="review" />
              <p className="card-main"><strong>Paradise Found: A Breathtaking Journey at HIT</strong><br></br>
                Our HITK is an absolute haven for education and personal growth. Its picturesque campus,
                adorned with lush gardens and modern architecture, offers a surreal learning experience.
                The passionate and dedicated faculty inspire students to achieve greatness. The vibrant and diverse
                community encourages cultural exchange and lifelong friendships. With top-notch facilities and a myriad
                of extracurricular opportunities, it's a place where dreams take flight. HITK
                truly redefines the beauty of higher education!<br></br>
                <strong>"I believe that it is important to create many happy memories so that we can try to wipe out sad ones"</strong></p>
              <p className="card-footer">Tathagata Ghosh</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/tabassum.jpeg" alt="review" />
              <p className="card-main"><strong>A Tranquil Haven of Learning: Embracing Excellence with Pleasure</strong><br></br>
                Nestled amidst serene landscapes, this college presents a delightful experience for students. The campus exudes a sense of tranquility,
                conducive to focused learning. The dedicated faculty inspires students to reach their fullest potential,
                fostering a passion for knowledge. Modern amenities cater to diverse interests, nurturing a well-rounded development.
                A rich tapestry of cultural events and clubs creates a vibrant campus life, brimming with camaraderie. From the picturesque
                architecture to the supportive community, this college radiates warmth and encouragement. Embrace a journey of
                education and growth in this truly pleasant haven.</p>
              <p className="card-footer">Tabassum Halque</p>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/arya.jpg" alt="review" />
              <p className="card-main"><strong>HITK provides an exceptional academic experience with dedicated
                faculty and a well-rounded curriculum. The campus is vibrant and offers ample resources for both
                learning and personal development. I highly recommend HITK to anyone seeking a rewarding college journey</strong> </p>
              <p className="card-footer">Arya Das</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/samreet.jpeg" alt="review" />
              <p className="card-main"><strong>Enchanting Campus Oasis: Where Beauty Meets Academic Brilliance</strong><br></br>
                This college is an absolute dream! Nestled amidst picturesque landscapes, its architectural splendor
                and serene atmosphere create an enchanting oasis for learning. Top-notch facilities and dedicated
                professors ensure an exceptional academic journey. The vibrant campus life is filled with diverse
                clubs and events, fostering a sense of community and personal growth. Undoubtedly, a place where
                beauty and academic brilliance converge to inspire students towards a brighter future.</p>
              <p className="card-footer">Samreet Sengupta</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/dipan.jpeg" alt="review" />
              <p className="card-main"><strong>An Enchanting Haven of Learning: Where Beauty Meets Brilliance</strong><br></br>
                This college mesmerizes with its captivating campus,
                harmoniously blending natural beauty and cutting-edge facilities. Inspiring professors
                and a vibrant community make it an ideal place to flourish academically and personally.
                A truly enchanting haven for all eager learners.</p>
              <p className="card-footer">Dipan Mondal</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/abir.jpeg" alt="review" />
              <p className="card-main"><strong>Academic Haven: Where Dreams Take Flight!</strong><br></br>
                Prepare to be awe-inspired! This college is an absolute masterpiece, captivating with its architectural
                brilliance and sprawling greenery. Every corner exudes an ambiance of intellectual stimulation and creativity.
                Professors here are unparalleled, igniting minds with their passion and knowledge. The cutting-edge facilities
                empower students to reach new heights in their studies and research. But it's not just academics; the vibrant
                campus life brims with clubs, events, and a diverse community that fosters personal growth. It's a place where
                dreams transform into reality, leaving an indelible mark on every student's journey. Simply mind-blowing!</p>
              <p className="card-footer">Abir Rakshit</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/shinjini.jpg" alt="review" />
              <p className="card-main"><strong>A Pleasant Oasis of Learning and Growth</strong><br></br>
                Highly recommend the institution! It offers a wide range of courses, excellent faculty members,
                and outstanding placement opportunities. A top choice for students seeking quality education and a promising future.</p>
              <p className="card-footer">Shinjini Chanda</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/aryan.jpg" alt="review" />
              <p className="card-main"><strong>Unparalleled Excellence: A Mind-Blowing College Experience!</strong><br></br>
                This college surpasses all expectations with its cutting-edge facilities, exceptional faculty,
                and diverse student community. The campus is a picturesque haven, fostering a thriving academic and
                social ambiance. Prepare to be amazed by the extraordinary opportunities and unforgettable memories
                this college offers!</p>
              <p className="card-footer">Aryan Dutta</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/soumyodeep.jpg" alt="review" />
              <p className="card-main"><strong>A Captivating Journey of Learning and Growth</strong><br></br>
                Step onto the breathtaking campus of this college and embark on an extraordinary educational
                journey. With its picturesque surroundings, a harmonious blend of modern and classical architecture,
                and cutting-edge facilities, it captivates both the eyes and the mind. The faculty, distinguished
                and supportive, nurtures intellectual curiosity and fosters critical thinking. Engaging extracurricular
                activities and a lively social scene create unforgettable memories and lasting friendships. This college
                is a sanctuary where academic excellence meets a vibrant campus life, transforming students into well-rounded
                individuals ready to embrace the world's challenges with confidence and grace.</p>
              <p className="card-footer">Soumyodeep Bhowmik</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/gourab.jpg" alt="review" />
              <p className="card-main"><strong>Enchanting Haven: A Charming College Experience</strong><br></br>
                This college captures hearts with its picturesque campus, embracing nature's beauty.
                Professors inspire with their expertise and dedication, nurturing curious minds. The warm
                community fosters lasting friendships, making every moment memorable. A magical place where learning and
                living intertwine, creating an unforgettable and charming college journey.</p>
              <p className="card-footer">Gourab Kundu</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="card-img" src="images/sayan.jpg" alt="review" />
              <p className="card-main"><strong>An Oasis of Serenity: A Review of This Pleasant College</strong><br></br>
                Nestled amidst picturesque landscapes, this college provides a truly pleasant environment
                for students to thrive. The campus exudes tranquility, offering the perfect sanctuary for
                focused learning and personal development. The faculty's dedication to academic excellence and
                supportive approach cultivates a positive atmosphere. Engaging extracurricular activities and
                lively events foster a sense of community, making it easy to form lasting friendships. With modern
                facilities and a commitment to student well-being, this college creates an idyllic setting where
                students can flourish both academically and personally. It truly is an oasis of serenity and a top
                choice for a memorable college experience.</p>
              <p className="card-footer">Sayan Sinha</p>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

    </>
  );
}