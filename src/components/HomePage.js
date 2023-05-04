import React from 'react'
import { StorefrontImage } from '../index'

function HomePage() {
  return (
    <div>
        <img src={StorefrontImage} alt='mainPic' className='' />

        <div className='grid justify-items-center content-center gap-4 grid-cols-2' >
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