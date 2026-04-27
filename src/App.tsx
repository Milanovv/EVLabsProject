import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import CategoryPage from '@/pages/CategoryPage'
import SearchPage from '@/pages/SearchPage'
import ResourcePage from '@/pages/ResourcePage'
import PricingPage from '@/pages/PricingPage'
import DashboardPage from '@/pages/DashboardPage'
import SubmitPage from '@/pages/SubmitPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import TermsPage from '@/pages/TermsPage'
import PrivacyPage from '@/pages/PrivacyPage'
import SavedPage from '@/pages/SavedPage'

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
      <Route path="*" element={<Navigate to="/pricing" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/saved" element={<SavedPage />} />
    </Routes>
  )
}