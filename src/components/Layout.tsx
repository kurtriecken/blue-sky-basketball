import Header from './Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow p-8">{children}</main>
      <footer className="bg-blue-900 text-white text-center p-4 mt-12">
        <p>© 2025 Blue Sky Basketball</p>
      </footer>
    </div>
  );
}
