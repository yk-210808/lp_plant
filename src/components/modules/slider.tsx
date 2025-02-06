// "use client";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import Link from 'next/link';

export const Slider = () => {
  return (
    <>
      <Splide
        hasTrack={false}
        options={{
          gap: '40px',
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="slide-item c-card">
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="cat">Trendy House Plant</p>
                  <p className="name">Calathea plant</p>
                  <Link href="#" className='c-btn01'>Buy Now</Link>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-item c-card">
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="cat">Trendy House Plant</p>
                  <p className="name">Calathea plant</p>
                  <Link href="#" className='c-btn01'>Buy Now</Link>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide-item c-card">
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="cat">Trendy House Plant</p>
                  <p className="name">Calathea plant</p>
                  <Link href="#" className='c-btn01'>Buy Now</Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </>
  )
}