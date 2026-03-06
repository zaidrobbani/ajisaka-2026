import React from 'react'

    const MainLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='w-full min-h-screen flex flex-col items-start justify-start overflow-hidden bg-primary-100 relative flex-1  '>
                

            {children}

        </main>
    )
}

export default MainLayout
