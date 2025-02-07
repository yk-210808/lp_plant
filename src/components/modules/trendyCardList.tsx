import Link from "next/link"

export const TrendyCardList = () => {
  return (
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
  )
}