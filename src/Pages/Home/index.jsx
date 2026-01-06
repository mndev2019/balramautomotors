import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Service from './Service'
import DistributorSection from './DistributorSection'
import AboutSection from './AboutSection'
import TeamSection from './TeamSection'
import ClientsSection from './ClientSection'
import MobileDistributor from './MobileDistributor'

const Home = () => {
    return (
        <>
            <Banner />
            <AboutSection/>
            <Categories/>
            <Service/>
            <DistributorSection/>
            <MobileDistributor/>
            <TeamSection/>
            <ClientsSection/>
        </>
    )
}

export default Home
