class AppController{
  static get(req, res) {
    const { user } = req
    res.send(user.email)
  }
}


module.exports = AppController;
