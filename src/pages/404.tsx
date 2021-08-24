import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
      <p>
        Page not hound. <Link to="/">Перейти на главную</Link>
      </p>
    </div>
  )
}
