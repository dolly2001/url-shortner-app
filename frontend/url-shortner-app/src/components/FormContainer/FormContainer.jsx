import React, { useState } from 'react'
import axios from 'axios'
import { serverUrl } from '../../Helpers/Constant.jsx'

const FormContainer = (props) => {
    const {updateReloadState} = props

    const [fullUrl, setFullUrl] = useState("")
    const hanelSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/shortUrl`, {
                fullUrl : fullUrl
            })
            setFullUrl("");
            updateReloadState()
        } catch (error) {
            console.log("Error in getting link-->", error)
        }
    }

    return (
        <div className='container mx-auto p-2'>
            <div className='my-8 rounded-xl bg-cover bg-center' >
                <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50' style={{ backgroundImage: 'url("/src/assets/pexels-apasaric-325185.jpg")' }}>
                    <h2 className='text-black font-semibold text-4xl text-center pb-4'>URL Shortner</h2>
                    <p className='text-black text-center pb-2 text-xl '>Paste your link here in order to get shorten link</p>
                    <p className='text-black text-center pb-4 text-sm font-mono'>Free Tool to shorten a URL or reduce link, Use our URL shortner to create a shortened &  neat link making it easy to share...</p>
                    <form onSubmit={hanelSubmit}>
                        <div className='flex'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-2  pointer-events-none text-slate-600'>URL_Shortner.link /</div>
                                <input 
                                type="text" 
                                placeholder='paste your link' required 
                                className='block  w-full p-4 ps-40 text-sm text-gray-800 border border-gray-400 rounded-lg bg-white focus:ring-blue-400 focus:border-blue-700 '
                                 value={fullUrl}
                                 onChange={(e) => setFullUrl(e.target.value)}
                                />

                                <button className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black bg-blue-700 rounded-lg border border-blue-400 focus:right-4 focus:outline-none focus:ring-blue-300' type='submit'>Short URL</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormContainer