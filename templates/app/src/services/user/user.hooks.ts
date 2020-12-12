import {jwt, methodNotAllowed} from '../../hooks'
import * as local from '@feathersjs/authentication-local'
const {hashPassword, protect} = local.hooks

export default {
  before: {
    all: [jwt()],
    find: [],
    get: [],
    create: [hashPassword('password')],
    update: [hashPassword('password')],
    patch: [hashPassword('password')],
    remove: [methodNotAllowed],
  },

  after: {
    all: [protect('password')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
