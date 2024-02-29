## api Documentation


* <h5>note: This app runs on  node version 20</h5>
* To be able run this apllication on your machine run `npm install` as you get the json file in the api dir
* To start the backend of this api run the command `npm run start-server` inside the api directory



======
<h1>Authentication</h1>

<h3>firebase</h3>

* we leveraged firebase authentication system for this application.
* Using react create-app we got user credentials and using the javascript sdk securely registered our users.
* on our server side we made sure to verify every request using a middleware giving acces to authenticated.users only 

```
    // Authentication middleware
    function authMiddleware(request, response, next) {
    const headerToken = request.headers.authorization;
    if(!headerToken) return response.json({error: "No token provided"}).status(401)
    if(headerToken && headerToken.split(" ")[0] !== "Bearer") return response.status(401).json({error: "Missng required token"})
    const token = headerToken.split(" ")[1];
    firebase.auth().verifyIdToken(token)
    .then(function(id) {
        request.user = id;
        next()
    })
    .catch(function(err) {
        console.log(`Error verifying token: ${err}`)
        response.status(403).json({error: 'Invalid token'})
    })
    }

```

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

* on this version it is pretty questionable why using a database, but we persisted anways...wink*** :(
* mongodb was used as our persitence agent for its flexible structure
* We used the mongo driver as opposed to mongoose(real argument at the team meeting), i means its a pretty     basic database
* The database configurations can be found in the utils folder of this api
* storing firstname, lastname, phonenumber and email of a user.
* Our database collects this information on user SIGNUP.


```
    // told ya pretty basic 

    static async createUser(req, res) {
        
            const { firstname, lastname, email, phonenumber } = req.body
            const newUser = {firstname, lastname, email, phonenumber}
            
            try {
                const result = await dbClient.usersCollection.insertOne(newUser);
                console.log(`New user added with ID: ${result.insertedId}`);
                return res.status(200).json({success: 'user created'})
            } catch(err){
                console.log(err)
                return res.status(500).json({error: 'Internal server error'})
            }
        
        }
```



=======
<h1>Payment</h1>

<h3>Paystack</h3>

* phewww to the fun part
* we leveraged the awesome paystack api for all transactions on this application
* The endpoints we consumed include:
* [Paystack API Docs](https://paystack.com/docs/api/)

<li>
<ul><h4>The initialization endpoint</h4></ul>
<p>This endpoint is used to initiate a payment with paystack</p>
<p>It returns back an authorization url which we redirect users to to securely make their payments</p>
<h5>initialize here just means telling paystack, hey i want make a payment yo.</h5>


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
* <h5>NB: we didnt actually use this. it was removed at the last minute</h5>

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
<p>This enpoint is use to retrieve the balance on this paystack integration</p>
<p>yup, how much we got hommie.</p>

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
<p>This endpoint is used to retrive all transactions on this paystack integration</p>
<p>I said, who sent this??</p>

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

<h1>Conclusion</h1>

Thank you for exploring our API documentation! We hope this guide has provided you with the necessary information to seamlessly utilize and even contribute our payment application. If you have any questions, encounter issues, or want to contribute to the project, feel free to reach out. Your feedback and collaboration are highly valued.

Happy coding, and we look forward to hearing from you!

Feel free to fork this repository and tailor it to your needs. We're excited about the possibilities that this payment application can bring to developers, and we welcome your contributions.

Best regards,
[Alx SE cohort 12]


<p>Feel free to fork this repo we are ready to here from you devs.</p>

<h1>contact</h1>
emma46574@gmail.com