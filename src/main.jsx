import { createRoot } from 'react-dom/client'
import './index.css'
// slider styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
// translation support
import { Suspense } from 'react';
import './i18n';
import FullPageLoader from './components/fullpageloader/FullPageLoader';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={FullPageLoader}>
    <App />
  </Suspense>
);
