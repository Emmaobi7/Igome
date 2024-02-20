const express = require('express');
const flutterwaveRouter = express.Router();

flutterwaveRouter.post("/flw-webhook", async (req, res) => {
    // Verify webhook signature
    const secretHash = process.env.FLW_SECRET_HASH;
    const signature = req.headers["verif-hash"];
    if (!signature || (signature !== secretHash)) {
        // Invalid signature; discard request
        res.status(401).end();
        return;
    }
    
    // Process webhook payload
    const payload = req.body;
    console.log(payload);
    
    // Handle event based on payload
    // Example: Verify transaction
    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
    const response = await flw.Transaction.verify({id: payload.id});
    if (response.data.status === "successful") {
        // Transaction was successful
        // Handle accordingly
    } else {
        // Transaction failed
        // Handle accordingly
    }
    
    // Respond with success status
    res.status(200).end();
});

module.exports = flutterwaveRouter;