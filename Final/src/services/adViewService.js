import AdView from '../models/adViewModel.js';
import { config } from '../config/config.js';

const adViewService = {
    logAdView: async (adId) => {
        const view = new AdView({ adId, userId: null, payout: config.PAYOUT_RATE });
        await view.save();
        return view;
    }
};

export default adViewService;
