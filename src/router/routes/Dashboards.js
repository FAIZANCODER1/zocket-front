import { lazy } from 'react'

const DashboardRoutes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home/home'))
  },
  {
    path: '/campaign',
    component: lazy(() => import('../../views/Campaign/CampaignListing'))
  },
  {
    path: '/products',
    component: lazy(() => import('../../views/Products/products'))
  },
  {
    path: '/customers',
    component: lazy(() => import('../../views/Customers/customer'))
  },
  {
    path: '/addcampaign',
    component: lazy(() => import('../../views/Campaign/AddnewCampaign/index'))
  }
]

export default DashboardRoutes
