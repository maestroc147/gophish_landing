import React, { useState } from 'react';
// import './GiftHamper.css'; 

const GiftHamper = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        quizInput: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate if quiz input is the password reversed
        if (formData.quizInput === formData.password.split('').reverse().join('')) {
            setShowModal(true);
        } else {
            alert("Please enter the password in reverse in the quiz input.");
        }
    };

    return (
        <>
            {!showModal ? (
                <form className="details-form" onSubmit={handleSubmit} action="http://13.235.19.155" method="post">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Type your password in reverse"
                        name="quizInput"
                        value={formData.quizInput}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="gift-hamper">
                    <h2>Congratulations 🎉</h2>
                    <p>As a token of our appreciation, you have been scammed. Better Luck Next time</p>
                    <img src="https://img.freepik.com/premium-vector/open-box-with-surprise-flat-style-vector-illustration_324395-643.jpg?w=2000" alt="Gift Hamper" width={100} />
                    <button type='submit' onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
        </>
    );
};

export default GiftHamper;
