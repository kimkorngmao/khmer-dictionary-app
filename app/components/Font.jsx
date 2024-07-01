"use client"

import { Moul } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Siemreap } from "next/font/google";

export const siemreap = Siemreap({
    weight: '400',
    subsets: ['khmer'],
});

export const moul = Moul({
    weight: '400',
    subsets: ['khmer'],
});

export const inter = Inter({
    subsets: ['latin']
})

export const Font = () => {
    return (
        <style jsx global>{`
        * {
          font-family: ${inter.style.fontFamily}, ${siemreap.style.fontFamily} ;
        }

        .moul {
          font-family: ${moul.style.fontFamily};
        }
        `}
        </style>
    )
}
