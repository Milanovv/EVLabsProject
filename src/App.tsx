import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import CategoryPage from '@/pages/CategoryPage'
import SearchPage from '@/pages/SearchPage'
import ResourcePage from '@/pages/ResourcePage'
import PricingPage from '@/pages/PricingPage'
import DashboardPage from '@/pages/DashboardPage'
import SubmitPage from '@/pages/SubmitPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/resource" element={<ResourcePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/submit" element={<SubmitPage />} />
    </Routes>
  )
}