import {HookContext} from '@feathersjs/feathers'
import {iff, combine} from 'feathers-hooks-common'
import * as authentication from '@feathersjs/authentication'
import errors from '@feathersjs/errors'
import {deepGet} from '../utils/common'
import logger from '../logger'

const {authenticate} = authentication.hooks

export {HookContext}

export function errorHandler(ctx: HookContext) {
  if (ctx.error) {
    const error = ctx.error
    logger.info('errorHandler', error)
    logger.error(error)
    if (!error.code) {
      ctx.error = new errors.GeneralError(error.message)
      return ctx
    }
    if (error.code === 404 || process.env.NODE_ENV === 'production') {
      error.stack = null
    }
    return ctx
  }
}

export function populate(...fields: any[]) {
  return function (ctx: HookContext) {
    Object.assign(ctx.params.query, {$populate: fields.map(it => getPopulate(it))})
    return ctx
  }
}

function getPopulate(arr: any) {
  if (typeof arr === 'string') arr = arr.trim().split('/')
  const config = getConfig(arr)
  if (arr.length > 1) config.populate = getPopulate(arr.slice(1))
  return config
}

function getConfig(arr: any): any {
  let path = arr[0].trim().replace(/,/g, ' '),
    r = /(.*)\((.*)\)/.exec(path),
    select
  if (r) [, path, select] = r
  return select ? {path, select} : {path}
}

function customValidator() {
  return function (ctx: any) {}
}

export function jwt(opts?: any) {
  return combine(authenticate('jwt'), customValidator())
}

export function jwtOrNot(opts?: any) {
  return iff((ctx: HookContext) => !!deepGet(ctx, 'params.headers.authorization'), jwt())
}

export function methodNotAllowed(ctx: HookContext) {
  throw new errors.MethodNotAllowed()
}

