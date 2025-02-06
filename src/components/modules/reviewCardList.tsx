import React, { useEffect, useState } from "react"
import {voiceType, contents} from '@/types/api/voiceType'

type Props = {
  limit: number;
  mvFlg: boolean;
  apiData: voiceType;
}

type ParentProps = {
  children: React.ReactNode;
  mvFlg: boolean;
}

const Parent: React.FC<ParentProps> = ({ children, mvFlg }) => {
  if (mvFlg) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <div className="c-card-list review">
        {children}
      </div>
    )
  }
}


export const ReviewCardList: React.FC<Props> = ({ limit, mvFlg, apiData }) => {
  const [data, setData] = useState<contents[]>([])
  
  useEffect(() => {
    if(apiData && data.length === 0){
      const api = apiData.contents;
      
      if(mvFlg){
        const newData = api.filter((value) => value.mv_flg)
        setData(newData)
      }else{
        // 取得個数をlimitに合わせる
        const newData = api.filter((value) => !value.mv_flg)
        setData(newData)
      }
    }

    
    
  })
  
  return (
    <>

      <Parent mvFlg={mvFlg}>
        <div className="c-card small">
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
      </Parent>
    </>
  )
}