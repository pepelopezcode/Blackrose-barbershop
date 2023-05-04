import React from 'react'

function Reviews() {
  return (
    <div className='grid justify-items-center bg-slate-400' >
        <p className='text-3xl' >Reviews</p>
        <div className='grid justify-items-center gap-5 grid-cols-3 bg-slate-300' >
            <p className=' m-6 p-4 bg-white'>"I have been going to this barbershop for years and I'm always impressed by the quality of the haircuts and the friendly service. The barbers really take the time to listen to what you want and give you a personalized haircut that looks great every time."</p>
            <p className=' m-6 p-4 bg-white'>"This barbershop has a great atmosphere and a really talented team of barbers. They use high-quality products and always make sure that you leave with a haircut that you're happy with. I would highly recommend this barbershop to anyone looking for a great haircut and a welcoming environment."
            -pepe</p>
            <p className=' m-6 p-4 bg-white' >"I recently tried this barbershop for the first time and I was blown away by the level of service and attention to detail. The barbers were very friendly and professional, and they took the time to make sure that I was completely satisfied with my haircut. I will definitely be coming back here for my next haircut!"</p>
        </div>
        </div>
  )
}

export default Reviews