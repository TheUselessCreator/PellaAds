import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    targetURL: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    payoutStatus: { type: Boolean, default: false }
}, { timestamps: true });

const Ad = mongoose.model('Ad', adSchema);
export default Ad;
