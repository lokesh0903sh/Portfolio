import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c1c54a0-3577-4f5a-bd46-528c65342b14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact-form-content'>
        <form onSubmit={onSubmit}>
            <div className='name-container'>
                <input type='text' name='firstName' placeholder='First Name'/>
                <input type='text' name='LastName' placeholder='Last Name'/>
            </div>
            <input type='email' name='email' placeholder='Email'/>
            <textarea type="text" name='message' placeholder='message' rows={3}></textarea>
            <button type='submit'>Send</button>
        </form>
        <span>{result}</span>
    </div>
  )
}

export default ContactForm