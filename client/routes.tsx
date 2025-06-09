/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'

import Layout from './components/Layout'
import Home from './components/Home'
import ProductPage from './components/ProductPage'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/product/:id" element={<ProductPage />} />
  </Route>,
)

export default routes
