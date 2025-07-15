
interface MovieCardProps{
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: number;
    description?: string;
}


export default function MovieCard( props : MovieCardProps){
    return(
        <div className="movie-card p-4 space-y-2 border rounded shadow">
            <h2>タイトル: {props.title}</h2>
            <p>監督: {props.director}</p>
            <p>公開年: {props.year}</p>
            <p>ジャンル: {props.genre}</p>
            <p>評価: ⭐ {props.rating}</p>
            <p>説明: {props.description}</p>
            <div>
                <button  className="btn">詳細を見る</button>
                <button  className="btn">♡ お気に入り</button>
            </div>
        </div>
    )
}