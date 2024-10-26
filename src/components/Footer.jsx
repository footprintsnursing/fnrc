import React, { useState } from "react";
import logo from "/images/fnrc_logo.svg";
import styles from "../styles/Footer.module.css";

const Footer =() => {
    const[ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message:""
    })

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Validate form inputs
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

        setErrorMessage(""); // Clear error if all validations pass
        return true;
    };


   // Handle form submission
   const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
        const response = await fetch("/contact.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        const result = await response.json();

        if (result.success) {
            setSuccessMessage("Thank you for your message. We'll get back to you shortly.");
            setFormData({ firstName: "", lastName: "", contactNumber: "", email: "", message: "" });
            setErrors({});
        } else {
            alert(result.message || "Error sending message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error sending your message.");
    }

    setTimeout(() => setIsSubmitting(false), 5000);
};

    return (
        <footer>
            <div className={styles.upper_bg}>
                <div className={styles.upper_footer}>
                    <div className={styles.info_container}>
                        <p className={styles.info_title}>Footprints Nursing Review Center: Supporting IENs Transition Into Canadian Nursing</p>
                        <br></br>
                        <br></br>
                        <p className={styles.info_description}>For over 5 years, Footprints Nursing Review Center has been supporting internationally educated nurses across the globe, guiding them through their journey to becoming registered nurse in Canada. Wherever you are, our expertise and mentorship programs are here to help you achieve your nursing dreams and make a lasting impact in the Canadian healthcare system.</p>
                    </div>
                    
                    <div className={styles.contact_container}>
                        <p className={styles.info_title}>Contact Us</p>
                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                        <div className={styles.input_container}>
                            <input type="text" name="firstName" placeholder="First Name"
                            onChange={handleChange}
                            value={formData.firstName}></input>
                            <input type="text" 
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={formData.lastName}></input>
                        </div>
                        <div className={styles.input_container}>
                            <input type="number" 
                            placeholder="Contact Number"
                            name="contactNumber"
                            onChange={handleChange}
                            value={formData.contactNumber}></input>
                            <input type="email" 
                            placeholder="E-mail"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}></input>
                        </div>
                        <textarea name="message" onChange={handleChange} placeholder="Message" value={formData.message}></textarea>
                        <input type="button" onClick={handleSubmit} disabled={isSubmitting} value="Submit"/>
                    </div>
                </div>
            </div>
            <div className={styles.middle_bg}>
                <div className={styles.middle_footer}>
                    <div>
                        <img src={logo}/>
                    </div>
                    <div className={styles.middle_right_container}>
                        <div className={styles.contact_holder}>
                            <p>Footprints Nursing Review Center</p>
                            <p>889 Carnarvon St. </p>
                            <p>New Westminster, BC V3M 1G2</p>
                            <p>778-882-9159</p>
                            <p>footprintsnursing@gmail.com</p>
                        </div>
                        <div className={styles.logo_holder}>
                            <img src="/images/Facebook.svg"/>
                            <img src="/images/Instagram.svg"/>
                            <img src="/images/LinkedIn.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lower_bg}>
                <p className={styles.copyright}>Copyright © 2019 - 2024 Footprints Nursing Review Center, New Westminister, B.C., Canada</p>
            </div>
        </footer>
    )
}

export default Footer;