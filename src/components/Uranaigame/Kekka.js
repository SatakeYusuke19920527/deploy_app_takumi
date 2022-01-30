import { Link } from 'react-router-dom'
import {selectAnswer, initialState, addAnswer,resetAnswer} from '../../features/answerSlice'
import {useAppSelector,useAppDispatch} from '../../hooks/useRTK'
import {useEffect, useState} from "react"

const Kekka = () => {
  const dispatch = useAppDispatch()
const ans = useAppSelector(selectAnswer)
const [items, setItems] = useState(0)
const [items1, setItems1] = useState('')
console.log(ans, '=============')
useEffect(()=>{
  console.log(ans.answer.length)
  if(ans.answer.length === 1){
    setItems(items + 25)
    setItems1('まだ普通かもしれません')
  }else if(ans.answer.length === 2){
    setItems(items + 50)
    setItems1('たまにやばいこと考えませんか？')
  }else if(ans.answer.length === 3){
    setItems(items + 75)
    setItems1('日頃から酷いことしてますね！！')
  }else if(ans.answer.length === 4){
    setItems(items + 100)
    setItems1('もしかして、、、人殺したことあります？')
  }else if(ans.answer.length === 0){
    setItems(items + 0)
    setItems1('なんか逆に怖いですね')
  }
},[])
console.log(items,"a")
// const reset = () =>{
//   dispatch(resetAnswer)
// }

 


    return (
        <div>
          <h1>結果</h1>
          <h2>あなたのサイコパス度は{items}%です</h2>
          <h3>{items1}</h3>
          <button><Link to="/">最初に戻る</Link></button>
        </div>
        
        
      )
    
    }
    
    export default Kekka