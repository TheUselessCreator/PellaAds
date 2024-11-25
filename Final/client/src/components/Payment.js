import React, { useEffect, useState } from 'react';
import { fetchPayments } from '../services/adApi';

const Payment = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPayments = async () => {
            try {
                const paymentData = await fetchPayments();
                setPayments(paymentData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadPayments();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Payment History</h2>
            <ul>
                {payments.map(payment => (
                    <li key={payment._id}>{payment.amount} - {payment.paymentStatus}</li>
                ))}
            </ul>
        </div>
    );
};

export default Payment;
