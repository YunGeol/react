// file1.js 파일
export default function func1() {}
export function fun2() {}
export const variable1 = 123;
export let variable2 = 'hello';

// file2.js 파일
import myFunc1, { func2, variable1, variable2 } from './file1.js'

// file3.js 파일
import { func2 as myFunc2 } from './file1.js';