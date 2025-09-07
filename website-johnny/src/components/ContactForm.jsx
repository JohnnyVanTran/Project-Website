import React, {useState} from "react";
import '../component-styling/ContactForm.css'

function ContactForm() {

    const [formData, setFormData] = useState({
        email: '',
        query: '',
        message: ''
    });

    const [messageCount, setMessageCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
        ...prevData,
        [name]: value
        }));

        if (name === 'message') {
        setMessageCount(value.length);
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would handle the form submission, e.g., send data to a server.
    // For this example, we'll just log the data to the console.
    console.log('Form data submitted:', formData);

    // You could also add a check here for the character limit
    if (messageCount > 200) {
      console.error('Message exceeds 200 characters.');
      return;
    }

    // Reset the form
    setFormData({
      email: '',
      query: '',
      message: ''
    });
    setMessageCount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email Field */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Query Field */}
      <div>
        <label htmlFor="query">Query</label>
        <select
          id="query"
          name="query"
          value={formData.query}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your query type</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Billing">Billing</option>
          <option value="Feedback">Feedback</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={200}
          rows={4}
        ></textarea>
        <p>{messageCount} / 200 characters</p>
      </div>

      {/* Submission Button */}
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;