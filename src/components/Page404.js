import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <h4>エラー404</h4>
      <p>このurlは無効です</p>
      <Link to="/">PageAに戻る</Link>
    </div>
  )
}
export default Page404