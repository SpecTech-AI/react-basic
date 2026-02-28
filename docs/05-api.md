# Step 5: API 連携 — 非同期データの取得

## このステップで学ぶこと

- `fetch` によるデータ取得
- ローディング状態とエラーハンドリング
- 非同期処理を含むカスタムフック
- フォルダ構成のベストプラクティス

## 完成イメージ

アプリ起動時にAPIからTodoデータを読み込み、ローディング中は「読み込み中...」と表示されます。エラー時はエラーメッセージが表示されます。

## 事前準備

```bash
cd step5
npm install
npm run dev
```

## 解説

### 5.1 API とは

API（Application Programming Interface）は、プログラム同士がデータをやり取りする仕組みです。Web アプリでは、サーバーからデータを取得するために HTTP リクエストを送ります。

このステップでは `public/api/todos.json` をモック API として使います。Vite の開発サーバーが `public/` ディレクトリのファイルをそのまま配信するため、`fetch('/api/todos.json')` でアクセスできます。

### 5.2 fetch の基本

```tsx
const response = await fetch('/api/todos.json')
const data = await response.json()
```

`fetch` は非同期関数で、`await` を使って結果を待ちます。`response.json()` でJSON データを JavaScript オブジェクトに変換します。

### 5.3 ローディングとエラー状態

API 通信には時間がかかるため、3つの状態を管理する必要があります。

```tsx
const [todos, setTodos] = useState<Todo[]>([])
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
```

- **isLoading**: データ読み込み中かどうか
- **error**: エラーが発生した場合のメッセージ
- 取得成功時に `isLoading` を `false` にし、失敗時に `error` をセット

### 5.4 useTodos カスタムフック

fetch + useEffect + State 管理をカスタムフックにまとめます。

```tsx
function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/todos.json')
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data: Todo[] = await response.json()
        setTodos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラー')
      } finally {
        setIsLoading(false)
      }
    }
    fetchTodos()
  }, [])

  return { todos, isLoading, error, addTodo, toggleTodo, deleteTodo }
}
```

使う側はシンプルになります：

```tsx
function App() {
  const { todos, isLoading, error, addTodo, toggleTodo, deleteTodo } = useTodos()

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && <TodoList todos={todos} ... />}
    </div>
  )
}
```

### 5.5 フォルダ構成のベストプラクティス

Step 5 のフォルダ構成は、実際のプロジェクトでもよく使われるパターンです。

```
src/
  components/    ← UIコンポーネント
  hooks/         ← カスタムフック（ロジック）
  types/         ← 型定義
  App.tsx        ← メインコンポーネント
  main.tsx       ← エントリーポイント
```

**UIとロジックの分離**がポイントです。コンポーネントは表示に専念し、データの取得・操作はカスタムフックに任せます。

### 5.6 Next.js への展望

このチュートリアルで学んだ `fetch` + `useEffect` のパターンは「クライアントサイドデータフェッチ」と呼ばれます。

Next.js では、これに加えて「サーバーサイドデータフェッチ」が使えます。

```tsx
// Next.js のサーバーコンポーネント（参考）
async function TodoPage() {
  const response = await fetch('https://api.example.com/todos')
  const todos = await response.json()
  return <TodoList todos={todos} />
}
```

サーバーコンポーネントでは：
- `useEffect` や `useState` が不要
- データ取得がサーバー上で行われるため高速
- ローディング状態の管理が不要

一方、ボタンクリックなどのインタラクションには `"use client"` ディレクティブを付けた「クライアントコンポーネント」が必要です。ここで Step 2〜4 で学んだ `useState` / `useEffect` の知識が活きてきます。

## やってみよう

1. `ErrorMessage` コンポーネントに「リトライ」ボタンを追加して、再取得できるようにしましょう
2. todo リストを完了数/未完了数で並び替える機能を追加してみましょう

## まとめ

- `fetch` + `useEffect` でデータを非同期に取得できる
- ローディング・エラー・成功の3状態を管理する
- カスタムフックでデータ取得ロジックをカプセル化する
- UI とロジックを分離するフォルダ構成を心がける

## 次のステップ

おめでとうございます！React の基礎を一通り学習しました。

ここで学んだ知識は Next.js でもそのまま活かせます。次は **next-fullstack** に進んで、サーバーサイドレンダリングやルーティングを含むフルスタック開発を学びましょう。
