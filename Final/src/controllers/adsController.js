import adService from '../services/adService.js';
import adViewService from '../services/adViewService.js';
import responseHandler from '../utils/responseHandler.js';

export const createAd = async (req, res) => {
    try {
        const ad = await adService.createAd(req.body);
        responseHandler.sendSuccess(res, ad);
    } catch (error) {
        responseHandler.sendError(res, error);
    }
};

export const getRandomAd = async (req, res) => {
    try {
        const ad = await adService.getRandomAd();
        responseHandler.sendSuccess(res, ad);
    } catch (error) {
        responseHandler.sendError(res, error);
    }
};

export const getAllAds = async (req, res) => {
    try {
        const ads = await adService.getAllAds();
        responseHandler.sendSuccess(res, ads);
    } catch (error) {
        responseHandler.sendError(res, error);
    }
};

export const logAdView = async (req, res) => {
    try {
        const { adId } = req.body;
        const view = await adViewService.logAdView(adId);
        responseHandler.sendSuccess(res, view);
    } catch (error) {
        responseHandler.sendError(res, error);
    }
};
