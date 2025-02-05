"use client";
import { useState, useRef } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';

interface SplideInstance {
  index: number;
  length: number;
  on: (event: string, callback: () => void) => void;
}

export const SliderBest = () => {
  const splideRef = useRef<SplideInstance | null>(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <>
      <Splide
        ref={splideRef}
        hasTrack={false}
        options={{
          gap: '40px',
        }}
        onMounted={(splide: SplideInstance) => {
          splideRef.current = splide;
          setTotalSlides(splide.length);

          splide.on('move', () => {
            setCurrentSlide(splide.index + 1);
          });
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="c-card wide">
              <span className='mask'><span className='inn'></span></span>
              <div className="overflow-img"><img src="https://placehold.jp/500x500.png" alt="" /></div>
              <div className='wide-box'>
                <h3 className="name">We Have Small And Best O2 Plants Collection’s</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="btn-items">
                  <Link href="#" className="c-btn01">Explore</Link>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="c-card wide">
              <span className='mask'><span className='inn'></span></span>
              <div className="overflow-img"><img src="https://placehold.jp/500x500.png" alt="" /></div>
              <div className='wide-box'>
                <h3 className="name">For Small Decs Ai Plat</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="btn-items">
                  <Link href="#" className="c-btn01">Explore</Link>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="c-card wide">
              <span className='mask'><span className='inn'></span></span>
              <div className="overflow-img"><img src="https://placehold.jp/500x500.png" alt="" /></div>
              <div className='wide-box'>
                <h3 className="name">For Small Decs Ai Plat</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="btn-items">
                  <Link href="#" className="c-btn01">Explore</Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev"></button>
          <div className="slide-number">
            <p className="current">{String(currentSlide).padStart(2, '0')}</p>
            <p className="total">{String(totalSlides).padStart(2, '0')}</p>
          </div>
          <button className="splide__arrow splide__arrow--next"></button>
        </div>
      </Splide>
    </>
  )
}