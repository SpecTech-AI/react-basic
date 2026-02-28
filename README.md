# React Basics — React 入門チュートリアル

HTML/CSS 経験者が React の基礎を段階的に学ぶチュートリアルです。
Todo アプリを段階的に構築しながら、コンポーネント、Props、State、useEffect、API 連携を習得します。

## 対象者

- HTML / CSS の基本がわかる方
- JavaScript の基本文法（変数、関数、配列、オブジェクト）がわかる方
- React は初めての方

## 学習ロードマップ

| Step | テーマ | 学ぶこと | 作るもの |
|------|--------|----------|----------|
| 0 | Hello React | 環境構築, JSX, コンポーネント | プロフィールカード |
| 1 | Props | データの受け渡し, リスト表示 | メンバー一覧 |
| 2 | State | useState, イベント, フォーム | カウンター + メモ |
| 3 | Todo 基本 | State+Props 連携, CRUD | Todo アプリ（基本） |
| 4 | useEffect | 副作用, localStorage, カスタムフック | Todo アプリ（永続化） |
| 5 | API 連携 | fetch, 非同期処理, エラーハンドリング | Todo アプリ（API版） |

## はじめ方

### 必要な環境

- Node.js 20 以上
- npm 10 以上
- エディタ（VS Code 推奨）

### 各ステップの実行方法

各ステップは独立したプロジェクトです。以下のコマンドで起動できます：

```bash
cd step0
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開いて動作を確認してください。

## ドキュメント

各ステップの詳細な解説はこちら：

- [Step 0: Hello React](docs/00-hello-react.md) — 環境構築と最初のコンポーネント
- [Step 1: Props](docs/01-props.md) — データを渡す
- [Step 2: State](docs/02-state.md) — インタラクションの追加
- [Step 3: Todo 基本](docs/03-todo-basic.md) — State + Props の組み合わせ
- [Step 4: useEffect](docs/04-useeffect.md) — 副作用と永続化
- [Step 5: API 連携](docs/05-api.md) — 非同期データの取得

## 技術スタック

- React 19
- TypeScript 5.9
- Vite 7

## 次のステップ

このチュートリアルを完了したら、Next.js を使ったフルスタック開発に進みましょう → **next-fullstack**

## ライセンス

MIT
