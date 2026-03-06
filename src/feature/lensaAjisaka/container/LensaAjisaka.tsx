'use server'
import React from 'react'
import Landing from "@/feature/lensaAjisaka/component/layout/Landing"
import Janamejaya from "@/feature/lensaAjisaka/component/layout/Janamejaya"
import fs from 'fs'
import path from 'path'
import Candradimuka from '../component/layout/Candradimuka'
import Roadshow from '../component/layout/Roadshow'
import Footer from '@/shared/footer/footer'

const LensaAjisaka = async  () => {
    const directoryjanamejaya = path.join(process.cwd(), 'public', 'Janamejaya');
    const imagesJanamejaya = fs.readdirSync(directoryjanamejaya).filter(filter => /\.(webp|jpg|jpeg|png)$/i.test(filter)).map(file => `/Janamejaya/${file}`);

    const directoryCandradimuka = path.join(process.cwd(), 'public', 'Candradimuka');
    const imagesCandradimuka = fs.readdirSync(directoryCandradimuka).filter(filter => /\.(webp|jpg|jpeg|png)$/i.test(filter)).map(file => `/Candradimuka/${file}`);

    const directoryRoadshow = path.join(process.cwd(), 'public', 'Roadshow');
    const imagesRoadshow = fs.readdirSync(directoryRoadshow).filter(filter => /\.(webp|jpg|jpeg|png)$/i.test(filter)).map(file => `/Roadshow/${file}`);

    return (
        <React.Fragment>
            <Landing />
            <Janamejaya images={imagesJanamejaya} />
            <Candradimuka images={imagesCandradimuka} />
            <Roadshow images={imagesRoadshow} />
            <Footer />
        </React.Fragment>
    )
}

export default LensaAjisaka
