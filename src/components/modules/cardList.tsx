import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { plantsType, contents } from '@/types/api/plantsType'

type Props = {
  currentPage: number;
  limit: number;
  category: string; // all or apiData category
  type: string; // list or items
  condition?: string; // trendy or best
  apiData: plantsType;
}

export const CardList: React.FC<Props> = ({ currentPage, limit, category, type, condition, apiData }) => {
  const parentClass = type === 'items' ? 'card-items' : 'c-card-list';
  const [data, setData] = useState<contents[]>([]);

  useEffect(() => {
    if (apiData) {
      const api = apiData.contents;
      let newData = [] as contents[];

      if (condition) {
        newData = api.filter((value) => value[condition as keyof contents]).slice(0, limit);
      } 
      else {
        newData = api
      }

      if (newData.length > 0) setData(newData);
    }
  }, [apiData])


  return (
    <div className={parentClass}>
      {data.length > 0 && data.map((value) => (
        <div className={`c-card ${type === 'items' ? 'wide' : ''}`} key={value.id}>
          <span className='mask'><span className='inn'></span></span>
          {type === 'items' && (
            <>
              <div className="overflow-img"><img src={value.image.url} alt="" /></div>
              <div className='wide-box'>
                <h3 className="name">{value.name}</h3>
                <p className="description">{value.description}</p>
                <p className="price">¥ {Number(value.price).toLocaleString()}</p>
                <div className="btn-items">
                  <Link href="/plants/detail/[id]" as={`/plants/detail/${value.id}`} className="c-btn01">Explore</Link>
                  <Link href="/plants/detail/[id]" as={`/plants/detail/${value.id}`} className="c-btn01 fit"><img src="/img/icon_bag.png" alt="" /></Link>
                </div>
              </div>
            </>
          )}
          {type === 'list' && (
            <div className='box'>
              <div className='thumb'><img src={value.image.url} alt="" /></div>
              <div className='txt-box'>
                <p className="name">{value.name}</p>
                <p className="description">{value.description}</p>
                <div className='btn-items'>
                  <p className="price">¥ {Number(value.price).toLocaleString()}</p>
                  <Link href="/plants/detail/[id]" as={`/plants/detail/${value.id}`} className='c-btn01 fit'><img src="/img/icon_bag.png" alt="" /></Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}