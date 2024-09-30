'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';

const MainPage = () => {
    const route = useRouter();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">This is Home Page</h1>

            <button 
                onClick={() => route.push('/apply')} 
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out mb-4"
            >
                Go to Apply Page
            </button>

            <button 
                onClick={() => route.push('/jobs')} 
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300 ease-in-out mb-4"
            >
                Go to Jobs Page
            </button>

            <button 
                onClick={() => route.push('/contact')} 
                className="bg-purple-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out"
            >
                Go to Contact Page
            </button>
        </div>
    );
}

export default MainPage;
