async function getMovieDetail(id: string) {
  console.log(`fetching movie data: ${Date.now()}`);
  const response = await fetch(process.env.API_URL + `/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movieDetail = await getMovieDetail(id);
  return <h3>{JSON.stringify(movieDetail.title)}</h3>;
}
