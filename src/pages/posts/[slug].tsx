import {useRouter} from 'next/router';

export default function Post() {
  const router = useRouter()
  return (
    <div>
      <h1>Post {router.query.slug}</h1>
      <p>{router.asPath}</p>
    </div>
  );
}