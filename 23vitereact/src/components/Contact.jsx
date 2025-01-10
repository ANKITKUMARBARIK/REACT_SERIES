import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

    async function onHandleSubmit(data) {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log('submitting the form ', data)
    }

    return (
        <>

            <section className="py-16 bg-gray-900">
                <div className="max-w-4xl mx-auto px-6 sm:px-12">
                    <h2 className="text-4xl font-bold text-center text-gray-200 mb-8">Get In Touch</h2>
                    <p className="text-lg text-gray-200 text-center mb-6">
                        If you have any questions or just want to say hello, feel free to contact us using the form below.
                    </p>

                    <form onSubmit={handleSubmit(onHandleSubmit)} className="bg-black shadow-lg rounded-lg p-8">
                        <div className="mb-6">
                            <label className="block text-gray-200 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                className="bg-gray-900 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter your name"
                                {...register('name', {
                                    required: true,
                                    minLength: { value: 3, message: 'atleast 3 chars..!!' },
                                    maxLength: { value: 20, message: 'atmost 20 chars..!!' },
                                    pattern: { value: /^[A-Za-z]+$/i, message: 'name is not as per the rules' }
                                })}
                            />
                            {errors.message && <p>{errors.name.message}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-200 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                className="bg-gray-900 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: true,
                                    minLength: { value: 3, message: 'atleast 3 chars..!!' },
                                    maxLength: { value: 20, message: 'atmost 20 chars..!!' }
                                })}
                            />
                            {errors.message && <p>{errors.email.message}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-200 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                className="bg-gray-900 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Write your message here..."
                                {...register('textarea', {
                                    required: true,
                                    minLength: { value: 3, message: 'atleast 3 chars..!!' },
                                    maxLength: { value: 50, message: 'atmost 50 chars..!!' },
                                })}
                            ></textarea>
                            {errors.message && <p>{errors.textarea.message}</p>}
                        </div>

                        <button disabled={isSubmitting} value={isSubmitting ? 'Submitting' : 'Submit'}
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact