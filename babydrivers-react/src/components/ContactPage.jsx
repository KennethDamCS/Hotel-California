import React from 'react'
import ImageCarousel from "./ImageCarousel";
import { contacts_slides } from "./contactsCarousel.json";


const ContactPage = () => {
  return (
    <div className="contact-container">
      <section className="contact-section-container">
        <h2 className='contact-header'>Here to serve your needs in California</h2>
        <div className='float-container'>
      <div className='float-child contact-info-container'>
        <p className="contact-info">
          Phone: 1(800) HTL-CALI
          <br />
          <br />
          Email: customer_service@hotelcali.com
          <br /><br />
          Hours of Operations:<br />
          5:00am PST - 11:00pm PST Monday - Friday<br />
          4:00am PST - 12:00am PST Saturday - Sunday
        </p>
      </div>
      <div className="float-child contact-photos contact-carousel">
        <ImageCarousel data={contacts_slides}></ImageCarousel>
      </div>
    </div>
      </section>
    </div>
  )
}

export default ContactPage