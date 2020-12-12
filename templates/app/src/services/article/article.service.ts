import {ServiceAddons} from '@feathersjs/feathers'
import {Application} from '../../declarations'
import Article, {ArticleService} from './article.class'
import hooks from './article.hooks'

declare module '../../declarations' {
  interface ServiceTypes {
    articles: ArticleService & ServiceAddons<any> & ServiceMixins
  }
}

export default function (app: Application): void {
  app.use('/articles', Article)
  const service = app.service('articles')
  service.hooks(service.hookWrapper(hooks))
}
