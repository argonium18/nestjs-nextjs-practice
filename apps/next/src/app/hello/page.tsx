export default function Hello() {
  const movieTitle = "アベンジャーズ";
  const rating = 4.5;
  const releaseYear = 2021;
  
  return (
    <div>
      {/* 変数を表示 */}
      <h2>{movieTitle}</h2>
      
      {/* 計算結果を表示 */}
      <p>評価: {rating} / 5</p>
      
      {/* 条件分岐 */}
      <p>{releaseYear > 2020 ? "新作映画" : "旧作映画"}</p>
      
      {/* 配列の表示 */}
      <p>ジャンル: {["アクション", "SF"].join(", ")}</p>
    </div>
  );
}