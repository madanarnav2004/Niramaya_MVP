import React, { useState } from 'react';
import './style.css';
import OrderSummary from './OrderSummary'; // Import the updated OrderSummary component

// Generate random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Generate random price
const generatePrice = () => {
  return (Math.floor(Math.random() * 500) + 100).toFixed(2);
};

// Sample data for flights, stays, and hospitals
const sampleFlights = [
  { id: generateId(), name: 'Flight from New York to Mumbai', price: generatePrice() },
  { id: generateId(), name: 'Flight from London to Delhi', price: generatePrice() },
  { id: generateId(), name: 'Flight from Paris to Bengaluru', price: generatePrice() },
];

const sampleStays = [
  { id: generateId(), name: '5-Star Hotel in Mumbai', price: `${generatePrice()}/night` },
  { id: generateId(), name: 'Luxury Resort in Goa', price: `${generatePrice()}/night` },
  { id: generateId(), name: 'Heritage Homestay in Jaipur', price: `${generatePrice()}/night` },
];

const sampleHospitals = [
  { id: generateId(), name: 'Mumbai Hospital', location: 'Mumbai, India' },
  { id: generateId(), name: 'Delhi Medical Center', location: 'Delhi, India' },
  { id: generateId(), name: 'Bengaluru Healthcare Clinic', location: 'Bengaluru, India' },
];

function Step1({ onSelectSurgeryType }) {
  return (
    <div>
      <h2>Step 1: Select Surgery Type</h2>
      {/* Dropdown to select surgery type */}
      <select onChange={onSelectSurgeryType}>
        <option value="">-- Select --</option>
        <option value="minimally-invasive">Minimally Invasive</option>
        <option value="total-knee-replacement">Total Knee Replacement</option>
        <option value="partial-knee-replacement">Partial Knee Replacement</option>
      </select>
    </div>
  );
}

function Step2({ onSelectFlight, onToggleVisaAssistance }) {
  const [visaAssistanceNeeded, setVisaAssistanceNeeded] = useState(false);

  const handleVisaAssistanceChange = (event) => {
    setVisaAssistanceNeeded(event.target.checked);
    onToggleVisaAssistance(event.target.checked);
  };

  return (
    <div>
      <h2>Step 2: Select Flight</h2>
      {/* Dropdown to select flight */}
      <select onChange={(event) => onSelectFlight(sampleFlights[event.target.value])}>
        <option value="">-- Select --</option>
        {sampleFlights.map((flight, index) => (
          <option key={flight.id} value={index}>{flight.name} - {flight.price}</option>
        ))}
      </select>
      <div>
        <label>
          Need visa assistance?
          <input type="checkbox" checked={visaAssistanceNeeded} onChange={handleVisaAssistanceChange} />
        </label>
      </div>
    </div>
  );
}

function Step3({ onSelectStay }) {
  return (
    <div>
      <h2>Step 3: Select Stay</h2>
      {/* Dropdown to select stay */}
      <select onChange={(event) => onSelectStay(sampleStays[event.target.value])}>
        <option value="">-- Select --</option>
        {sampleStays.map((stay, index) => (
          <option key={stay.id} value={index}>{stay.name} - {stay.price}</option>
        ))}
      </select>
    </div>
  );
}

function Step4({ onSelectHospital }) {
  return (
    <div>
      <h2>Step 4: Select Hospital</h2>
      {/* Dropdown to select hospital */}
      <select onChange={(event) => onSelectHospital(sampleHospitals[event.target.value])}>
        <option value="">-- Select --</option>
        {sampleHospitals.map((hospital, index) => (
          <option key={hospital.id} value={index}>{hospital.name} - {hospital.location}</option>
        ))}
      </select>
    </div>
  );
}
function Step5({ onSubmit, formData }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [email, setEmail] = useState('');

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Perform any validation or payment processing here
    // For this example, we'll just log the form data and display a thank you message
    console.log('Payment Details:', { cardNumber, expiryDate, cvv, email });
    // Reset form fields
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
    setEmail('');
    // Display thank you message
    alert('Thank you for choosing Niramaya! We will get in touch soon.');
  };

  return (
    <div>
      <h2>Step 5: Payment</h2>
      {/* Display order summary */}
      <OrderSummary formData={formData} />
      {/* Payment form */}
      <form onSubmit={handlePaymentSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" value={cvv} onChange={(event) => setCVV(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <button type="submit">Complete Payment</button>
      </form>
    </div>
  );
}

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    surgeryType: '',
    flight: null,
    stay: null,
    hospital: null,
    visaAssistance: false, // Added visaAssistance field
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSurgeryTypeSelect = (event) => {
    setFormData({
      ...formData,
      surgeryType: event.target.value,
    });
    handleNextStep();
  };

  const handleFlightSelect = (flight) => {
    setFormData({
      ...formData,
      flight,
    });
    handleNextStep();
  };

  const handleStaySelect = (stay) => {
    setFormData({
      ...formData,
      stay,
    });
    handleNextStep();
  };

  const handleHospitalSelect = (hospital) => {
    setFormData({
      ...formData,
      hospital,
    });
    handleNextStep();
  };

  const handleToggleVisaAssistance = (value) => {
    setFormData({
      ...formData,
      visaAssistance: value,
    });
  };

  const handleSubmit = () => {
    // Logic to finalize selections and proceed to payment
    console.log('Form data:', formData);
  };

  return (
    <div className="container">
      {step === 1 && <Step1 onSelectSurgeryType={handleSurgeryTypeSelect} />}
      {step === 2 && <Step2 onSelectFlight={handleFlightSelect} onToggleVisaAssistance={handleToggleVisaAssistance} />}
      {step === 3 && <Step3 onSelectStay={handleStaySelect} />}
      {step === 4 && <Step4 onSelectHospital={handleHospitalSelect} />}
      {step === 5 && <Step5 onSubmit={handleSubmit} formData={formData} />}
      {step > 1 && <button onClick={handlePreviousStep}>Back</button>}
    </div>
  );
}

export default MultiStepForm;
