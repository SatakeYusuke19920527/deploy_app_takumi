import React from 'react'
import { useParams } from 'react-router-dom'

const PageB = () => {
  const { word } = useParams();

  return (
    <div>
    <p>ページBにいます。</p>
      <p> {word} </p>
    </div>
  )
}

export default PageB