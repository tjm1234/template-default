import path from 'path'
import favicon from 'serve-favicon'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import feathers from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'

import {Application} from './declarations'
import logger from './logger'
import middleware from './middleware'
import services from './services'
import appHooks from './app.hooks'
{{#useWebsocket}}
import channels from './channels'
{{/useWebsocket}}
import {HookContext as FeathersHookContext} from '@feathersjs/feathers'
import authentication from './authentication'
import mongoose from './mongoose'
import mixins from './mixins'

const app: Application = express(feathers())
export type HookContext<T = any> = {app: Application} & FeathersHookContext<T>

app.configure(configuration())
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
app.use('/', express.static(app.get('public')))

app.configure(express.rest())
app.configure(socketio())
app.configure(mongoose)
app.configure(middleware)
app.configure(authentication)
app.configure(mixins)
app.configure(services)
{{#useWebsocket}}
app.configure(channels)
{{/useWebsocket}}
app.use(express.notFound())
app.use(express.errorHandler({logger} as any))
app.hooks(appHooks)

export default app
