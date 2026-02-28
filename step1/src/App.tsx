import './App.css'
import MemberList from './components/MemberList'

const members = [
  {
    name: '田中太郎',
    role: 'フロントエンドエンジニア',
    bio: 'Reactを勉強中です。',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: '佐藤花子',
    role: 'デザイナー',
    bio: 'UI/UXデザインが専門です。',
  },
  {
    name: '鈴木一郎',
    role: 'バックエンドエンジニア',
    bio: 'Node.jsとPythonが得意です。',
    imageUrl: 'https://i.pravatar.cc/150?img=3',
  },
]

function App() {
  return (
    <div className="app">
      <h1>メンバー一覧</h1>
      <MemberList members={members} />
    </div>
  )
}

export default App
