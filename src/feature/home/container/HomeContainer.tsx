"use server"
import React from 'react'
import Landing from '@/feature/home/component/layout/LandingPage'
import Festival from '@/feature/home/component/layout/Festival'
import Timeline from '@/feature/home/component/layout/Timeline'
import MataInformasi from '@/feature/home/component/layout/MataInformasi'
import Sponsor from '@/feature/home/component/layout/Sponsor'
import Footer from '@/shared/footer/footer'
import path from 'path/win32'
import fs from 'fs'

const HomeContainer: React.FC = async () => {
    const directorySponsor = path.join(process.cwd(), 'public', 'Sponsor&Medpar');
    const imagesSponsor = fs.readdirSync(directorySponsor).filter(filter => /\.(webp|jpg|jpeg|png)$/i.test(filter)).map(file => `/Sponsor&Medpar/${file}`);

    return (
        <React.Fragment>
            <Landing  id='festival'/>
            <Festival />
            <Timeline />
            <MataInformasi />
            <Sponsor images={imagesSponsor} />
            <Footer />
        </React.Fragment>
    )
}

export default HomeContainer
