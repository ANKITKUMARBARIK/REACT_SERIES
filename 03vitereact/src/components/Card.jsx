import React from 'react'

// "Unknown Page" = default value
function Card({ userPage, userBtn = "Unknown Page" }) {
    // fucntion Card(props) -> console.log(props.loginPage)
    console.log(userPage)
    return (
        <>
            <div className="flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-black rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-50 mb-6 text-center">{userPage}</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border text-gray-300  rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        <button className="w-full bg-gray-200 hover:bg-gray-100 text-black font-medium py-2.5 rounded-lg transition-colors">
                            {userBtn}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?
                        <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card