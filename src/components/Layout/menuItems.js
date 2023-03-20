import { publicPaths } from '../../config/routes/routes'

export const menus = routeType => ({
  user: [
    {
      id: 'home',
      title: 'home',
      icon: '',
      path: publicPaths.home
    }
  ]
})
