import { apiClient } from "@/components/api/apiClient"

export const getStaticProps = async (endpoint: string) => {
  const data = await apiClient.get({ endpoint: endpoint })

  return {
    props: {
      apiData: data.contents
    }
  }
}