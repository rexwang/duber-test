const GOOGLE_MAP_GEOCODING_API_KEY = 'AIzaSyDIoGgEjVAVhm363lYZFrsNGqek-lxxd8U';
const GOOGLE_MAP_DISTANCE_API_KEY = 'AIzaSyCPKNtsMVPDJ_hzcTaXmJpXNiXvRaQl3uA';
const GOOGLE_MAP_GEOCODING_API = 'https://maps.googleapis.com/maps/api/geocode';

// Set up host url based on environment
const API_HOST =
      process.env.NODE_ENV === 'production' ?
        'https://admin.duberex.com' :
        'https://admin.duberex.com';

export default {
  googleMapSearchByZipCode: zipCode => (
    `${GOOGLE_MAP_GEOCODING_API}/json?address=${zipCode}&key=${GOOGLE_MAP_GEOCODING_API_KEY}`
  ),
  retailers: state => (
    `${API_HOST}/retailers.json?state=${state}`
  ),
  products: location => (
    `${API_HOST}/products/geo_search.json?gps[]=${location.lat}&gps[]=${location.lng}&searchText=zoot`
  )
};
