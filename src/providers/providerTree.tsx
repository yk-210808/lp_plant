import { PlantsCategoryProvider } from "./plantsCategoryProvider"

const ProviderTree = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlantsCategoryProvider>
      {children}
    </PlantsCategoryProvider>
  )
}

export default ProviderTree