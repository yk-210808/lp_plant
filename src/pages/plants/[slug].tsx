import { useRouter } from 'next/router'
import '@/styles/page/_plants.scss'
import { Pagination, CardList } from '@/components'
import { Select } from "flowbite-react";
import { apiClient } from '@/components/api/apiClient';
import { contents, plantsType } from '@/types/api/plantsType';
import { useEffect, useState, useContext, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import { GetServerSideProps } from "next";
import { plantsCategoryContext } from '@/contexts/plantsCategoryContext';
import { isObjectEmpty } from '@/utils/commonUtil';

const limit = 6;

export default function Plants() {
  const router = useRouter();
  const searchParam = router.query.search ? router.query.search : '';
  const [plantsApiData, setPlantsApiData] = useState<plantsType>();
  const { plantsCategory } = useContext(plantsCategoryContext)
  // const [loading, setLoading] = useState(false);

  const apiTotalCount = plantsApiData?.totalCount ?? 0;
  const totalPages = Math.ceil(apiTotalCount / limit);
  const currentPage = Math.min(Number(router.query.p) || 1, totalPages);
  const category = router.query.slug || "all";
  const count = plantsApiData?.totalCount ?? 0
  const categoryName = plantsCategory.find((value) => value.slug === category)?.title

  const categoryId = useMemo(() => {
    if (plantsCategory.length > 0) return plantsCategory.find((value) => value.slug === category)?.id
  }, [plantsCategory, category])

  /**
   * API
   */
  useEffect(() => {
    let filter = categoryId ? `category[equals]${categoryId}` : ''

    const fetchData = async () => {
      // setLoading(true);
      const offset = ((currentPage - 1) * limit < 0) ? undefined : (currentPage - 1) * limit;
      const q = Array.isArray(searchParam) ? searchParam.join(',') : searchParam

      const data = await apiClient.get({
        endpoint: "plants",
        queries: {
          limit,
          offset,
          filters: filter,
          q
        },
      });
      setPlantsApiData(data);
      // setLoading(false);
    };

    fetchData();
  }, [router.query.slug, categoryId, currentPage, searchParam]);

  /**
   * Select Box
   */
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (typeof category === 'string') {
      setSelected(category);
    }
  }, [categoryId])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);

    // redirect
    router.push(`/plants/${event.target.value}`);
  }

  /**
   * Title
   */
  const pageTitle = () => {
    if (searchParam) {
      return `Search Result`
    } else if (category === "all") {
      return 'All Plants'
    } else {
      return `${categoryName}`
    }
  }

  return (
    <div className="p_common p_plants">
      <div className="plants-block">
        <div className="inner-block">
          <h1 className="c-ttl01 cap"><span className='inn'>{pageTitle()}</span></h1>
          <div className="c-select-box">
            <p>Type :</p>
            <Select className='c-select' value={selected} onChange={(e) => handleChange(e)}>
              <option value="all">all</option>

              {!isObjectEmpty(plantsCategory) && plantsCategory.map((value) => (
                <option
                  key={value.id}
                  value={value.slug}
                >
                  {value.title}
                </option>
              ))}
            </Select>
          </div>
          {plantsApiData && <CardList currentPage={currentPage} limit={limit} category={category as string} type={'list'} apiData={plantsApiData} />}
          {count > 0 && <Pagination path={`/plants/${router.query.slug}`} currentPage={currentPage} limit={limit} count={count} param={searchParam?.toString()} />}
          {count === 0 && <p>Not found</p>}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug, p } = query;
  const currentPage = Number(p) > 0 ? Number(p) : 1;
  const offset = (currentPage - 1) * limit;

  const plants_data = await apiClient.get({
    endpoint: "plants",
    queries: { limit, offset },
  });

  // instead getStaticPaths
  const allowedSlugs = plants_data.contents.map((value: contents) => value.category.slug)
  allowedSlugs.push('all')

  if (!allowedSlugs.includes(slug)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {}
  };
};