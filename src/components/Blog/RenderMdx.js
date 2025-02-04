"use client"
import React from 'react'
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from 'next/image'
import Banner_480 from '@/src/banners/banner_480'


const mdxComponents = {
    Image
}


const RenderMdx = ({blog}) => {

     const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div className='col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    '> 
        <Banner_480 />
       <MDXContent components={mdxComponents} /> 
       <script async="async" data-cfasync="false" src="//affordspoonsgray.com/f4ff0ecd67035dbb714b6ca3094a8538/invoke.js"></script>
        <div id="container-f4ff0ecd67035dbb714b6ca3094a8538"></div>
    </div>
  )
}

export default RenderMdx