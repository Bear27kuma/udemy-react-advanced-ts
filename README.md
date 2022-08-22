# React × TypeScript

| パッケージ | バージョン |
| ----- | ----- |
| react | 18.2.0 |
| typescript | 4.7.4 |
| @types/react | 18.0.17 |

---

## TypeScriptとは
- Microsoftが開発したオープンソースの言語
- JavaScriptに「型」という概念
- より安全にバグが少なく開発ができる
- 開発者間で認識を合わせやすい
- エディタでコード補完も効くので開発効率がUP
- コンポーネント指向のReactと非常に相性が良い

## TypeScriptの基本の型
```ts
/** TypeScriptの基本の型 */

// boolean 真偽値
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字列
let str: string = 'A';

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple タプル
let tuple: [number, string] = [0, 'A'];

// any なるべく使わない
let any1: any = false;

// void 関数が何も返却しない
const funcA = (): void => {
  const test = 'TEST';
  console.log(test);
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number, name: string } = { id: 0, name: 'AAA' };
```

## 引数の型指定
```ts
const calcTotalFee = (num: number) => {
  const total = num * 1.1;
  console.log(total);
};
// number型でないとエラーになる
const onClickPractice = () => calcTotalFee(1000);
```

## 返却値の型指定
```ts
const getTotalFee = (num: number): number => {
  return num * 1.1;
};
```

## 変数の型定義
```ts
const onClickPractice = () => {
  let total: number = 0;
  total = getTotalFee(1000);
  console.log(total);
};
```

## tsconfigで設定する
`compilerOptions`の`strict`を`true`にすると、型定義が厳しくチェックされるようになる

厳密には以下の型チェックのパラメーターが有効になる

- `alwaysStrict`
- `noImplicitAny`
- `noImplicitThis`
- `strictBindCallApply`
- `strictFunctionTypes`
- `strictNullChecks`
- `strictPropertyInitialization`
- `useUnknownInCatchVariables`

## 型定義の効率化
ある型定義が共通になっており、一部のプロパティだけを使用（`Pick`）したり、省いたり（`Omit`）して型定義を行うことができる

```
Pick<型定義変数名、'使用したいプロパティ1' | '使用したいプロパティ2'>
Omit<型定義変数名、'省きたいプロパティ'>
```

## コンポーネント自体の型定義
Reactには`FC（Functional Component）`という型が存在し、これをコンポーネントの型として指定することができる

```tsx
// FC<Props>の記述形式
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>
};
```

また、`FC`はデフォルトで`children`を受け取るようになっている

v17までは`VFC`を使うと`children`を受け取らないようになっているが、v18からは`FC`でも`children`が除外される
