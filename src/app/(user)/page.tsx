import React from 'react'
import Banner from '@/components/Banner'
import { groq } from 'next-sanity'
import { client } from '../lib/sanityClient';

export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const HomePage = async () => {
  const banners = await client.fetch(bannerQuery)
  return (
    <main className='text-sm overflow-hidden min-h-screen'>
      <Banner banners={banners} />
    </main>
  )
}

export default HomePage