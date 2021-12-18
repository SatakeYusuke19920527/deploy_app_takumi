import { Link } from 'react-router-dom'
const Mondai3 = () => {

return (
    <div>
      <h1>質問3</h1>
      <div>ある豪邸で強盗殺人事件が起きた。強盗は金品をぬすみ、主人とその妻を殺した。運悪くそこには、双子の女の子がいました。女の子は怖がるどころか、その強盗を笑顔でもてなしました。それはなぜ？</div>
      <ol>
        <li style={{marginTop: 20 }}><Link to="/mondai4/:word">両親のことが嫌いだから</Link></li>
        <li><Link to="/mondai4/:word">生き残るため</Link></li>
        <li><Link to="/mondai4/:word">その人を親だと思ったから</Link></li>
      </ol>
    </div>
  )

}

export default Mondai3