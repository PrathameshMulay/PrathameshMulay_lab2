import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import './Feedback.css'

export default function Feedback() {
  const [feedback, setFeedback] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState('5')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
  fetchFeedback()

  const channel = supabase
    .channel('feedback-realtime')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'feedback',
      },
      (payload) => {
        setFeedback((current) => {
          const exists = current.some((item) => item.id === payload.new.id)

          if (exists) {
            return current
          }

          return [payload.new, ...current]
        })
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}, [])

  async function fetchFeedback() {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
      setError('Unable to load feedback.')
      return
    }

    setFeedback(data || [])
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!name.trim() || !message.trim()) {
      setError('Please enter your name and feedback.')
      return
    }

    setLoading(true)

    const { data, error } = await supabase
      .from('feedback')
      .insert({
        name: name.trim(),
        message: message.trim(),
        rating: Number(rating),
      })
      .select()
      .single()

    if (error) {
    console.error('Supabase insert error:', error)
    setError(error.message)
    setLoading(false)
    return
  }

      setFeedback((current) => {
    const exists = current.some((item) => item.id === data.id)

    if (exists) {
      return current
    }

    return [data, ...current]
  })
    setName('')
    setMessage('')
    setRating('5')
    setSuccess('Thank you for your feedback!')
    setLoading(false)
  }

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Feedback</span>
          <h2>Share Your Feedback</h2>
          <p>
            I would appreciate your feedback on my portfolio and projects.
          </p>
        </div>

        <div className="feedback-grid">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="feedback-name">Name</label>
              <input
                id="feedback-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback-message">Feedback</label>
              <textarea
                id="feedback-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Share your feedback..."
                rows={5}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback-rating">Rating</label>
              <select
                id="feedback-rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              >
                <option value="5">5 — Excellent</option>
                <option value="4">4 — Very Good</option>
                <option value="3">3 — Good</option>
                <option value="2">2 — Fair</option>
                <option value="1">1 — Needs Improvement</option>
              </select>
            </div>

            {error && <p className="feedback-error">{error}</p>}
            {success && <p className="feedback-success">{success}</p>}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>

          <div className="feedback-list">
            <h3>What People Say</h3>

            {feedback.length === 0 ? (
              <p className="feedback-empty">
                No feedback yet. Be the first to leave feedback.
              </p>
            ) : (
              feedback.map((item) => (
                <article className="feedback-card" key={item.id}>
                  <div className="feedback-card-header">
                    <strong>{item.name}</strong>
                    <span aria-label={`${item.rating} out of 5 stars`}>
                      {'★'.repeat(item.rating)}
                    </span>
                  </div>

                  <p>{item.message}</p>

                  <small>
                    {new Date(item.created_at).toLocaleDateString()}
                  </small>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}