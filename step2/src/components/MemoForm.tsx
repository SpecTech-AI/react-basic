import { useState } from 'react'
import './MemoForm.css'

function MemoForm() {
  const [text, setText] = useState('')

  return (
    <div className="memo-form">
      <h2>メモ入力</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここに入力してください..."
      />
      <p className="memo-preview">
        入力中: <strong>{text || '（まだ何も入力されていません）'}</strong>
      </p>
      <p className="memo-count">文字数: {text.length}</p>
    </div>
  )
}

export default MemoForm
