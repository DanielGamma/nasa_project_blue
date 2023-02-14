import {MapContainer} from 'react-leaflet'
import '../../../node_modules/leaflet/dist/leaflet.css'


const MapView = () => {
    return <MapContainer center={{lat: '51.52437', lng: '13.41053'}} zoom={13}/>
}

export default MapView