import { Link } from '@shopify/hydrogen';

import Story from '../components/story.server';
import fetchAPI from '../api';

export default function Index({ request }) {
  let url = new URL(request.normalizedUrl);
  let page = +(url.searchParams.get('page') || 1);
  const type = 'top';
  const stories = fetchAPI(`news?page=${page}`);

  return (
    <div className="news-view">
      <div className="news-list-nav">
        {page > 1 ? (
          <Link
            className="page-link"
            to={`/${type}?page=${page - 1}`}
            aria-label="Previous Page"
          >
            {'<'} prev
          </Link>
        ) : (
          <span className="page-link disabled" aria-disabled="true">
            {'<'} prev
          </span>
        )}
        <span>page {page}</span>
        {stories && stories.length >= 29 ? (
          <Link
            className="page-link"
            to={`/${type}?page=${page + 1}`}
            aria-label="Next Page"
          >
            more {'>'}
          </Link>
        ) : (
          <span className="page-link disabled" aria-disabled="true">
            more {'>'}
          </span>
        )}
      </div>
      <main className="news-list">
        {stories && (
          <ul>
            {stories.map((story) => (
              <Story key={story.id} story={story} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
