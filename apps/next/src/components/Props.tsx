// 1. 親コンポーネント（データを渡す側）
export default function App() {
  return <Greeting name="太郎" age={25} />;
}

// 2. 子コンポーネント（データを受け取る側）
function Greeting({ name, age }) {
  return <p>{name}さん（{age}歳）こんにちは！</p>;
}