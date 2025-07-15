import Image from "next/image";
import MovieCard from '@/components/MovieCard';
import FruitList from '@/components/FruitList';
import App from '@/components/Props';

export default function HomePage() {

    const movies = [
      { title: "アベンジャーズ", director: "ジョス・ウェドン", year: 2012, genre: "アクション", rating: 4.5 , description:"地球最強のヒーローチームが世界を救う！"},
      { title: "君の名は。", director: "新海誠", year: 2016, genre: "アニメ", rating: 4.8 ,description:"時空を超えた恋の物語"},
      { title: "インセプション", director: "クリストファー・ノーラン", year: 2010, genre: "SF", rating: 4.7 ,description:"夢の中の夢、現実と虚構の境界線"},
      { title: "スパイダーマン", director: "サム・ライミ", year: 2002, genre: "SF", rating: 4.2}
    ];

  return (
    <main>
      <h1>
        🎬 ムービーコレクション
      </h1>
      <ul>
        {movies.map((movie, index) =>
          <li key={index}><MovieCard {...movie}/></li>
        ) 
        }
      </ul>
    </main>
  );
}