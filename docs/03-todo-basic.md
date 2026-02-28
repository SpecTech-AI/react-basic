# Step 3: Todo 基本 — State + Props の組み合わせ

## このステップで学ぶこと

- State と Props を組み合わせたアプリ設計
- 配列 State の操作（追加・削除・更新）
- 子コンポーネントから親への通知（コールバック Props）
- コンポーネント分割の考え方

## 完成イメージ

テキスト入力で新しいタスクを追加でき、各タスクにはチェックボックス（完了切り替え）と削除ボタンがあります。

## 事前準備

```bash
cd step3
npm install
npm run dev
```

## 解説

### 3.1 設計を考える

Todo アプリに必要な機能：
- タスクの追加
- タスクの完了 / 未完了の切り替え
- タスクの削除

コンポーネント分割：
```
App（todo配列のState管理）
  ├── TodoForm（入力フォーム）
  └── TodoList（リスト表示）
        └── TodoItem（個別のタスク）
```

State（`todos` 配列）は `App` で管理し、Props で子コンポーネントに渡します。

### 3.2 Todo 型の定義

```tsx
// src/types/todo.ts
export type Todo = {
  id: number
  text: string
  completed: boolean
}
```

型を別ファイルに定義することで、複数のコンポーネントから再利用できます。

### 3.3 タスクの追加（スプレッド構文）

```tsx
const addTodo = (text: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  }
  setTodos([...todos, newTodo])
  //       ↑ 既存の配列を展開して、新しい要素を末尾に追加
}
```

`[...todos, newTodo]` は新しい配列を作ります。State の配列を直接変更（`push` 等）してはいけません。

### 3.4 タスクの削除（filter）

```tsx
const deleteTodo = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id))
}
```

`filter` で指定した id 以外の要素だけを含む新しい配列を作ります。

### 3.5 完了切り替え（map）

```tsx
const toggleTodo = (id: number) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
}
```

`map` で全要素を走査し、対象の todo だけ `completed` を反転した新しいオブジェクトを返します。

### 3.6 子から親への通知

子コンポーネント（`TodoForm`）から親（`App`）に「追加したい」と伝えるには、コールバック関数を Props で渡します。

```tsx
// 親（App）
<TodoForm onAdd={addTodo} />

// 子（TodoForm）
type Props = {
  onAdd: (text: string) => void
}

function TodoForm({ onAdd }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  // ページリロードを防ぐ
    onAdd(text.trim())
  }
  // ...
}
```

`e.preventDefault()` はフォーム送信時のデフォルト動作（ページリロード）を防ぎます。

## やってみよう

1. 残りのタスク数（未完了の数）を画面に表示してみましょう
2. タスクのテキストを編集できる機能を追加してみましょう

## まとめ

- 配列 State の操作にはスプレッド構文、`filter`、`map` を使う（直接変更しない）
- コールバック関数を Props で渡すことで、子から親に通知できる
- コンポーネントを適切に分割することで、コードが整理される
- `e.preventDefault()` でフォームのデフォルト動作を防ぐ

## 次のステップ

[Step 4: useEffect](./04-useeffect.md) では、ブラウザを閉じてもデータが残る永続化機能を追加します。
