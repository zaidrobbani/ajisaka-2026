import React from "react"
import Landing from "@/feature/about/component/layout/Landing"
import Festival from "@/feature/about/component/layout/Festival"
import NilaiAjisaka from "@/feature/about/component/layout/NilaiAjisaka"
import PerjalananAjisaka from "../component/layout/PerjalananAjisaka"
import PembinaAjisaka from "../component/layout/PembinaAjisaka"
import PanitiaAjisaka from "../component/layout/PanitiaAjisaka"
import Footer from "@/shared/footer/footer"

const AboutUsContainer = async () => {
    return (
        <React.Fragment>
            <Landing id="festival"/>
            <Festival/>
            <NilaiAjisaka/>
            <PerjalananAjisaka/>
            <PembinaAjisaka/>
            <PanitiaAjisaka/>
            <Footer/>
        </React.Fragment>
    )
}

export default AboutUsContainer
