import {useEffect, useState} from 'react'
import {Beer} from '../types/beers'
import handleApiCall from '../utilities/api'

// Components
import Card from '../components/card'

function RandomBeer() {
  const [dataApi, setDataApi] = useState<Beer[]>([])
  useEffect(() => {
    const callApi = async () => {
      const fetchApi = await handleApiCall('random')
      setDataApi(fetchApi)
    }
    callApi()
  }, [])

  return (
    <div>
      <h1>Random Beer</h1>
      {dataApi.length ? (
        <Card
          name={dataApi[0].name}
          tagline={dataApi[0].tagline}
          description={dataApi[0].description}
          image_url={dataApi[0].image_url}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default RandomBeer
