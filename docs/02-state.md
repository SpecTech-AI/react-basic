# Step 2: State — インタラクションの追加

## このステップで学ぶこと

- `useState` でコンポーネントの状態を管理する
- イベントハンドラ（`onClick`, `onChange`）
- 制御コンポーネント（controlled component）
- 複数の State を管理する

## 完成イメージ

画面にカウンターとメモ入力フォームが表示されます。カウンターは +1/-1/リセットボタンで操作でき、メモ入力はリアルタイムで入力内容と文字数が表示されます。

## 事前準備

```bash
cd step2
npm install
npm run dev
```

## 解説

### 2.1 State とは

State は「コンポーネント自身が管理するデータ」です。Props が外部から渡されるデータなのに対し、State はコンポーネント内部で変化するデータです。

State が変更されると、React は自動的に画面を再描画します。

### 2.2 useState の基本

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  //     ↑値    ↑更新関数        ↑初期値

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
```

- `useState(初期値)` を呼ぶと、`[現在の値, 更新関数]` が返る
- `setCount(新しい値)` を呼ぶと State が更新され、画面が再描画される
- **直接代入（`count = 5`）ではなく、必ず `setCount` を使う**

### 2.3 イベントハンドラ

ユーザーの操作に反応する関数です。

```tsx
// クリックイベント
<button onClick={() => setCount(count + 1)}>+1</button>

// 入力変更イベント
<input onChange={(e) => setText(e.target.value)} />
```

- `onClick`: ボタンがクリックされたとき
- `onChange`: 入力値が変わったとき
- `e.target.value`: 入力フィールドの現在の値

### 2.4 制御コンポーネント

フォーム入力の値を State で管理するパターンです。

```tsx
const [text, setText] = useState('')

<input
  type="text"
  value={text}                          // State の値を表示
  onChange={(e) => setText(e.target.value)}  // 入力時にStateを更新
/>
```

`value` に State を指定し、`onChange` で State を更新することで、React がフォームの値を完全にコントロールします。これを「制御コンポーネント」と呼びます。

### 2.5 複数の State

1つのコンポーネントで複数の `useState` を使えます。

```tsx
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  // それぞれ独立して管理される
}
```

## やってみよう

1. カウンターに上限値（例: 10）と下限値（例: 0）を設けてみましょう
2. メモフォームに「クリア」ボタンを追加して、入力を空にできるようにしましょう

## まとめ

- `useState` でコンポーネント内部の状態を管理する
- State が変わると React が自動的に画面を再描画する
- State は直接変更せず、更新関数（`set〇〇`）を使う
- 制御コンポーネントで入力フォームの値をState管理できる

## 次のステップ

[Step 3: Todo 基本](./03-todo-basic.md) では、State と Props を組み合わせて Todo アプリを作ります。
