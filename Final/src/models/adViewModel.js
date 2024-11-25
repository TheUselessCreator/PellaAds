import mongoose from 'mongoose';

const adViewSchema = new mongoose.Schema({
    adId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ad', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    payout: { type: Number, required: true },
}, { timestamps: true });

const AdView = mongoose.model('AdView', adViewSchema);
export default AdView;
