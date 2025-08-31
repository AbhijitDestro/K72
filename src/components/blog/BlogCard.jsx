import React from 'react'

const BlogCard = (props) => {
    const image = props.image1 || props.image2;
    
    return (
        <div className='overflow-hidden h-full cursor-pointer rounded-2xl'>
            <img className='h-full w-full object-cover transition-transform duration-300 hover:scale-110' src={image} alt="" />
        </div>
    )
}

export default BlogCard