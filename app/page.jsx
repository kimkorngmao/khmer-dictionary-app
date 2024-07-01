import { SearchBar } from "./components/SearchBar";
import WiktionaryIcon from './svg/wiktionary.svg'

export default function Home() {

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-screen-md p-4">
                <h1 className="moul text-gray-800 text-center text-3xl mb-10 moul-regular">វចនានុក្រមខ្មែរ</h1>
                <SearchBar />
                <div className="mt-10 flex items-center gap-2 text-sm text-gray-400">
                <span className="pb-px">Powered by</span>
                <WiktionaryIcon/>
                </div>
            </div>
        </div>
    );
}
