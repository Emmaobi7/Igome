## api Documentation

* To be able run this apllication on your machine run `npm install` as you get the json file in the api dir
* To start the backend of this api run the command `npm run start-server` inside the api directory



======
<h1>Authentication</h1>
======
## firebase

* we leveraged firebase authentication system for this application.
* Using react create-app we got user credentials and using the javascript sdk securely registered our users.
* on our server side we made sure to verify every request using a middleware giving acces to authenticated.users only 
* This involves a multi step authentication process in:
<li>
<ol>sign up</ol>
<ol>Verify email</ol>
<ol>Login</ol>
</li> 

* Also an account recovery system in cases of FORGOTTEN PASSWORD.
<h5>note: this means u need the frontend and backend to use this api.</h5>


======
<h1>Database</h1>

## mongodb

* mongodb was used as our persitence agent for its flexible structure
* The database configurations can be found in the utils folder of this api
* storing name, email of user and.......



=======
<h1>Payment</h1>

##Paystack

* phewww to the fun part
* we leveraged the awesome paystack api for all transactions on this application
* The endpoints we consumed include:
* heres the link to the paystack api docs   `https://paystack.com/docs/api/`
<li>
<ul>The initialization endpoint</ul>



```
    const https = require('https')

    const params = JSON.stringify({
    "email": "customer@email.com",
    "amount": "20000"
    })

    const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
        Authorization: 'Bearer SECRET_KEY',
        'Content-Type': 'application/json'
    }
    }

    const req = https.request(options, res => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk
    });

    res.on('end', () => {
        console.log(JSON.parse(data))
    })
    }).on('error', error => {
    console.error(error)
    })

    req.write(params)
    req.end()
```


<ul>The verify endpoint</ul>
<ul>The Balance endpoint</ul>
<ul>The Transactions list  endpoint</ul>
</li>


<p>Feel free to fork this repo we are ready to here from you devs.</p>