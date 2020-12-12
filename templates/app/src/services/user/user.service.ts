import {ServiceAddons} from '@feathersjs/feathers'
import {Application} from '../../declarations'
import User, {UserService} from './user.class'
import hooks from './user.hooks'

declare module '../../declarations' {
  interface ServiceTypes {
    users: UserService & ServiceAddons<any> & ServiceMixins
  }
}

export default function (app: Application): void {
  app.use('/users', User)
  const service = app.service('users')
  service.hooks(service.hookWrapper(hooks))
}
