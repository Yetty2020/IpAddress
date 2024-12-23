import PropTypes from 'prop-types'

const IpDetails = ({ ipData }) => {
  return (
    <div className='flex flex-col gap-5 md:flex-row md:justify-between md:items-center md:px-3 md:py-2 md:text-center '>
      <div className='flex flex-col gap-1 align-center justify-center items-center md:w-1/5  md:border-r-2 md:border-gray-200 md:px-5 md:gap-3'>
        <h2 className='text-dark-gray tracking-widest text-sm uppercase font-semibold '>IP ADDRESS</h2>
        <p className='text-very-dark-gray tracking-wide text-xl font-medium'>{ipData.ip}</p>
      </div>
      <div className='flex flex-col gap-1 align-center justify-center items-center md:w-1/5   md:border-r-2 md:border-gray-200 md:px-5 md:gap-3'>
        <h2 className='text-dark-gray tracking-widest text-sm uppercase font-semibold'>LOCATION</h2>
        <p className='text-very-dark-gray tracking-wide text-xl font-medium'>{ipData.location.city}, {ipData.location.country}</p>
      </div>
      <div className='flex flex-col gap-1 align-center justify-center items-center md:w-1/5   md:border-r-2 md:border-gray-200 md:px-5 md:gap-3'>
        <h2 className='text-dark-gray tracking-widest text-sm uppercase font-semibold'>TIMEZONE</h2>
        <p className='text-very-dark-gray tracking-wide text-xl font-medium'>UTC {ipData.location.timezone}</p>
      </div>
      <div className='flex flex-col gap-1 align-center justify-center items-center md:w-1/5   md:border-gray-200 md:px-5 md:gap-3'>
        <h2 className='text-dark-gray tracking-widest text-sm uppercase font-semibold'>ISP</h2>
        <p className='text-very-dark-gray tracking-wide text-xl font-medium'>{ipData.isp}</p>
      </div>
    </div>
  )
}

IpDetails.propTypes = {
  ipData: PropTypes.shape({
    ip: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      timezone: PropTypes.string
    }),
    isp: PropTypes.string
  }).isRequired
}

export default IpDetails
