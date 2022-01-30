import { Link } from 'react-router-dom'
import {addAnswer, selectAnswer} from '../../features/answerSlice'
import {useAppDispatch, useAppSelector} from '../../hooks/useRTK'
const Mondai4 = () => {

  const dispatch = useAppDispatch()
const ans = useAppSelector(selectAnswer)
console.log(ans, '=============')

const kaitou = () => {
  dispatch(addAnswer('kaitou4'))
}

return (
    <div>
      <h1>質問4</h1>
      <div>あなたは連続殺人などの犯罪を犯し、警察に捕まってしまった。そして、警察での取り調べに対し、あなたは警察がつかんでいない事件の情報までも全て正直に話しました。話してしまえば罪が重くなってしまうのにいったいなぜ話したのか？</div>
      <ol>
        <li style={{marginTop: 20 }}><Link to="/kekka/:word" onClick={kaitou}>自分のした犯罪を自慢したかった</Link></li>
        <li><Link to="/kekka/:word">罪を軽くするため</Link></li>
        <li><Link to="/kekka/:word">自分の罪を無罪だと確信しているから</Link></li>
      </ol>
    </div>
  )

}

export default Mondai4