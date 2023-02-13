import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error: any = useRouteError()
  console.log(error)
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred</p>
      <p><i>{ error.statusText | error.message}</i></p>
    </div>
  )
}

export default Error