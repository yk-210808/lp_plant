import { useRouter } from 'next/router'
import '@/styles/page/_plants.scss'
import { Pagination, CardList } from '@/components'
import { Select } from "flowbite-react";

export default function Plants() {
  const router = useRouter()
  const pageTtl = router.query.slug === 'all' ? 'All Plants' : router.query.slug
  const cat = router.query.slug ? router.query.slug.toString() : 'all';

  return (
    <div className="p_common p_plants">
      <div className="plants-block">
        <div className="inner-block">
          <h1 className="c-ttl01 cap"><span className='inn'>{pageTtl}</span></h1>
          <div className="c-select-box">
            Type :
            <Select className='c-select'>
              <option value="1">All</option>
              <option value="2">Type 1</option>
              <option value="3">Type 2</option>
            </Select>
          </div>
          <CardList currentPage={1} limit={4} category={cat} />
          {/* <Pagination path="/plants" currentPage={currentPage} limit={limit} count={count} /> */}
          <Pagination path={`/plants/${router.query.slug}`} currentPage={1} limit={4} count={40} />
        </div>
      </div>

    </div>
  )
}