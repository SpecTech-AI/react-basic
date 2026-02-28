# Step 0: Hello React — 環境構築と最初のコンポーネント

## このステップで学ぶこと

- Vite + React + TypeScript の開発環境セットアップ
- JSX の基本構文
- 関数コンポーネントの作成
- CSS ファイルの読み込み

## 完成イメージ

シンプルなプロフィールカードが画面中央に表示されます。名前の頭文字がアバターとして表示され、名前・役割・自己紹介文が並びます。

## 事前準備

```bash
cd step0
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開くと、プロフィールカードが表示されます。

## 解説

### 0.1 プロジェクト構成を理解しよう

`step0/` ディレクトリの中を見てみましょう。

```
step0/
  index.html          ← エントリーポイント（HTMLファイル）
  package.json        ← プロジェクト設定・依存パッケージ
  tsconfig.json       ← TypeScript設定
  vite.config.ts      ← Vite設定
  src/
    main.tsx          ← Reactアプリの起動ファイル
    App.tsx           ← メインコンポーネント
    App.css           ← App用スタイル
    index.css         ← 全体のベーススタイル
    components/
      ProfileCard.tsx ← プロフィールカードコンポーネント
      ProfileCard.css ← プロフィールカード用スタイル
```

`main.tsx` が `App.tsx` を読み込み、画面に描画します。この流れがReactアプリの基本構造です。

### 0.2 JSX の基本

`App.tsx` を見てみましょう。

```tsx
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
```

JSX は HTML に似ていますが、いくつか違いがあります：

- `class` ではなく `className` を使う
- `{}` の中に JavaScript の式を書ける
- コンポーネントを HTML タグのように使える（`<ProfileCard />`）

### 0.3 関数コンポーネントを作る

`ProfileCard.tsx` がコンポーネントの定義です。

```tsx
type Props = {
  name: string
  role: string
  bio: string
}

function ProfileCard({ name, role, bio }: Props) {
  return (
    <div className="profile-card">
      <div className="profile-avatar">{name[0]}</div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  )
}
```

ポイント：
- 関数の引数で `Props` の型を定義して、受け取るデータの形を決める
- `{name[0]}` で名前の最初の1文字を表示している（JSX内のJavaScript式）
- `export default` でこのコンポーネントを他のファイルから使えるようにする

### 0.4 CSS を読み込む

各コンポーネントファイルで `import './ProfileCard.css'` のように CSS を読み込みます。Vite が自動的にこれを処理してくれます。

## やってみよう

1. `ProfileCard` に `hobby`（趣味）のプロパティを追加して表示してみましょう
2. 新しいコンポーネント `Footer.tsx` を作成し、`App.tsx` で使ってみましょう

## まとめ

- Vite で React + TypeScript プロジェクトを作成できる
- JSX は HTML に似た構文で、`{}` 内に JavaScript の式を書ける
- React ではUI を「コンポーネント」という部品に分割する
- CSS は `import` で読み込む

## 次のステップ

[Step 1: Props](./01-props.md) では、コンポーネントにデータを渡す方法と、リスト表示を学びます。
