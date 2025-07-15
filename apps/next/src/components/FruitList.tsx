export default function FruitList() {
  const fruits = ["りんご", "みかん", "ぶどう"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}