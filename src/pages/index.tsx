import '@/styles/page/_home.scss'
import Link from 'next/link'
import { Slider, SliderBest } from '@/components'

export default function Page() {
  return (
    <div className='p_home'>
      <div className='main-bg'>
        <div className="mv-block">
          <div className="inner-block">
            <div className='mv-main'>
              <div className="ttl-area">
                <h2 className="ttl">Breath Natureal</h2>
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
            <div className="c-card small review-card">
              <span className='mask'><span className='inn'></span></span>
              <div className="review-items">
                <div className="review-img"><img src="https://placehold.jp/100x100.png" alt="" /></div>
                <div className='prof'>
                  <p className="review-name">alena Patel</p>
                  <div className="star">
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_half.svg" alt="" />
                  </div>
                </div>
              </div>
              <p className="review-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
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
          <ul className="c-card-list">
            <li className='c-card'>
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="name">Calathea plant</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className='btn-items'>
                    <p className="price">¥ 1,000</p>
                    <Link href="#" className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='c-card'>
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="name">Calathea plant</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className='btn-items'>
                    <p className="price">¥ 1,000</p>
                    <Link href="#" className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='c-card'>
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="name">Calathea plant</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className='btn-items'>
                    <p className="price">¥ 1,000</p>
                    <Link href="#" className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='c-card'>
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="name">Calathea plant</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className='btn-items'>
                    <p className="price">¥ 1,000</p>
                    <Link href="#" className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='c-card'>
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="name">Calathea plant</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className='btn-items'>
                    <p className="price">¥ 1,000</p>
                    <Link href="#" className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='c-card'>
              <span className='mask'><span className='inn'></span></span>
              <div className='box'>
                <div className='thumb'><img src="https://placehold.jp/500x500.png" alt="" /></div>
                <div className='txt-box'>
                  <p className="name">Calathea plant</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className='btn-items'>
                    <p className="price">¥ 1,000</p>
                    <Link href="#" className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="review-block">
        <div className="inner-block">
          <h2 className="c-ttl01"><span className='inn'>Customer Review</span></h2>
          <ul className="c-card-list review">
            <li className="c-card small">
              <span className='mask'><span className='inn'></span></span>
              <div className="review-items">
                <div className="review-img"><img src="https://placehold.jp/100x100.png" alt="" /></div>
                <div className='prof'>
                  <p className="review-name">alena Patel</p>
                  <div className="star">
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_half.svg" alt="" />
                  </div>
                </div>
              </div>
              <p className="review-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </li>
            <li className="c-card small">
              <span className='mask'><span className='inn'></span></span>
              <div className="review-items">
                <div className="review-img"><img src="https://placehold.jp/100x100.png" alt="" /></div>
                <div className='prof'>
                  <p className="review-name">alena Patel</p>
                  <div className="star">
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_half.svg" alt="" />
                  </div>
                </div>
              </div>
              <p className="review-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </li>
            <li className="c-card small">
              <span className='mask'><span className='inn'></span></span>
              <div className="review-items">
                <div className="review-img"><img src="https://placehold.jp/100x100.png" alt="" /></div>
                <div className='prof'>
                  <p className="review-name">alena Patel</p>
                  <div className="star">
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_full.svg" alt="" />
                    <img src="/img/icon_star_half.svg" alt="" />
                  </div>
                </div>
              </div>
              <p className="review-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </li>
          </ul>
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