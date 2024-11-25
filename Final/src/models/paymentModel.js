import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    adId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ad', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
