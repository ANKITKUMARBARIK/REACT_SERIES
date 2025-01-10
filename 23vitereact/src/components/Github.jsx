import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // Loader ek visual indicator hota hai jo user ko batata hai ki kuch process background mein chal raha hai, jaise data load karna, API se response ka wait karna, ya koi heavy operation complete hone tak ka samay.
    // Loader use karne se user experience smooth aur responsive lagta hai. Jab tak koi asynchronous task (e.g., API call, data fetch, heavy operation) complete ho raha hota hai, loader ek tarah ka feedback deta hai ki "process chal raha hai."
    const data = useLoaderData()           // better way


    // Another way to use fetch - 
    // But some reasons we avoid this way :-
    // Blank Screen Dikhegi: Jab tak API se data nahi aayega, screen blank rahegi, kyunki React render karne ke liye data ka wait nahi karega.
    // Errors Ho Sakte Hain: Tumhara code data ka access karne ki koshish karega, lekin agar data abhi undefined hai, toh error throw karega.Example: "Cannot read properties of undefined".
    // Poor User Experience: User ko lagega ki app freeze ho gaya hai ya kuch work nahi kar raha.
    // Incomplete UI: Kahi jagah UI ka kuch part dikhega, aur kuch nahi, jo unprofessional lagega.

    // const [data, setData] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ANKITKUMARBARIK')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // })

    return (
        <>
            <div className="bg-gray-900 min-h-screen flex justify-center items-center">
                <section className="py-12">
                    <div className="max-w-4xl mx-auto flex items-center justify-center">
                        <div
                            className="bg-black shadow-md rounded-lg p-20 flex flex-col items-center"
                        >
                            <img
                                src={data.avatar_url}
                                alt={data.name}
                                className="w-40 h-40 rounded-full mb-4"
                            />
                            <h2 className="p-4 text-3xl font-semibold text-gray-200">
                                {data.name}
                            </h2>
                            <p className="text-xl text-gray-300">
                                Followers: {data.followers}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Github