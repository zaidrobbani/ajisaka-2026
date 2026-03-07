"use client"
import React from 'react'
import { organizationData, type Division } from '@/feature/about/data/DivisionData'
import { useGsapScrollReveal } from '@/lib/useGsapScrollReveal'

const divisionTitleClass = 'w-full rounded-full border border-white/80 bg-white/10 px-4 py-2 md:px-6 md:py-3 text-center font-montserrat text-base md:text-xl font-medium leading-none tracking-tight md:tracking-tight text-white'
const memberTextClass = 'font-montserrat text-sm md:text-lg font-normal leading-[150%] tracking-tight md:tracking-[-1.2px] text-white'

type MemberGroup = {
    role: string
    names: string[]
}

const getDivision = (divisionName: string): Division => {
    const foundDivision = organizationData.find((division) => division.division === divisionName)

    if (!foundDivision) {
        throw new Error(`Division '${divisionName}' not found in organizationData`)
    }

    return foundDivision
}

const groupMembersByRole = (members: Division['members']): MemberGroup[] => {
    const grouped: MemberGroup[] = []

    members.forEach((member) => {
        const existingRole = grouped.find((group) => group.role === member.role)

        if (existingRole) {
            existingRole.names.push(member.name)
            return
        }

        grouped.push({
            role: member.role,
            names: [member.name],
        })
    })

    return grouped
}

const renderGroupedMembers = (members: Division['members']) => {
    const groupedMembers = groupMembersByRole(members)

    return groupedMembers.map((group) => (
        <div key={group.role} className={memberTextClass}>
            <p>- {group.role}</p>
            <ul className='pl-4'>
                {group.names.map((name) => (
                    <li key={name}>- {name}</li>
                ))}
            </ul>
        </div>
    ))
}

const divisionCard = (division: Division) => (
    <article key={division.division} className='flex min-h-0 md:min-h-105 flex-col gap-3 md:gap-5'>
        <h3 className={divisionTitleClass}>{division.division}</h3>
        <div className='space-y-2'>{renderGroupedMembers(division.members)}</div>
    </article>
)

const PanitiaAjisaka = () => {
    const sectionRef = React.useRef<HTMLElement | null>(null)
    const contentRef = React.useRef<HTMLElement | null>(null)

    useGsapScrollReveal({
        sectionRef,
        contentRef,
    })

    const topRowDivisions = [
        getDivision('Pengurus Harian'),
        getDivision('Divisi Acara'),
        getDivision('Divisi Logistik'),
    ]
    const festivalDivision = getDivision('Divisi Festival')
    const secondRowDivisions = [
        getDivision('Divisi Business Development'),
        getDivision('Divisi Roadshow, Konsumsi, dan Medis'),
    ]
    const thirdRowDivisions = [
        getDivision('Divisi Liaison Officer'),
        getDivision('Divisi Public Affairs'),
        getDivision('Divisi Media Kreatif'),
    ]
    const competitionDivisions = [
        getDivision('Mata Lomba Arjuna'),
        getDivision('Mata Lomba Nakula'),
        getDivision('Mata Lomba Prahasta'),
        getDivision('Mata Lomba Sadewa'),
    ]

    const festivalLeadMembers = festivalDivision.members.slice(0, 2)
    const festivalOtherMembers = festivalDivision.members.slice(2)

    return (
        <section ref={sectionRef} className='relative z-10 flex w-full items-center justify-center px-2 md:px-10 pb-10 md:pb-24'>
            <div className='w-full max-w-440 rounded-2xl md:rounded-4xl bg-[linear-gradient(0deg,#47427C_0%,#8178E2_100%)] px-3 md:px-14 py-6 md:py-17.5'>
                <div ref={contentRef as React.RefObject<HTMLDivElement>} className='flex w-full flex-col gap-6 md:gap-10.5'>
                    <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                        {topRowDivisions.map((division) => divisionCard(division))}
                    </div>

                    <article className='flex flex-col gap-3 md:gap-5 border-t border-white/40 pt-6 md:pt-0 md:border-none'>
                        <h3 className={divisionTitleClass}>{festivalDivision.division}</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                            <div className='space-y-2'>{renderGroupedMembers(festivalLeadMembers)}</div>
                            <div className='space-y-2 md:border-l border-white/40 md:pl-8'>
                                {renderGroupedMembers(festivalOtherMembers)}
                            </div>
                        </div>
                    </article>

                    <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-white/40 pt-6 md:pt-8'>
                        {secondRowDivisions.map((division) => divisionCard(division))}
                    </div>

                    <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/40 pt-6 md:pt-8'>
                        {thirdRowDivisions.map((division) => divisionCard(division))}
                    </div>

                    <div className='grid w-full grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/40 pt-6 md:pt-8'>
                        {competitionDivisions.map((division) => divisionCard(division))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PanitiaAjisaka
