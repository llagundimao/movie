import App from '../views'

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/:tab',
    element: <App />
  }
]

export default routes