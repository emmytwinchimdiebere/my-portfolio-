import React from 'react'
import SectionPage from './sectionPage'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='w-[100%] top-10 h-auto px-5 flex justify-center items-center relative py-4 bg-gray-900'>
        <SectionPage className='relative top-10 '>{" "}</SectionPage>
        <div className='leading-[10px] text-[1rem] lg:text-[1.2rem] font-light text-white tracking-wide py-[20px]' >
            <span>&copy;2023 rockycodes  All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer