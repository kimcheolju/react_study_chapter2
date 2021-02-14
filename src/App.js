import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리액트';
  return (
    <>
      {/* 주석의 일반적으로 이런 형식으로 작성 됨 */}
      <div
        className="react" // 시작 태그를 여러줄로 작성할 경우 여기에 주석을 작성 할 수 있다.
      >
        {name}
      </div>
      <h1>들여쓰기가 이상한</h1>
      <h2>코드</h2>
      <p>입니다</p>
    </>
  );
}

export default App;

// import logo from './logo.svg';
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>