import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen';
import { Suspense } from 'react';
import Nav from './components/nav.server';

function App({ routes }) {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <Nav />
          <FileRoutes routes={routes} />
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
