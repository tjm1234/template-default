import {FeathersService, Id, paginate, Params} from '../feathers.class'
import UserModel from '../../models/user.model'

export class UserService extends FeathersService {
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

export default new UserService({
  name: 'user',
  Model: UserModel,
  paginate,
})
