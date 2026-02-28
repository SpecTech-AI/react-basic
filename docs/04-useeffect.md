# Step 4: useEffect — 副作用と永続化

## このステップで学ぶこと

- `useEffect` の基本（副作用とは何か）
- 依存配列の使い方
- `localStorage` によるデータ永続化
- カスタムフックの作成
- フィルタリング機能

## 完成イメージ

Step 3 の Todo アプリに以下の機能が追加されます：
- ブラウザを閉じてもタスクが残る（localStorage 永続化）
- 「すべて / 未完了 / 完了済み」のフィルタ切り替え

## 事前準備

```bash
cd step4
npm install
npm run dev
```

## 解説

### 4.1 useEffect とは

`useEffect` は「レンダリングの後に実行したい処理（副作用）」を書くためのフックです。

```tsx
import { useEffect } from 'react'

useEffect(() => {
  // ここに副作用の処理を書く
  console.log('レンダリングされました')
}, []) // ← 依存配列
```

副作用の例：
- API からデータを取得する
- localStorage にデータを保存する
- タイマーをセットする

### 4.2 依存配列

`useEffect` の第2引数が「依存配列」です。

```tsx
// 毎回のレンダリング後に実行
useEffect(() => { ... })

// マウント時（初回レンダリング後）のみ実行
useEffect(() => { ... }, [])

// count が変わったときだけ実行
useEffect(() => { ... }, [count])
```

### 4.3 localStorage で永続化

`localStorage` はブラウザにデータを保存する仕組みです。

```tsx
// 保存
localStorage.setItem('todos', JSON.stringify(todos))

// 読み込み
const data = localStorage.getItem('todos')
const todos = data ? JSON.parse(data) : []
```

`useEffect` と組み合わせると、State が変わるたびに自動保存できます。

### 4.4 カスタムフック

`useState` + `useEffect` のパターンを再利用可能な関数にまとめたものがカスタムフックです。

```tsx
// hooks/useLocalStorage.ts
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
```

使い方は `useState` とほぼ同じです：

```tsx
const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])
```

カスタムフックの命名規則：**必ず `use` で始める**

### 4.5 フィルタリング機能

フィルタの状態も `useState` で管理し、表示する todo を `filter` で絞り込みます。

```tsx
const [filter, setFilter] = useState<Filter>('all')

const filteredTodos = todos.filter((todo) => {
  if (filter === 'active') return !todo.completed
  if (filter === 'completed') return todo.completed
  return true
})
```

元の `todos` 配列を変更せず、表示用の新しい配列を作るのがポイントです。

## やってみよう

1. テーマ設定（ライト / ダーク）を localStorage に保存してみましょう
2. `useWindowSize` というカスタムフックを作って、ウィンドウサイズを取得してみましょう（`useEffect` + `addEventListener`）

## まとめ

- `useEffect` で副作用（データ保存、API通信など）を処理する
- 依存配列で実行タイミングを制御する
- カスタムフックで `useState` + `useEffect` のロジックを再利用できる
- カスタムフックは必ず `use` から始める命名にする

## 次のステップ

[Step 5: API 連携](./05-api.md) では、外部データの取得とローディング/エラーハンドリングを学びます。
