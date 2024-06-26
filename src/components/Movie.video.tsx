async function getVideos(id: string) {
  console.log(`fetching movie video: ${Date.now()}`);
  const response = await fetch(process.env.API_URL + `/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
