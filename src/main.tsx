
import { createRoot } from 'react-dom/client';
import RootLayout from './app/layout';
import App from './app/page';

createRoot(document.getElementById("root")!).render(
  <RootLayout>
    <App />
  </RootLayout>
);
