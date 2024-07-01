import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";

export default function Home() {

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-screen-md p-4">
                <h1 className="moul text-gray-800 text-center text-3xl mb-10 moul-regular">វចនានុក្រមខ្មែរ</h1>
                <SearchBar />
                <Footer />
            </div>
        </div>
    );
}
