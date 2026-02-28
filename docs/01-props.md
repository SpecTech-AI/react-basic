# Step 1: Props — データを渡す

## このステップで学ぶこと

- Props（プロパティ）でコンポーネントにデータを渡す方法
- Props の型定義
- `map` を使ったリスト表示
- `key` プロパティの役割
- 条件付きレンダリング

## 完成イメージ

3人のメンバーがカード形式で横並びに表示されます。画像がある人は写真が、ない人はイニシャルがアバターとして表示されます。

## 事前準備

```bash
cd step1
npm install
npm run dev
```

## 解説

### 1.1 Props とは

Props は「親コンポーネントから子コンポーネントへデータを渡す仕組み」です。HTML の属性に似ています。

```tsx
// 親（App.tsx）から子（MemberCard）にデータを渡す
<MemberCard name="田中太郎" role="エンジニア" bio="React勉強中" />
```

### 1.2 Props の型定義

TypeScript では Props の型を定義します。

```tsx
type Props = {
  name: string
  role: string
  bio: string
  imageUrl?: string  // ? はオプショナル（なくてもOK）
}

function MemberCard({ name, role, bio, imageUrl }: Props) {
  // ...
}
```

`imageUrl?` の `?` は「あってもなくても良い」という意味です。

### 1.3 map でリスト表示

配列データをコンポーネントのリストに変換するには `map` を使います。

```tsx
function MemberList({ members }: Props) {
  return (
    <div className="member-list">
      {members.map((member) => (
        <MemberCard
          key={member.name}
          name={member.name}
          role={member.role}
          bio={member.bio}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  )
}
```

### 1.4 key の役割

`map` でリスト表示する際は、各要素に一意な `key` を指定する必要があります。

```tsx
<MemberCard key={member.name} ... />
```

`key` は React がリストの変更を効率的に検出するために使います。配列のインデックスよりも、データ固有の値（ID や名前）を使うのが望ましいです。

### 1.5 条件付きレンダリング

`MemberCard` では、画像がある場合とない場合で表示を切り替えています。

```tsx
{imageUrl ? (
  <img className="member-avatar" src={imageUrl} alt={name} />
) : (
  <div className="member-avatar-placeholder">{name[0]}</div>
)}
```

- **三項演算子**（`条件 ? A : B`）: 条件に応じて A か B を表示
- **`&&` 演算子**（`条件 && 要素`）: 条件が true のときだけ要素を表示

## やってみよう

1. `MemberCard` に `skills`（得意技術の配列）を追加して、タグ風に表示してみましょう
2. メンバーの `isLeader` フラグが `true` のときだけ「リーダー」バッジを表示してみましょう

## まとめ

- Props で親から子へデータを渡せる
- TypeScript で Props の型を定義してデータの形を明確にする
- `map` で配列をコンポーネントのリストに変換できる
- `key` はリストの効率的な更新に必要
- 三項演算子や `&&` で条件付きレンダリングができる

## 次のステップ

[Step 2: State](./02-state.md) では、ユーザーの操作に反応するインタラクティブなコンポーネントを作ります。
