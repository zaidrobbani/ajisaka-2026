'use server'
import React from 'react'
import Landing from '../component/layout/Landing'
import IsiFaq from '../component/layout/IsiFaq'
import Footer from '@/shared/footer/footer'

const FaqContainer = async () => {
    return (
        <React.Fragment>
            <Landing />
            <IsiFaq />
            <Footer />
        </React.Fragment>
    )
}

export default FaqContainer
