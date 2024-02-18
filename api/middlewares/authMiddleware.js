const firebase = require('../firebase/index')


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

module.exports = authMiddleware;
