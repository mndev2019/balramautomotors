import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Service from './Service'
import DistributorSection from './DistributorSection'
import AboutSection from './AboutSection'
import TeamSection from './TeamSection'
import ClientsSection from './ClientSection'
import MobileDistributor from './MobileDistributor'
import Blog from '../Blog/Blog'

const Home = () => {
    return (
        <>
            <Banner />
            <AboutSection/>
            <Categories/>
            <Service/>
            <DistributorSection/>
            <MobileDistributor/>
            <Blog/>
            <TeamSection/>
            <ClientsSection/>
        </>
    )
}

export default Home
