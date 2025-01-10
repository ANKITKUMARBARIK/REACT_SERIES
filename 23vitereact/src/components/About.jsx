import React from 'react'

function About() {
    return (
        <>
            <div className="bg-gray-900">
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6 sm:px-12">
                        <h2 className="text-4xl font-bold text-center text-gray-200 mb-8">Who We Are</h2>
                        <p className="text-lg text-gray-200 text-center mb-6">
                            We are a team of passionate developers working on building amazing web experiences. Our mission is to make the web more accessible and user-friendly for everyone.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="text-center">
                                <img
                                    src="https://images.pexels.com/photos/4195344/pexels-photo-4195344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Team Member" width={300}
                                    className="mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-gray-200">John Doe</h3>
                                <p className="text-gray-200">Founder & CEO</p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="https://images.pexels.com/photos/8372541/pexels-photo-8372541.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                    alt="Team Member" width={300}
                                    className="mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-gray-200">Jane Smith</h3>
                                <p className="text-gray-200">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About