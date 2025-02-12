import React, { useEffect, useState } from "react"
import Image from "next/image"
import { voiceType, contents } from '@/types/api/voiceType'

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

  const getDecimalPoint = function (number: number) {
    const numbers = String(number).split('.');
    return numbers[1] ? Number(numbers[1]) : 0;
  };

  /**
   * APIデータをフィルタリング
   */
  useEffect(() => {
    let newData = [] as contents[]

    if (apiData && data.length === 0) {
      const api = apiData.contents;

      if (mvFlg) {
        newData = api.filter((value) => value.mv_flg)
      } else {
        newData = api.filter((value) => !value.mv_flg).slice(0, limit)
      }

      if (newData.length > 0) setData(newData)
    }
  }, [])

  return (
    <>
      <Parent mvFlg={mvFlg}>
        {data.length > 0 && data.map((value) => (
          <div className="c-card small" key={value.id}>
            <span className='mask'><span className='inn'></span></span>
            <div className="review-items">
              <div className="review-img"><Image width="90" height="90" src={value.image.url} alt="" /></div>
              <div className='prof'>
                <p className="review-name">{value.name}</p>
                <div className="star">
                  {Array(Math.trunc(value.evaluation[0])).fill(null).map((_, index) => (
                    <Image width="20" height="20" key={index + 1} src="/img/icon_star_full.svg" alt="" />
                  ))}
                  { getDecimalPoint(value.evaluation[0]) > 0 && <Image width="20" height="20" src="/img/icon_star_half.svg" alt="" /> }
                </div>
              </div>
            </div>
            <p className="review-comment">{value.review}</p>
          </div>
        ))}
      </Parent>
    </>
  )
}