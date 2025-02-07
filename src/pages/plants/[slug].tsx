import { useRouter } from 'next/router'
import '@/styles/page/_plants.scss'
import { Pagination, CardList } from '@/components'
import { Select } from "flowbite-react";
import { apiClient } from '@/components/api/apiClient';
import { contents, plantsType } from '@/types/api/plantsType';
import { useEffect, useState, useContext, useMemo } from 'react';
import { GetServerSideProps } from "next";
import { plantsCategoryContext } from '@/contexts/plantsCategoryContext';

export default function Plants({ initialPlantsData }: { initialPlantsData: plantsType }) {
  const router = useRouter();
  const [plantsApiData, setPlantsApiData] = useState<plantsType>();
  // const [ categoryId, setCategoryId ] = useState('')
  const { plantsCategory } = useContext(plantsCategoryContext)

  // const [loading, setLoading] = useState(false);

  const limit = 3;
  // const currentPage = Number(router.query.p) || 1;
  const totalPages = Math.ceil(plantsApiData?.totalCount / limit);
  // const totalPages = plantsApiData ? Math.ceil(plantsApiData.totalCount / limit) : 0;
  const currentPage = Math.min(Number(router.query.p) || 1, totalPages);
  const category = router.query.slug || "all";
  const count = plantsApiData?.totalCount

/**
 * ?p=*
 * 最大ページ数以上入力されたときの挙動を修正
 */

  const categoryId = useMemo(() => {
    if (plantsCategory.length > 0) return plantsCategory.find((value) => value.slug === category)?.id
  }, [plantsCategory, category])

  useEffect(() => {
    const filter = categoryId ? `category[equals]${categoryId}` : ''
    const fetchData = async () => {
      // setLoading(true);
      console.log(currentPage);
      
      const offset = (currentPage - 1) * limit ;
      // const offset = currentPage ? (currentPage - 1) * limit : 0;

      const data = await apiClient.get({
        endpoint: "plants",
        queries: {
          limit,
          offset,
          filters: filter
        },
      });
      setPlantsApiData(data);
      // setLoading(false);
    };

    fetchData();
  }, [router.query.p, router.query.slug, categoryId]);

  // console.log(plantsApiData);


  return (
    <div className="p_common p_plants">
      <div className="plants-block">
        <div className="inner-block">
          <h1 className="c-ttl01 cap"><span className='inn'>{category === "all" ? "All Plants" : category}</span></h1>
          <div className="c-select-box">
            Type :
            <Select className='c-select'>
              <option value="1">All</option>
              <option value="2">Type 1</option>
              <option value="3">Type 2</option>
            </Select>
          </div>
          {plantsApiData && <CardList currentPage={currentPage} limit={limit} category={category as string} type={'list'} apiData={plantsApiData} />}
          {count && <Pagination path={`/plants/${router.query.slug}`} currentPage={currentPage} limit={limit} count={count} />}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug, p } = query;
  const currentPage = Number(p) > 0 ? Number(p) : 1;
  const limit = 4;
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
    props: {
      plantsApiData: plants_data,
    },
  };
};