import {Application} from '../declarations'
import user from './user/user.service'
import article from './article/article.service'

export default function (app: Application): void {
  app.configure(user)
  app.configure(article)
}
