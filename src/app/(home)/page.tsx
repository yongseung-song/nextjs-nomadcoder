import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};

async function getMovies() {
  // 5초 동안 대기. 그리고 그 동안 유저는 아무것도 보지 못한다.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(process.env.API_URL).then((response) => response.json());
}

export default async function Homepage() {
  const popularMovies = await getMovies();
  return (
    <div>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie['original_title']}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
