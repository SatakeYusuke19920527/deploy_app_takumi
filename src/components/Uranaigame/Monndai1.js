import { Link } from 'react-router-dom'



const Mondai1 = () => {


  const kaitou = (props) => {
    console.log(props.items)
    return (props.items1 + 1)
    
  }
    
  return (
    <div>
      <h1>質問1</h1>
      <div>あなたは犬好きの富豪が住む屋敷で強盗殺人を犯した。犯罪後、あなたは屋敷の犬を全て解き、自由にした。なぜでしょうか？</div>
      <ol>
        <li style={{ marginTop: 20 }}><Link to="/mondai2/:word" >可哀想だったから</Link></li>
        <li><Link to="/mondai2/:word" onClick={kaitou}>犬が犯行現場を荒らすことに期待したから</Link></li>
        <li><Link to="/mondai2/:word">犬が餓死しないようにするため</Link></li>
      </ol>
    </div>
  )
}
export default Mondai1