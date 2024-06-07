import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function SearchResults() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>
}