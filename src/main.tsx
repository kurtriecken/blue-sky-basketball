// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// App.tsx


export default App;


// components/Layout.tsx
// import Header from './Header';

// interface Props {
//   children: React.ReactNode;
// }

// export default function Layout({ children }: Props) {
//   return (
//     <div className="layout-container">
//       <Header />
//       <main className="layout-main">{children}</main>
//       <footer className="layout-footer">© 2025 Blue Sky Basketball</footer>
//     </div>
//   );
// }


// components/Header.tsx



// styles in index.css or another global css file
/*
.layout-container {
  @apply min-h-screen flex flex-col;
}
.layout-main {
  @apply flex-grow p-4 bg-gray-50;
}
.layout-footer {
  @apply bg-blue-900 text-white text-center p-2;
}
.header {
  @apply bg-blue-900 text-white p-4 shadow-md;
}
.header-inner {
  @apply container mx-auto flex justify-between items-center;
}
.header-title {
  @apply text-2xl font-bold;
}
.header-nav {
  @apply space-x-4;
}
.nav-link {
  @apply hover:underline;
}
*/


// Example: pages/Home.tsx
// export default function Home() {
//   return (
//     <div>
//       <h2 className="page-heading">Welcome to Blue Sky Basketball</h2>
//       <p>
//         This site is dedicated to helping players, parents, and coaches understand how to improve basketball skills with simple, effective methods.
//       </p>
//     </div>
//   );
// }


// Example: pages/Teach.tsx


// Add to index.css
/*
.page-heading {
  @apply text-xl font-semibold mb-4;
}
*/

// Repeat similar for Shooting.tsx, Mental.tsx, Skills.tsx, Equipment.tsx, About.tsx, Recommendations.tsx
