import '@/styles/page/_home.scss'
import Link from 'next/link'
import { Slider, SliderBest, CardList, ReviewCardList } from '@/components'
import { apiClient } from '@/components/api/apiClient'
import voiceType from '@/types/api/voiceType'


export default function Page({ voiceApiData, plantsApiData }: {voiceApiData: voiceType}) {
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
                  <Slider />
                </div>
              </div>
            </div>
            <ReviewCardList limit={1} mvFlg={true} apiData={voiceApiData} />
          </div>
        </div>
        <div className="trendy-block">
          <div className="inner-block">
            <h2 className="c-ttl01"><span className='inn'>Our Trendy plants</span></h2>
            <div className='card-items'>
              <div className="c-card wide">
                <span className='mask'><span className='inn'></span></span>
                <div className="overflow-img"><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='wide-box'>
                  <h3 className="name">For Small Decs Ai Plat</h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <p className="price">¥ 1,000</p>
                  <div className="btn-items">
                    <Link href="#" className="c-btn01">Explore</Link>
                    <Link href="#" className="c-btn01 fit"><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className="c-card wide">
                <span className='mask'><span className='inn'></span></span>
                <div className="overflow-img"><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='wide-box'>
                  <h3 className="name">For Small Decs Ai Plat</h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <p className="price">¥ 1,000</p>
                  <div className="btn-items">
                    <Link href="#" className="c-btn01">Explore</Link>
                    <Link href="#" className="c-btn01 fit"><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-selling-block">
        <div className="inner-block">
          <h2 className="c-ttl01"><span className='inn'>Our Top Selling</span></h2>
          <CardList currentPage={1} limit={4} category={'top_selling'} />
        </div>
      </div>
      <div className="review-block">
        <div className="inner-block">
          <h2 className="c-ttl01"><span className='inn'>Customer Review</span></h2>
          <ReviewCardList limit={3} mvFlg={false} apiData={voiceApiData}/>
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