// contact.tsx

import React, { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        interest: '',
        message: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        }
    };

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {

        const target = event.target as HTMLInputElement;
        const { name, value } = target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-5 text-center">Contact Me</h1>
            <p className="text-center text-xl mb-10">
                Want to work with me? Feel free to reach out through the contact form, and let's get some <s>shit</s> done.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-foreground p-8 rounded-lg shadow-md">
                    <h2 className="text-background text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="text-background mb-4">Fill up the form and I will get back to you within 24 hours.</p>
                    <p className="text-background mb-2"><i className="fas fa-phone-alt"></i> +91 78519 22204</p>
                    <p className="text-background mb-2"><i className="fas fa-envelope"></i> harshilsharma.dev@gmail.com</p>
                    <div className="flex space-x-4">
                        <a href="#" className=""><i className="fab fa-twitter fa-lg"></i></a>
                        <a href="#" className=""><i className="fab fa-linkedin fa-lg"></i></a>
                        <a href="#" className=""><i className="fab fa-dribbble fa-lg"></i></a>
                        <a href="#" className=""><i className="fab fa-facebook fa-lg"></i></a>
                    </div>
                </div>
                <div className="bg-background p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-medium text-sm mb-2" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md"
                                    id="first-name"
                                    type="text"
                                    placeholder="Lucas"
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-sm mb-2" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md"
                                    id="last-name"
                                    type="text"
                                    placeholder="Jones"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md"
                                id="email"
                                type="email"
                                placeholder="lucas@mail.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2">
                                What are you interested in?
                            </label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="interest" value="design" />
                                    <span className="text-sm ml-2"> Design</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="interest" value="development" />
                                    <span className="text-sm ml-2">Development</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="interest" value="support" />
                                    <span className="text-sm ml-2">Support</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="interest" value="other" />
                                    <span className="text-sm ml-2">Other</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md"
                                id="message"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button
                            className="bg-foreground text-background px-4 py-2 rounded-md"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
