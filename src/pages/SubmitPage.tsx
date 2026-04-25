import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { categories, subcategories } from '@/data/resources'
import { Info } from 'lucide-react'

export default function SubmitPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    url: '',
    name: '',
    category: '',
    subcategory: '',
    type: '',
    difficulty: '',
    description: '',
    email: '',
  })
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Thank you for your submission!</h2>
            <p className="text-text-secondary mb-6">We'll review your resource and publish it if it meets our quality standards.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-16 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">Submit a Resource</h1>
            <p className="text-lg text-text-secondary">
              Share your favorite tools, tutorials, and resources with the community
            </p>
          </div>

          {/* Note */}
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-border bg-accent-indigo/10 p-4">
            <Info className="h-5 w-5 text-accent-indigo mt-0.5" />
            <div className="text-sm text-text-secondary">
              <strong>Note:</strong> All submissions are reviewed by our team before being published. 
              Please ensure your resource is of high quality and relevant to our community.
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-background-tertiary/50 p-6">
            {/* URL & Name */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">Resource URL *</label>
                <input
                  type="url"
                  required
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">Resource Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Name of the resource"
                  className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none"
                />
              </div>
            </div>

            {/* Category & Subcategory */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">Category *</label>
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary focus:border-accent-indigo focus:outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">Subcategory *</label>
                <select
                  required
                  value={form.subcategory}
                  onChange={(e) => setForm({ ...form, subcategory: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary focus:border-accent-indigo focus:outline-none"
                >
                  <option value="">Select a subcategory</option>
                  {subcategories.map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type & Difficulty */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">Type *</label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary focus:border-accent-indigo focus:outline-none"
                >
                  <option value="">Select type</option>
                  <option value="tutorial">Tutorial</option>
                  <option value="tool">Tool</option>
                  <option value="faq">FAQ</option>
                  <option value="error">Error Solution</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">Difficulty</label>
                <select
                  value={form.difficulty}
                  onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary focus:border-accent-indigo focus:outline-none"
                >
                  <option value="">Select difficulty</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">Description *</label>
              <textarea
                required
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Brief description of the resource (1-2 sentences)"
                rows={3}
                className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none"
              />
              <p className="mt-1 text-xs text-text-muted">Describe what the resource is about and why it's useful</p>
            </div>

            {/* Tags */}
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">Tags</label>
              <div className="flex flex-wrap gap-2 rounded-lg border border-border bg-background-secondary p-3">
                {tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 rounded-full bg-background-elevated px-2 py-1 text-sm">
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)} className="text-text-muted hover:text-text-primary">×</button>
                  </span>
                ))}
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  placeholder="Add tags and press Enter"
                  className="flex-1 min-w-[100px] bg-transparent text-sm text-text-primary outline-none"
                />
              </div>
              <p className="mt-1 text-xs text-text-muted">Press Enter to add a tag (e.g., Free, Beginner, AI)</p>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">Your Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none"
              />
              <p className="mt-1 text-xs text-text-muted">We'll notify you when your resource is published</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Link to="/" className="flex-1">
                <Button type="button" variant="secondary" className="w-full">Cancel</Button>
              </Link>
              <Button type="submit" className="flex-1">Submit Resource</Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}