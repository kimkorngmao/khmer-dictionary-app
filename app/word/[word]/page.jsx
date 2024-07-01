"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { SearchBar } from '@/app/components/SearchBar';
import { moul } from '@/app/components/Font';

export default function Word() {
    const { word } = useParams();
    const [definition, setDefinition] = useState('');
    const [loading, setLoading] = useState(true);
    const decodedWord = decodeURIComponent(word);

    useEffect(() => {
        const fetchDefinition = async () => {
            try {
                const response = await axios.get(`https://km.wiktionary.org/w/api.php?action=query&titles=${encodeURIComponent(decodedWord)}&prop=extracts&exintro&explaintext&format=json&origin=*`);
                const page = response.data.query.pages;
                const pageId = Object.keys(page)[0];
                setDefinition(page[pageId].extract);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchDefinition();
    }, [decodedWord]);

    if (loading) {
        return (
        <div className="moul animate-slow-pulse text-xl text-gray-300 max-w-screen-md mx-auto flex items-center justify-center h-screen">
            វចនានុក្រមខ្មែរ
        </div>
        )
    }

    return (
        <div className='max-w-screen-md mx-auto p-4'>
            <Link href="/" className='mt-10 block'>
                <h1 className="moul text-center text-gray-800 text-2xl mb-5 moul-regular">វចនានុក្រមខ្មែរ</h1>
            </Link>
            <SearchBar value={decodedWord} />
            {definition ?
                <>
                    <h1 className='mt-10 text-2xl font-bold text-gray-800'>{decodedWord}</h1>
                    <div className="flex items-center my-5">
                        <h2 className="whitespace-nowrap text-gray-800">និយមន័យ</h2>
                        <div className="flex-grow border-t border-gray-300 ml-2"></div>
                    </div>
                    <p className='text-gray-600'>{definition}</p>
                </>
                :
                <>
                <p className='mt-10 text-gray-400'>រកមិនឃើញពាក្យដែលអ្នកបានស្វែងរក...</p>
                </>
            }
        </div>
    );
}
