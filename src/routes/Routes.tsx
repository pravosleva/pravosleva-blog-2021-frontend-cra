import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IRoute } from './interfaces'
import { HomePage } from '~/pages/homepage'
import { NotFoundPage } from '~/pages/404'
import { ArticlesPage } from '~/pages/articles'
import { SlugPage } from '~/pages/articles/[slug]'

const routes: IRoute[] = [
  { path: '/', exact: true, component: HomePage },
  { path: '/articles', exact: true, component: ArticlesPage },
  { path: '/articles/:slug', exact: true, component: SlugPage },
  // { path: '/projects/:id', exact: true, component: TheProject },
  // { path: '/auth/login', exact: true, component: Login },
  // { path: '/auth/sign-up', exact: true, component: SignUp },
  // { path: '/profile', exact: true, component: Profile },
  // { path: '/try-ui', exact: true, component: TryUi },
]

export const Routes = () => {
  return (
    <Switch>
      {[...routes].map(({ path, exact, component }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
      <Route exact path="*" component={NotFoundPage} />
    </Switch>
  )
}
