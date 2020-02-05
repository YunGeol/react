import React from 'react';
import style from './Button2.module.css';

function Button({ size }) {
  if (size === 'big') {
    return <button className="button big">큰 버튼</button>;
  } else {
    return <button className="button small">작은 버튼</button>;
  }
}
console.log(style);
export default Button;
