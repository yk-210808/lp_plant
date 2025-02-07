import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { plantsType, contents } from '@/types/api/plantsType';
import React, { useEffect, useState } from 'react';

type Props = {
  limit: number;
  apiData: plantsType
}

export const Slider: React.FC<Props> = ({ limit, apiData }) => {
  const [data, setData] = useState<contents[]>([]);

  useEffect(() => {
    let newData = [] as contents[];

    if (apiData && data.length === 0) {
      const api = apiData.contents;
      newData = api.filter((value) => value.trendy_mv).slice(0, limit);

      setData(newData);
    }
  }, [])

  return (
    <>
      <Splide
        hasTrack={false}
        options={{
          gap: '40px',
        }}
      >
        <SplideTrack>
          {data.length > 0 && data.map((value) => (
            <SplideSlide key={value.id}>
              <div className="slide-item c-card">
                <span className='mask'><span className='inn'></span></span>
                <div className='box'>
                  <div className='thumb'><img src={value.image.url} alt="" /></div>
                  <div className='txt-box'>
                    <p className="cat">{value.category.title}</p>
                    <p className="name">{value.name}</p>
                    <Link href="#" className='c-btn01'>Buy Now</Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  )
}