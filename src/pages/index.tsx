import '@/styles/page/_home.scss'
import Link from 'next/link'
import { Slider, SliderBest, CardList, ReviewCardList } from '@/components'
import { apiClient } from '@/components/api/apiClient'
import { voiceType } from '@/types/api/voiceType'
import { plantsType } from '@/types/api/plantsType'

export default function Page({ voiceApiData, plantsApiData }: { voiceApiData: voiceType, plantsApiData: plantsType }) {
  return (
    <div className='p_home p_common'>
      <div className='main-bg'>
        <div className="mv-block">
          <div className="inner-block">
            <div className='mv-main'>
              <div className="ttl-area">
                <h1 className="ttl">Breath Natureal</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-items">
                  <Link href="#" className="c-btn01">Explore</Link>
                  <Link href="#" className='demo-btn'>
                    <span className="icon"></span>
                    <span className="txt">Live Demo...</span>
                  </Link>
                </div>
              </div>
              <div className="product-slide-area">
                <div className="product-slide slider">
                  <Slider limit={3} apiData={plantsApiData} />
                </div>
              </div>
            </div>
            <ReviewCardList limit={1} mvFlg={true} apiData={voiceApiData} />
          </div>
        </div>
        <div className="trendy-block">
          <div className="inner-block">
            <h2 className="c-ttl01"><span className='inn'>Our Trendy plants</span></h2>
            <CardList
              currentPage={1}
              limit={2}
              category={'all'}
              type={'items'}
              condition={'trendy'}
              apiData={plantsApiData}
            />
          </div>
        </div>
      </div>
      <div className="top-selling-block">
        <div className="inner-block">
          <h2 className="c-ttl01"><span className='inn'>Our Top Selling</span></h2>
          <CardList
            currentPage={1}
            limit={6}
            category={'all'}
            type={'list'}
            condition={'best'}
            apiData={plantsApiData}
          />
        </div>
      </div>
      <div className="review-block">
        <div className="inner-block">
          <h2 className="c-ttl01"><span className='inn'>Customer Review</span></h2>
          <ReviewCardList limit={3} mvFlg={false} apiData={voiceApiData} />
        </div>
      </div>
      <div className="best-block">
        <div className="inner-block">
          <h2 className="c-ttl01"><span className='inn'>Our Best o2</span></h2>
          <div className='slider slider-wide'>
            <SliderBest />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const voice_data = await apiClient.get({ endpoint: 'voice' })
  const plants_data = await apiClient.get({ endpoint: 'plants' })

  return {
    props: {
      voiceApiData: voice_data,
      plantsApiData: plants_data
    }
  }
}