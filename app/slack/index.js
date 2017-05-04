import getHello from './handlers/get-hello'

exports.register = (server, options, next) => {
  getHello(server, options)

  return next()
}

exports.register.attributes = {
  name: 'slack'
}