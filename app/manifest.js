import * as Confidence from 'confidence'

import AppConfig from './config'

const criteria = {
    env: process.env.NODE_ENV
}

const manifest = {
    $meta: 'Main server manifest',
    server: {},
    connections: [AppConfig.get('/server')],
    registrations: [
        { plugin: 'inert' },
        { plugin: 'vision' },
        { plugin: 'blipp' },
        {
            plugin: {
                register: 'hapi-swagger',
                options: AppConfig.get('/api')
            }
        },
        {
            plugin: {
                register: 'good',
                options: AppConfig.get('/logging')
            }
        },
        {
            plugin: './slack',
            options: AppConfig.get('/routesVersion')
        }
    ]
}

const store = new Confidence.Store(manifest)

export default {
    get: (key) => store.get(key, criteria),
    meta: (key) => store.meta(key, criteria)
}