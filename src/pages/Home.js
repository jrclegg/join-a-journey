import React from 'react'
import Header from '../components/Header';
import FeaturedTrips from '../components/FeaturedTrips'
import FeaturedWildlife from '../components/FeaturedWildlife'
import LastMinuteTrips from '../components/LastMinuteTrips'

const Home = () => {
  return (
    <div>
      <Header/>
      <FeaturedTrips/>
      <FeaturedWildlife/>
      <LastMinuteTrips/>
    </div>

  )
}
export default Home
  