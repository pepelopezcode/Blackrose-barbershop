import React from 'react'
import { StorefrontImage } from './Images'

function HomePage() {
  return (
    <div className='grid justify-items-center py-5 bg-slate-200' >
        <img src={StorefrontImage} alt='mainPic' className='py-5 w-full h-96 ' />

        <div className='grid justify-items-center gap-4 grid-cols-2' >
            <p className='p-20' >adfghbasidfbgji basdgbsad bghbsadlgblhj sadfbgj hsbadfghjlbsfhabg sdkjfbjksadbfa sdjfbn bjads kjhbsadvb hdsbahb vdshabvfgh s dfbvhsdbaf vhbsadfhgbshafdbghsabdfg</p>
            <img src={StorefrontImage} alt='pic1' />
        </div>
        <div className='grid justify-items-center gap-4 grid-cols-2' >
        <img src={StorefrontImage} alt='pic2' />
        <p className='p-20' >adfghbasidfbgji basdgbsad bghbsadlgblhj sadfbgj hsbadfghjlbsfhabg sdkjfbjksadbfa sdjfbn bjads kjhbsadvb hdsbahb vdshabvfgh s dfbvhsdbaf vhbsadfhgbshafdbghsabdfg</p>
        </div>
        <div className='grid justify-items-center gap-4 grid-cols-2' >
            <p className='p-20' >adfghbasidfbgji basdgbsad bghbsadlgblhj sadfbgj hsbadfghjlbsfhabg sdkjfbjksadbfa sdjfbn bjads kjhbsadvb hdsbahb vdshabvfgh s dfbvhsdbaf vhbsadfhgbshafdbghsabdfg</p>
            <img src={StorefrontImage} alt='pic3' />
        </div>
    </div>
    
  )
}

export default HomePage