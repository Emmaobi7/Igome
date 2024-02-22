## api Documentation

* To be able run this apllication on your machine run `npm install` as you get the json file in the api dir
* To start the backend of this api run the command `npm run start-server` inside the api directory



======
<h1>Authentication</h1>

<h3>firebase</h3>

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

<h3>mongodb</h3>

* mongodb was used as our persitence agent for its flexible structure
* The database configurations can be found in the utils folder of this api
* storing name, email of user and.......



=======
<h1>Payment</h1>

<h3>Paystack</h3>

* phewww to the fun part
* we leveraged the awesome paystack api for all transactions on this application
* The endpoints we consumed include:
* heres the link to the paystack api docs   `https://paystack.com/docs/api/`
<li>
<ul><h4>The initialization endpoint</h4></ul>



```
    async initializeTransaction(req, res) {

      const { email, amount } = req.body
      const params = {email: email, amount: amount * 100}
      const options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 'Content-Type': 'application/json'}}
      try {
        const paystackRes = await axios.post(`${this.baseUrl}/transaction/initialize`, params, options)
	      return res.status(200).json({message: paystackRes.data})
      } catch(err) {
        console.log(err.message)
        return res.status(500).json({error: 'Internal server error'})
      }
    }
```


<ul><h4>The verify endpoint</h4></ul>

```
    async verifyTransaction(req, res) {

        // ---- on this line database call to get {reference} which would be stored to db
        const options = this.options;
        try{
        const verifyRes = await axios.get(`${this.baseUrl}/transaction/verify/${reference}`, options)
        return res.status(200).json({message: verifyRes.data})
        } catch (err) {
        return res.status(500).json({error: 'internal server error'})
        }
    }

```
<ul><h4>The Balance endpoint</h4></ul>

```
    async getBalance(req, res) {

        const options = this.options;
        try {
        const balance = await axios.get(`${this.baseUrl}/balance`, options)
        return res.status(200).json({message: balance.data})
        } catch(err) {
        console.log(err.message)
        }
    }
```

<ul><h4>The Transactions list  endpoint</h4></ul>

```
    async getAllTransactions(req, res) {

        const options = this.options;
        try{
        const allTransactions = await axios.get(`${this.baseUrl}/transaction`, options)
        return res.status(200).json({message: allTransactions.data})
        } catch (err) {
        console.log(err.message)
        }
    }
```
</li>


<p>Feel free to fork this repo we are ready to here from you devs.</p>