require('dotenv').config();
const axios = require('axios')

// this class is implemeted using the PAYSTACK api

class PayMentApi{
    constructor() {
    this.baseUrl = 'https://api.paystack.co'
    this.options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`}}
    this.initializeTransaction = this.initializeTransaction.bind(this);
    this.getBalance = this.getBalance.bind(this);
    }

    async initializeTransaction(req, res) {
      const { email, amount } = req.body
      const params = {email: email, amount: amount * 100}
      const options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 'Content-Type': 'application/json'}}
      try {
        const paystackRes = await axios.post(`${this.baseUrl}/transaction/initialize`, params, options)
	return res.status(200).json({message: paystackRes.data})
      } catch(err) {
        console.log(err.message)
      }
    }

  async verifyTransaction(req, res) {
    // database call to get reference which would be stored to db
    const options = this.options;
    try{
      const verifyRes = await axios.get(`${this.baseUrl}/transaction/verify/${reference}`, options)
      return res.status(200).json({message: verifyRes.data})
    } catch (err) {
      return res.status(500).json({error: 'internal server error'})
    }
  }

  async getAllTransactions(req, res) {
    const options = this.options;
    try{
      const allTransactions = await axios.get(`${this.baseUrl}/transaction`, options)
      return res.status(200).json({message: allTransactions.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async getTransactionById(req, res) {
    const id = request.params.id
    const options = this.options
    try {
      const transaction = await axios.get(`${this.baseUrl}/transaction/${id}`, options)
      return res.status(200).json({message: transaction.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async createCustomer(req, res) {
    const { email, firstName, lastName, phone} = req.body;
    const params = {email: email, first_name: firstName, last_name: lastName, phone: phone}
    const options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 'Content-Type': 'application/json'}}

    try {
      const createCustomerRequest = await axios.post(`${this.baseUrl}/customer`)
      return res.status(200).json({message: createCustomerRequest.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async getAllCustomers(req, res) {
    const options = this.options;
    try {
      const allCustomers = await axios.get(`${this.baseUrl}/customer`)
      return res.status(200).json({message: allCustomers.data})
    } catch (err) {
      console.log(err.message)
    }  
  }

  async getCustomer(req, res) {
    const emailOrcode = req.params.email_or_code;
    const options = this.options
    try {
      const customer = await axios.get(`${this.baseUrl}/customer/${emailOrcode}`, options)
      return res.status(200).json({message: customer.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async getBalance(req, res) {
    const options = this.options;
    try {
      const balance = await axios.get(`${this.baseUrl}/balance`, options)
      return res.status(200).json({message: balance.data})
    } catch(err) {
      console.log(err.message)
    }
  }
}





const paymentApi = new PayMentApi()
module.exports =  paymentApi;
