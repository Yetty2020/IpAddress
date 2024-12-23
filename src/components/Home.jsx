import { useState, useEffect } from 'react'
import Map from './Map'
import IpDetails from './IpDetails'
import Search from './Search'

function Home() {
  const [ipData, setIpData] = useState(null)
  const [mapCenter, setMapCenter] = useState([51.505, -0.09])
  const [error, setError] = useState(null)

  const fetchIpData = async (searchTerm) => {
    try {
      const API_KEY = 'at_vVFfy1pf3Ikr5I3IUMXMNboXIkdV4'
      let queryParam = ''

      // Check if input is IP address or domain
      if (searchTerm.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
        queryParam = `ipAddress=${searchTerm}`
      } else if (searchTerm.includes('.')) {
        queryParam = `domain=${searchTerm}`
      } else {
        throw new Error('Invalid input format')
      }

      const geoResponse = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${queryParam}`
      )
      const data = await geoResponse.json()
      
      if (data && data.location) {
        setIpData(data)
        setMapCenter([data.location.lat, data.location.lng])
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch IP data')
      console.error(err)
    }
  }

  useEffect(() => {
    // Fetch user's initial IP on load
    const getInitialIp = async () => {
      const response = await fetch('https://api.ipify.org?format=json')
      const { ip } = await response.json()
      fetchIpData(ip)
    }
    getInitialIp()
  }, [])

  const handleSearch = (searchTerm) => {
    fetchIpData(searchTerm)
  }

  return (
    <div className='flex flex-col  '>
        <div className='flex flex-col  bg-mobile-pattern  md:bg-desktop-pattern bg-cover bg-no-repeat bg-center w-full gap-5 h-[40vh] md:h-[25vh] lg:h-[40vh] md:items-center'>
      <h1 className='text-2xl text-white text-center font-medium pt-6 '>IP Address Tracker</h1>
      <Search onSearch={handleSearch} />
      {error && <div className='text-red-900 text-center '>{error}</div>}
      </div>
      
      <div className='absolute left-1/2 right-0 -translate-x-1/2 z-50 top-[25vh] w-[80%] lg:top-[30vh] md:top-[17vh]  bg-white rounded-xl py-6 lg:w-[80%] md:w-[90%] '>
      {ipData && <IpDetails ipData={ipData} />}
      </div>
      <div className='relative z-10'>
      {ipData && <Map center={mapCenter} ipData={ipData} />}
      </div>
    </div>
  )
}

export default Home
