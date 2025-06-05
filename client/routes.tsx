/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'

import Layout from './components/Layout'
import App from './components/App'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
  </Route>,
)

export default routes
