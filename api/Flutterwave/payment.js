const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);


flw.Misc.bvn({bvn: "123456789010"})
    .then(response => {
        console.log(response);
        // Handle response
    })
    .catch(error => {
        console.error(error);
        // Handle error
    });


    const response = await got.post("https://api.flutterwave.com/v3/payments", {
        headers: {
            Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
        },
        json: {
            // other fields...
            bank_transfer_options: {
                
                expires: 3600
            },
            payment_options:{ "card, ussd, mpesa"
        }
        }
    });