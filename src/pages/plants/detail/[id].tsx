import '@/styles/page/_plantsDetail.scss'
import { GetStaticPropsContext } from "next";

import { apiClient } from "@/components/api/apiClient"
import { ReviewCardList, Slider } from '@/components';
import { contents, plantsType } from "@/types/api/plantsType";
import { voiceType } from '@/types/api/voiceType';
import { convertLfToBr } from '@/utils/commonUtil';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

import { FaAmazon } from "react-icons/fa";

import { Button } from 'flowbite-react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

export default function PlantsDetail({ plantApiData, voiceApiData }: { plantApiData: contents, voiceApiData: voiceType }) {
  const router = useRouter()
  const [plantsApiData, setPlantsApiData] = useState<plantsType | undefined>(undefined);

  const sliderImage = (plantApiData.slider && plantApiData.slider.length > 0) ? plantApiData.slider : [plantApiData.image];

  /**
   * API
   */
  // reset on page switching
  useEffect(() => {
    setPlantsApiData(undefined);
  }, [router.query.id]);

  // fetch new plantsApiData
  useEffect(() => {
    if (!router.isReady || !plantApiData || !plantApiData.category) return;

    const fetchData = async () => {
      const data = await apiClient.get({
        endpoint: 'plants',
        queries: {
          filters: `id[not_equals]${router.query.id}[and]category[equals]${plantApiData.category.id}`
        }
      });
      setPlantsApiData(data);
    };

    fetchData();
  }, [router.isReady, router.query.id, plantApiData]);




  return (
    <div className="p_common p_plants-detail">
      <div className="detail-block">
        <div className="inner-block">
          <div className="main-items">
            <div className="slider main-slider">
              <Splide
                hasTrack={false}
                options={{
                  gap: '40px',
                }}
              >
                <SplideTrack>
                  {sliderImage.map((value) => (
                    <SplideSlide key={Math.random()}>
                      <div className="slide-item">
                        <img src={value.url} alt="" />
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
            <div className="txt-box">
              <h1 className="ttl">{plantApiData.name}</h1>
              <p className="price">¥ {Number(plantApiData.price).toLocaleString()}</p>
              <p className="description" dangerouslySetInnerHTML={{ __html: convertLfToBr(plantApiData.description) }} />
              <Button href="https://www.amazon.co.jp/" target='_blank' color='warning' size='xl' className='btn text-black md:hover:bg-yellow-500'><span className='inn'>Buy on Amazon<FaAmazon className='icon' /></span></Button>
            </div>
          </div>
          <div className="detail-items">
            {plantApiData.detail && (
              <p className="detail" dangerouslySetInnerHTML={{ __html: convertLfToBr(plantApiData.detail) }} />
            )}

            {voiceApiData.contents.length > 0 && (
              <>
                <h2 className="c-ttl02">Review</h2>
                <ReviewCardList limit={3} mvFlg={false} apiData={voiceApiData} />
              </>
            )}

            {plantsApiData && (
              <>
                <h2 className="c-ttl02">Similar Plants</h2>
                <div className="slider" ><Slider key={router.query.id as string} limit={6} perPage={3} apiData={plantsApiData} /></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export const getStaticPaths = async () => {
  const data = await apiClient.get({ endpoint: "plants" });

  const paths = data.contents.map((content: contents) => `/plants/detail/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const contentId = Array.isArray(context?.params?.id) ? context.params.id[0] : context?.params?.id;
  const voiceFilter = `plants[equals]${contentId}`

  const plant_data = await apiClient.get({ endpoint: 'plants', contentId })
  const voice_data = await apiClient.get({ endpoint: 'voice', queries: { filters: voiceFilter } })

  return {
    props: {
      plantApiData: plant_data,
      voiceApiData: voice_data
    }
  }
}