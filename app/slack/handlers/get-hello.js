/**
 * Handler
 * */
const handler = (request, reply) => {
  console.log('test');
  reply({ message: `Slack bot, ${request.params.test}!` })
};

const routeConfig = {
  method: 'GET',
  path: '/slack/hello/{test}',
  config: {
    tags: ['api', 'heartbeat'],
    description: 'Just reply with greetings',
    handler
  }
};

export default (server) => server.route(routeConfig)