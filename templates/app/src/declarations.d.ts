import {Application as ExpressFeathers} from '@feathersjs/express'

export interface ServiceTypes {}
export type Application = ExpressFeathers<ServiceTypes>

interface ServiceMixins {
  goToAction(...args: any): any;
  hookWrapper(hook: any, predicate?: any): any
}
