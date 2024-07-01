import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";

export default function Home() {

    return (
        <div className="w-full h-screen flex sm:items-center justify-center">
            <div className="w-full max-w-screen-md py-10 px-4 sm:p-4">
                <h1 className="moul text-gray-800 text-center text-3xl mb-10 moul-regular">វចនានុក្រមខ្មែរ</h1>
                <SearchBar />
                <div className="p-4 my-5 bg-gray-100 border border-gray-200 rounded-md">
                    <p className="text-gray-600 text-sm leading-6">សូមអភ័យទោស! ពាក្យមួយចំនួនអាចនឹងមានបញ្ហាមិនប្រក្រតីកើតមានឡើង ឬមិនមាននៅក្នុងកម្មវិធីដោយពុំទាន់បញ្ចូលក្នុង Wiktionary API នៅឡើយ។</p>
                </div>
                <Footer />
            </div>
        </div>
    );
}
