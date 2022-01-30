
import React, { useState, useEffect,  } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {selectAnswer, initialState, addAnswer,resetAnswer} from '../features/answerSlice'
import {useAppSelector,useAppDispatch} from '../hooks/useRTK'


const PageA = () => {
  const ans = useAppSelector(selectAnswer)
  const [count, setCount] = useState(0)
  const [countcpu, setCountcpu] = useState(0)
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [error, setError] = useState('')
  const [jibun, setJibun] = useState('')
  const [cpu, setCpu] = useState('')
  const [kekka, setKekka] = useState('')
  const [items, setItems] = useState([])
  const [items1, ] = useState(0)
  const dispatch = useAppDispatch()
  dispatch(resetAnswer)
  console.log(ans, '=============')
  const element = <kaitou items={items1} />;

  useEffect(() =>{
    
    axios.get('https://qiita.com/api/v2/items')
      .then(res => {
        setItems(res.data)
        
    })

  }, [])

  const handleClick = () => {
    //レベル1
    console.log("Hello world")
    //レベル2
    alert("Hello would")
  }

  const Increment = () => {
    setCount(count + 1)
  }
  
  const Decrement = () => {
    setCount(count - 1)
  }
  
  const Reset = () => {
    setCount(count && 0)
  
  }

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  const hyouji = () => {
    console.log(text)
    console.log(error)
    if (text === "") {
      setError('何か文字を入力してください')
      setText1('')
    } else {
      setText1(text)
      setError('')
    }
  }

  const jankenjibun = () => {
    setJibun('ぐー')
    jankencpu()
    if (countcpu === 0) {
      setKekka('あいこです。')
    } else if (countcpu === 1) {
      setKekka('かちです。')
    } else if (countcpu === 2) {
      setKekka('まけです。')
    }
  }
  const jankenjibun1 = () => {
    setJibun('ちょき')
    jankencpu()
    if (countcpu === 0) {
      setKekka('まけです。')
    } else if (countcpu === 1) {
      setKekka('あいこです。')
    } else if (countcpu === 2) {
      setKekka('かちです。')
    }
  }
  const jankenjibun2 = () => {
    setJibun('ぱー')
    jankencpu()
    if (countcpu === 0) {
      setKekka('かちです。')
    } else if (countcpu === 1) {
      setKekka('まけです。')
    } else if (countcpu === 2) {
      setKekka('あいこです。')
    }
  }
  const jankencpu = () => {
    const cpuCard = Math.floor(Math.random() * 3)
    setCountcpu(cpuCard)
    console.log(countcpu)
    if (countcpu === 0) {
      setCpu('ぐー')
    } else if (countcpu === 1){
      setCpu('ちょき')
    } else if (countcpu === 2){
      setCpu('ぱー')
    }
  }
  /*useEffect(() => {
    axios
      .all
      .then(res => {
        setItems1(res.data)
        console.log(items1)
      })
      
    
  }, [])*/

  
  
    return(
    <div>
        <p><button onClick={handleClick}>hello world</button></p>
        <Link to="/pageb/helloworld">ページBに移動/pageb/'helloworld'を書き換えれば２行目の文が変わります</Link>
        <p><Link to="/pagec/hi">カード</Link></p>
        <div><p><Link to="/uranai/hi">サイコパス診断アプリ</Link></p></div>
      <p><button onClick={Increment}>いいね！</button><button onClick={Decrement}>よくないね！</button><button onClick={Reset}>reset</button></p>
      <p>{count}</p>
      <p><input type="text" value={text} onChange={handleChange} /><button onClick={hyouji}>Hello</button><p>{text1}</p></p>
        <p style={{ color: 'red' }}>{error}</p>
        <p><button onClick={jankenjibun}>ぐー</button><button onClick={jankenjibun1}>ちょき</button><button onClick={jankenjibun2}>ぱー</button></p>
        <p>あなたの手：{jibun}</p>
        <p>cpuの手：{cpu}</p>
        <p>勝敗：{kekka}</p>
        <ul>
          {items.map(item => <li key={item}> {item.url} </li>)}
        </ul>
        
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>title</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
              {items.map(item => <tr><td key={item}>{item.title}</td><td key={item}><a href={item.url}>{item.url}</a></td></tr>)}
          </tbody>
        </Table>
        
      
    </div >
  );
}



export default PageA;

