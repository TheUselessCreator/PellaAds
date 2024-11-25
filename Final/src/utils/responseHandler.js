const responseHandler = {
    sendSuccess: (res, data) => {
        res.status(200).json({ success: true, data });
    },
    sendError: (res, error) => {
        res.status(400).json({ success: false, message: error.message });
    }
};

export default responseHandler;
