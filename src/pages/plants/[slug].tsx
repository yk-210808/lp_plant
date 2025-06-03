import { useEffect, useState, useContext, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import type { GetServerSideProps } from "next";
import { useRouter } from 'next/router'
import { Select } from "flowbite-react";
import { Pagination, CardList } from '@/components'
import { apiClient } from '@/components/api/apiClient';
import { contents, plantsType } from '@/types/api/plantsType';
import { plantsCategoryContents } from '@/types/api/plantsCategoryType';
import { plantsCategoryContext } from '@/contexts/plantsCategoryContext';
import { isObjectEmpty } from '@/utils/commonUtil';
import Head from 'next/head';

const limit = 6;

interface Props {
  plantsApiData: plantsType;
  currentSlug: string;
  searchParam: string;
  currentPage: number;
  plantsCategories: contents[];
}

export default function Plants({
  plantsApiData,
  // currentSlug,
  // searchParam: searchParamFromProps,
  // currentPage: currentPageFromProps,
  // plantsCategories: plantsCategoriesFromProps,
}: Props) {
  const router = useRouter();
  const searchParam = router.query.search ? router.query.search : '';
  const { plantsCategory } = useContext(plantsCategoryContext)

  const apiTotalCount = plantsApiData?.totalCount ?? 0;
  const totalPages = Math.ceil(apiTotalCount / limit);
  const currentPage = Math.min(Number(router.query.p) || 1, totalPages);
  const category = router.query.slug || "all";
  const count = plantsApiData?.totalCount ?? 0
  const categoryName = plantsCategory.find((value) => value.slug === category)?.title
  const categoryDescription = plantsCategory.find((value) => value.slug === category)?.description

  const categoryId = useMemo(() => {
    if (plantsCategory.length > 0) return plantsCategory.find((value) => value.slug === category)?.id
  }, [plantsCategory, category])

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
    <>
      <Head>
        <title>{pageTitle().toUpperCase()} | Planto.</title>
        <meta property="og:title" content={pageTitle().toUpperCase() + " | Planto."} />
        <meta name="description" content={categoryDescription ?? pageTitle().toUpperCase()}></meta>
        <meta property="og:description" content={categoryDescription ?? pageTitle().toUpperCase()} />
      </Head>

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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, p, search } = context.query;
  const currentSlugInternal = Array.isArray(slug) ? slug[0] : slug || 'all';
  const currentPageInternal = Number(p) > 0 ? Number(p) : 1;
  const offset = (currentPageInternal - 1) * limit < 0 ? 0 : (currentPageInternal - 1) * limit;
  const searchParamInternal = Array.isArray(search) ? search.join(',') : search || '';

  let plantsData = {} as plantsType; 
  let allCategories = [] as plantsCategoryContents[]; 

  let debug;

  let categoryIdForFilter: string | undefined = undefined;

  const categoriesData = await apiClient.get({ endpoint: 'plants_category' });
  allCategories = Array.isArray(categoriesData?.contents) ? categoriesData.contents : [];

  if (currentSlugInternal !== 'all') {
    const categoryObject = allCategories.find(cat => cat.slug === currentSlugInternal);
    if (categoryObject) {
      categoryIdForFilter = categoryObject.id;
    } else {
      if (allCategories.length > 0) { 
        return { notFound: true };
      }
    }
  }



  const apiFilter = categoryIdForFilter ? `category[equals]${categoryIdForFilter}` : '';

  const fetchedPlantsData = await apiClient.get({
    endpoint: "plants",
    queries: {
      limit,
      offset,
      filters: apiFilter,
      q: searchParamInternal,
    },
  });
  plantsData = fetchedPlantsData;

  return {
    props: {
      plantsApiData: plantsData,
      currentSlug: currentSlugInternal,
      searchParam: searchParamInternal,
      currentPage: currentPageInternal,
      plantsCategories: allCategories,
      key: `${currentSlugInternal}-${searchParamInternal}-${currentPageInternal}`,
    }
  };
}
