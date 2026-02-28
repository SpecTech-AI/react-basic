import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div className="app">
      <h1>自己紹介カード</h1>
      <ProfileCard
        name="田中太郎"
        role="フロントエンドエンジニア"
        bio="Reactを勉強中です。よろしくお願いします！"
      />
    </div>
  )
}

export default App
