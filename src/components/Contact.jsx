import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'

function Contact(props) {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value }}) => {
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'dasdasdasfg',  // This is mock servidceID. Enter your serviceID here.
                'dakshdjaskf', // This is mock templateID. Enter your serviceID here.
                {
                    from_name: form.name,
                    to_name: 'Namir Garib',
                    from_email: form.email,
                    reply_to: form.email,
                    to_email: 'namirgarib@gmail.com',
                    message: form.message
                },
                'asknjfdanfk'); // This is mock API key. Write your key here.

            setLoading(false);

            alert('Your email has been sent.')
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch(error) {
            setLoading(false);

            alert('Something went wrong.');
        }

    }


    return (
        <section className="c-space">
            <div className="video-container">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src="/assets/videos/placeholder-video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="contact-content mb-20">
                    <div className="min-h-screen flex items-center justify-center flex-col">
                        <div className="contact-container glass-background rounded-2xl py-10 px-6 overflow-y-auto">
                            <h3 className="head-text">Let us talk</h3>
                            <p className="text-sm font-light text-white mt-3">
                                Whether you are looking to build a new website, improve your existing platform,
                                bring a unique project to life, or just say hi, I am here to listen.
                            </p>
                            <form ref={formRef} onSubmit={handleSubmit} className="mt-5 mb-10 flex flex-col space-y-7">
                                <label className="space-y-3">
                                    <span className="field-label">Full Name</span>
                                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                                           className="field-input" placeholder="Full Name"/>
                                </label>
                                <label className="space-y-3">
                                    <span className="field-label">Email</span>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                                           className="field-input" placeholder="example@example.com"/>
                                </label>
                                <label className="space-y-3">
                                    <span className="field-label">Your message</span>
                                    <textarea name="message" value={form.message} onChange={handleChange} required
                                              rows={5}
                                              className="field-input" placeholder="Hi, I wanna give you a job..."/>
                                </label>
                                <button className="field-btn" type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Message'}&nbsp;&nbsp;
                                    <img src="/assets/images/arrow-up.png" alt="arrow-up"
                                         className="field-btn_arrow w-2.5 h-2.5"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;