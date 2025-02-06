import Link from 'next/link'
import React from 'react'

type Props = {
  currentPage: number;
  limit: number;
  category: string;
}

export const CardList: React.FC<Props> = ({ currentPage, limit, category }) => {
  return (
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
              <Link href="https://www.amazon.co.jp/" target='_blank' className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
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
              <Link href="https://www.amazon.co.jp/" target='_blank' className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
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
              <Link href="https://www.amazon.co.jp/" target='_blank' className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
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
              <Link href="https://www.amazon.co.jp/" target='_blank' className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
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
              <Link href="https://www.amazon.co.jp/" target='_blank' className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
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
              <Link href="https://www.amazon.co.jp/" target='_blank' className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}