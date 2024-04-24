import { useState } from 'react';
import Navbar from './pages/_components/navbar';
import Footer from './pages/_components/footer';
import NavigationRoutes from './modules/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <>
      <div className="w-full h-fit aspect-video flex flex-col flex-grow !font-gilroy relative justify-between bg-cream">
        <Navbar />
        <NavigationRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
