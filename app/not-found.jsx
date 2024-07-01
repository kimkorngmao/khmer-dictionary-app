import React from 'react'
import { SearchBar } from './components/SearchBar'
import Link from 'next/link'

export default function NotFoundPage () {
  return (
    <>
        <div className='max-w-screen-md mx-auto p-4'>
            <Link href="/" className='mt-10 block'>
                <h1 className="moul text-center text-gray-800 text-2xl mb-5 moul-regular">វចនានុក្រមខ្មែរ</h1>
            </Link>
            <SearchBar/>
            <p className='mt-10 text-gray-400'>404 - មិនមានទំព័រនេះទេ...</p>
        </div>
    </>
  )
}