import {Service} from 'feathers-mongoose'
import {Id, Params} from '@feathersjs/feathers'

class FeathersService extends Service {

  constructor(options: any) {
    options.overwrite = false
    options.whitelist = ['$exists', '$and', '$regex', '$all']
    super(options)
  }

  async find(params: Params) {
    return super.find(params)
  }

  async get(id: Id, params: Params) {
    return super.get(id, params)
  }

  async create(data: any, params: Params) {
    return super.create(data, params)
  }

  async update(id: Id, data: any, params: Params) {
    return super.update(id, data, params)
  }

  async patch(id: Id, data: any, params: Params) {
    return super.patch(id, data, params)
  }

  async remove(id: Id, params: Params) {
    return super.remove(id, params)
  }

}

const paginate = {default: 50, max: 1000}

export {FeathersService, paginate, Id, Params}
