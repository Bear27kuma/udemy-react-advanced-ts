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
