import { Link } from 'react-router-dom'


const Mondai2 = () => {

 
return (
    <div>
      <h1>質問2</h1>
      <div>あなたは殺人の罪を償い、刑務所から出てきた。あなたは家を見つけ、職を見つけ、最後に家の床を黒く塗った。なぜ、黒色で塗ったのか？</div>
      <ol>
        <li style={{marginTop: 20 }}><Link to="/mondai3/:word">黒が好きだから</Link></li>
        <li><Link to="/mondai3/:word">部屋の中を見えなくするため</Link></li>
        <li><Link to="/mondai3/:word">血痕を消す為</Link></li>
      </ol>
    </div>
  )

}

export default Mondai2