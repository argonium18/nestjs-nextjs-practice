
export interface Movie{
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: number;
    description?: string;
}

export const movies : Movie[] = [
    { id:1, title: "アベンジャーズ", director: "ジョス・ウェドン", year: 2012, genre: "アクション", rating: 4.5 , description:"地球最強のヒーローチームが世界を救う！"},
    { id:2, title: "君の名は。", director: "新海誠", year: 2016, genre: "アニメ", rating: 4.8 ,description:"時空を超えた恋の物語"},
    { id:3, title: "インセプション", director: "クリストファー・ノーラン", year: 2010, genre: "SF", rating: 4.7 ,description:"夢の中の夢、現実と虚構の境界線"},
    { id:4, title: "スパイダーマン", director: "サム・ライミ", year: 2002, genre: "SF", rating: 4.2}
];