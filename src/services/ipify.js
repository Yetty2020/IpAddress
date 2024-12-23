const IPIFY_API_KEY = 'at_vVFfy1pf3Ikr5I3IUMXMNboXIkdV4'
const BASE_URL = 'https://geo.ipify.org/api/v2/country,city'

export const getLocationByIP = async (ipAddress) => {
  const url = `${BASE_URL}?apiKey=${IPIFY_API_KEY}&ipAddress=${ipAddress}`
  const response = await fetch(url)
  return response.json()
}

export const getLocationByDomain = async (domain) => {
  const url = `${BASE_URL}?apiKey=${IPIFY_API_KEY}&domain=${domain}`
  const response = await fetch(url)
  return response.json()
}
