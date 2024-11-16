import { useState } from 'react';
import { sendMessage } from './api';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendMessage(formData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Something went wrong.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
