import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'

const Map = ({ center, ipData }) => {
  return (
    <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={center}>
        <Popup>
          {ipData.location.city}, {ipData.location.country}<br />
          IP: {ipData.ip}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  ipData: PropTypes.shape({
    ip: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string
    })
  }).isRequired
}

export default Map
