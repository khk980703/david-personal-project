/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'

import Layout from './components/Layout'
import App from './components/App'
import Home from './components/Home'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>,
)

export default routes
