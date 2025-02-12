import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next/router"
import { FloatingLabel, Button } from "flowbite-react"
import { useDebounce } from "@/hooks/useDebounce"

export default function Search() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const debounceInput = useDebounce(input, 500)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  const handleClick = () => {
    if (debounceInput) {
      router.push(`/plants/all/?search=${debounceInput.toString()}`)
    }
  }

  return (
    <div className="p_common">
      <div className="search-block">
        <div className="inner-block">
          <h1 className="c-ttl01"><span className="inn">Search</span></h1>
          <div className="c-search-input justify-center">
            <FloatingLabel variant="outlined" label="search" className="c-input" onChange={(e) => handleInput(e)} />
            <Button size="sm" className="c-search-btn" onClick={handleClick}>
              <FaSearch className="h-7 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}