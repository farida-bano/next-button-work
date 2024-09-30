'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation'

const ApplyPage =()=>{
    const route= useRouter()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Apply Page</h1>
            <button 
                onClick ={()=>route.push ('/')} 
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
            >
                Go to Home Page
            </button>
        </div>
    )
}
export default ApplyPage

