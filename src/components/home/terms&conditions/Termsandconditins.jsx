import React from 'react'
import './Termsandconditions.css'
import {Link} from 'react-router-dom'



const Termsandconditions = () => {
  return (
    <div className='terms-container'>
      <div className="terms-content">
        <h2>📄 Terms and Conditions – Groomz</h2>
        <p className="intro">
          Welcome to Groomz! Please read the following terms and conditions carefully before availing our rental services.
        </p>

        <div className="term">
          <h4>1. Rental Duration</h4>
          <p>Standard rental duration is <strong>3 days</strong>, including pick-up and return days. Extensions must be requested in advance and may incur additional charges.</p>
        </div>

        <div className="term">
          <h4>2. Booking and Payment</h4>
          <p>A <strong>50% advance payment</strong> is required at the time of booking. Full payment must be completed before pickup. All payments are non-refundable once the rental has been picked up.</p>
        </div>

        <div className="term">
          <h4>3. Security Deposit</h4>
          <p>A <strong>refundable security deposit</strong> is collected at the time of delivery/pickup. The deposit will be refunded after inspection upon timely return and no damages.</p>
        </div>

        <div className="term">
          <h4>4. Pickup & Return</h4>
          <p>Items must be picked up and returned at the specified date and time. Late returns will be charged <strong>₹X per day</strong> (amount based on item).</p>
        </div>

        <div className="term">
          <h4>5. Damage & Loss</h4>
          <p>Customers are responsible for any <strong>damage, loss, or stains</strong> on the rented items. Repair/replacement costs will be deducted from the security deposit or charged additionally.</p>
        </div>

        <div className="term">
          <h4>6. Fittings & Alterations</h4>
          <p>We provide temporary adjustments where needed, but permanent alterations are not allowed. Please inform us in advance for custom fittings or special requests.</p>
        </div>

        <div className="term">
          <h4>7. Hygiene Assurance</h4>
          <p>All garments are <strong>professionally cleaned and sanitized</strong> after every use.</p>
        </div>

        <div className="term">
          <h4>8. Usage Restrictions</h4>
          <p>Rented items must be used only for <strong>personal events</strong> and cannot be sub-rented or used for commercial shoots unless approved.</p>
        </div>

        <div className="term">
          <h4>9. Cancellation & Refunds</h4>
          <p>Cancellations made <strong>7 days before the event</strong> are eligible for partial refunds. No refunds will be issued for cancellations made <strong>within 3 days</strong> of the event.</p>
        </div>

        <div className="term">
          <h4>10. Groomz Rights</h4>
          <p>Groomz reserves the right to cancel or refuse any rental service in case of unforeseen circumstances, misuse, or policy violations.</p>
        </div>

        <p className="conclusion">
          By renting with Groomz, you agree to these terms and conditions. Our goal is to provide you with a stress-free, stylish experience while maintaining care and respect for our apparel collection.
        </p>

        <Link className='links' to={'/'}>Back</Link>
      </div>
    </div>
  )
}

export default Termsandconditions
