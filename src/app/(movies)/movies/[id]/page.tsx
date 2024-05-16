import { Suspense } from 'react';
import MovieInfo from '../../../../components/Movie.info';
import MovieVideo from '../../../../components/Movie.video';
import Loading from './loading';

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<Loading source={'info'} />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Loading source={'video'} />}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
