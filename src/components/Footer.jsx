import React, { useState, useEffect } from "react";
import logo from "/images/fnrc_logo.svg";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleChange = (e) => {''
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAgreementChange = () => {
        setAgreed(!agreed);
    };

    const validateForm = () => {
        if (!formData.firstName.trim()) {
            setErrorMessage("First name is required.");
            return false;
        }
        if (!formData.lastName.trim()) {
            setErrorMessage("Last name is required.");
            return false;
        }
        if (!formData.email) {
            setErrorMessage("Email is required.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrorMessage("Email address is invalid.");
            return false;
        }
        if (formData.contactNumber && !/^\d{10,15}$/.test(formData.contactNumber)) {
            setErrorMessage("Contact number should be between 10 and 15 digits.");
            return false;
        }
        if (!formData.message.trim()) {
            setErrorMessage("Message is required.");
            return false;
        }
        if (!agreed) {
            setErrorMessage("You must agree to the data policy.");
            return false;
        }
        setErrorMessage("");
        return true;
    };

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
                setErrorMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    const handleSubmit = async () => {
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const payload = { ...formData, agreed};
            const response = await fetch("/contact.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const result = await response.json();

            if (result.success) {
                setSuccessMessage("Thank you for your message. We'll get back to you shortly.");
                setFormData({ firstName: "", lastName: "", contactNumber: "", email: "", message: "" });
                setErrorMessage("");
                setAgreed(false);
            } else {
                setErrorMessage(result.message || "Error sending message. Please try again.");
                setSuccessMessage("");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("There was an error sending your message.");
            setSuccessMessage("");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <footer>
        <div className={styles.upper_bg}>
                <div className={styles.upper_footer}>
                    <div className={styles.info_container}>
                        <p className={styles.info_title}>Footprints Nursing Review Center: Supporting IENs Transition Into Canadian Nursing</p>
                        <br></br>
                        <p className={styles.info_description}>For over 5 years, Footprints Nursing Review Center has been supporting internationally educated nurses across the globe, guiding them through their journey to becoming registered nurse in Canada. Wherever you are, our expertise and mentorship programs are here to help you achieve your nursing dreams and make a lasting impact in the Canadian healthcare system.</p>
                    </div>
                    
                    <div id="contact-section" className={styles.contact_container}>
                        <p className={styles.info_title}>Contact Us</p>
                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                        <div className={styles.input_container}>
                            <input type="text" name="firstName" placeholder="First Name"
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                            <input type="text" name="lastName" placeholder="Last Name"
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                        </div>
                        <div className={styles.input_container}>
                            <input type="number" name="contactNumber" placeholder="Contact Number"
                                onChange={handleChange}
                                value={formData.contactNumber}
                            />
                            <input type="email" name="email" placeholder="E-mail"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
                        <div className={styles.agreement_container}>
                            <input
                                id="agreement_form"
                                type="checkbox"
                                checked={agreed}
                                onChange={handleAgreementChange}
                            />
                            <label htmlFor="agreement_form">
                            I acknowledge that by submitting this form, I consent to the
                            collection, processing, and storage of the provided personal
                            information for the purpose of communication and assistance
                            regarding my inquiry. I understand that my information will be
                            handled in accordance with applicable privacy laws and the
                            policies of Footprints Nursing Review Center. I also agree that my
                            data may be used for internal record-keeping and analysis. I
                            have read and understood the data policy of Footprints Nursing Review Center and consent to its terms.
                            </label>
                        </div>
                        <input type="button" onClick={handleSubmit} disabled={isSubmitting} value="Submit" />
                    </div>
                </div>
            </div>
            <div className={styles.middle_bg}>
                <div className={styles.middle_footer}>
                    <div>
                    <a href="/"><img loading="lazy" src={logo} alt="logo" /></a>
                    </div>
                    <div className={styles.middle_right_container}>
                        <div className={styles.contact_holder}>
                            <p>Footprints Nursing Review Center</p>
                            <p>379 Columbia Street </p>
                            <p>New Westminster BC, V3L 5T6</p>
                            <p>778-882-9159</p>
                            <p>footprintsnursing@gmail.com</p>
                        </div>
                        <div className={styles.logo_holder}>
                        <a href="https://www.facebook.com/footprintsnursingreviewcenter" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Facebook.svg" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/footprintsnursingreviewcenter/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/footprints-nursing-review-center/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/LinkedIn.svg" alt="LinkedIn" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lower_bg}>
                <p className={styles.copyright}>Copyright © 2019 - 2024 Footprints Nursing Review Center, New Westminster, B.C., Canada</p>
            </div>
        </footer>
    );
};

export default Footer;
