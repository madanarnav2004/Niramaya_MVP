import React from 'react';
import './style.css';

function OrderSummary({ formData }) {
  const { surgeryType, flight, stay, hospital } = formData;
  const [commissionRate, donationRate] = [0.05, 0.01];

  // Calculate total cost
  const flightPrice = parseFloat(flight?.price) || 0;
  const stayPrice = parseFloat(stay?.price) || 0;
  const totalCost = flightPrice + stayPrice;
  const commissionAmount = totalCost * commissionRate;
  const totalWithCommission = totalCost + commissionAmount;
  const donationAmount = totalWithCommission * donationRate;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Surgery Type:</strong></td>
            <td>{surgeryType || 'Not selected'}</td>
          </tr>
          <tr>
            <td><strong>Flight:</strong></td>
            <td>{flight ? `${flight.name} - ${flight.price}` : 'Not selected'}</td>
          </tr>
          <tr>
            <td><strong>Stay:</strong></td>
            <td>{stay ? `${stay.name} - ${stay.price}` : 'Not selected'}</td>
          </tr>
          <tr>
            <td><strong>Hospital:</strong></td>
            <td>{hospital ? `${hospital.name} - ${hospital.location}` : 'Not selected'}</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ borderTop: '1px solid #ddd' }}></td>
          </tr>
          <tr>
            <td><strong>Total Cost:</strong></td>
            <td>${totalCost.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Commission (5%):</strong></td>
            <td>${commissionAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Total with Commission:</strong></td>
            <td>${totalWithCommission.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Donation (1%):</strong></td>
            <td>${donationAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderSummary;
