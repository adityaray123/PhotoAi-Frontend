import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt=""  className='w-80 xl:w-96 rounded-lg '/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'> Introducing the AI-Powered TExt to Image Generator</h2>
                <p className='text-gray-600 mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse corrupti debitis eveniet error. Maiores tempora natus reiciendis corporis sint nihil, cum labore officiis, minima eius blanditiis eos dolores nesciunt praesentium cupiditate ab illo ullam? Quibusdam eum aperiam adipisci qui fugiat?
                </p>
                <p className='text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae et temporibus quis sint fugit nesciunt rerum possimus provident impedit repellat, reiciendis itaque voluptatem odio quaerat, debitis consequuntur veritatis labore aperiam autem. Ut quas error rerum dolore, enim inventore odit eos blanditiis recusandae consequuntur, quo molestias commodi nisi voluptas temporibus!
                </p>
            </div>
        </div>

    </div>
  )
}

export default Description
