import {FeathersService, Id, paginate, Params} from '../feathers.class'
import ArticleModel from '../../models/article.model'

export class ArticleService extends FeathersService {
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

export default new ArticleService({
  name: 'article',
  Model: ArticleModel,
  paginate,
})
