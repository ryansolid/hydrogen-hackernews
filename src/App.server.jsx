import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes } from "@shopify/hydrogen";
import { Suspense } from "react";
import Nav from "./components/nav.server";

function App({ routes }) {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div class="news-list-nav">Loading...</div>}>
        <FileRoutes routes={routes} />
      </Suspense>
    </Router>
  );
}

export default renderHydrogen(App);
