import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/main.css';

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}