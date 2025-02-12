// "use client";
import { useState, useRef, useContext, useEffect } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { plantsCategoryContext } from '@/contexts/plantsCategoryContext';
import { convertLfToBr } from '@/utils/commonUtil';
import Image from "next/image"
// import type { Splide as SplideInstance } from "@splidejs/splide"; 
import type { Splide as SplideType } from "@splidejs/splide"; 

interface SplideInstance {
  index: number;
  length: number;
  on: (event: string, callback: () => void) => void;
  splide?: SplideType;
}

export const SliderBest = () => {
  const splideRef = useRef<SplideInstance | null>(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const { plantsCategory } = useContext(plantsCategoryContext)

  useEffect(() => {
    if (splideRef.current) {
      if (splideRef.current.splide) {
        setTotalSlides(splideRef.current.splide.length)
      }
    }
  }, [plantsCategory])

  return (
    <>
      <Splide
        ref={splideRef}
        hasTrack={false}
        options={{
          gap: '40px',
        }}
        onMounted={(splide: SplideType) => {
          splideRef.current = splide;

          splide.on('move', () => {
            setCurrentSlide(splide.index + 1);
          });
        }}
      >
        <SplideTrack>
          {plantsCategory.length > 0 && plantsCategory.map((value) => (
            <SplideSlide key={value.id}>
              <div className="c-card wide">
                <span className='mask'><span className='inn'></span></span>
                <div className="overflow-img"><Image width="600" height="600" src={value.image.url} alt="" /></div>
                <div className='wide-box'>
                  <h3 className="name">We Have Small And Best {value.title} Collection’s</h3>
                  <p className="description" dangerouslySetInnerHTML={{ __html: convertLfToBr(value.description) }}></p>
                  <div className="btn-items">
                    <Link href={`/plants/${value.slug}`} className="c-btn01">Explore</Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
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