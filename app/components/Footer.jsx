import React from 'react'
import Link from "next/link";
import WiktionaryIcon from '../svg/wiktionary.svg'

export const Footer = () => {
    return (
        <div className="mt-10 flex items-center gap-2 text-sm text-gray-400">
            <span className="pb-px">Powered by</span>
            <WiktionaryIcon />
            <div className="w-[2px] h-4 bg-gray-200"></div>
            <Link href="https://www.kimkorngmao.com/" className="hover:text-gray-500 duration-200" rel="noopener noreferrer" target="_blank">Korng</Link>
            <div className="w-[2px] h-4 bg-gray-200"></div>
            <Link href="https://github.com/kimkorngmao/" className="hover:text-gray-500 duration-200" rel="noopener noreferrer" target="_blank">GitHub</Link>
        </div>
    )
}
