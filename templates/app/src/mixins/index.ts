import {Application} from '../declarations'
import errors from '@feathersjs/errors'
import {iff} from 'feathers-hooks-common'

const log = console.log

export default function (app: Application) {
  app.mixins.push((service: any) => {
    const illegalActions = ['all', 'find', 'get', 'create', 'update', 'patch', 'remove']

    service.goToAction = function (...args: any) {
      const params = args[args.length - 1],
        {$action} = params
      if (!$action) return
      const func = this[$action]
      if (typeof func === 'function') {
        if (illegalActions.includes($action)) throw new errors.NotAcceptable()
        if (func.length !== args.length) throw new errors.NotAcceptable()
        return func.bind(this)(...args)
      }
      throw new errors.NotAcceptable()
    }

    service.hookWrapper = function (obj: any, predicate = (ctx: any) => !ctx.params.$action) {
      let ret: any = {},
        actionHooks: any
      Object.keys(obj).forEach(type => {
        const map = obj[type],
          kv: any = (ret[type] = {})
        Object.keys(map).forEach(method => {
          if (illegalActions.includes(method)) {
            kv[method] = map[method].map((f: any) => iff(predicate, f))
          } else {
            actionHooks = actionHooks || {}
            actionHooks[method] = actionHooks[method] || {}
            const all = map.all || []
            actionHooks[method][type] = type === 'before' ? all.concat(map[method]) : map[method].concat(all)
          }
        })
      })
      if (actionHooks) service.actionHooks = actionHooks
      return ret
    }
  })
}
