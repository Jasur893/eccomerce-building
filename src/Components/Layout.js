import Footer from './Footer';
import Header from './Header';
import HeaderNav from './HeaderNav';

export default function Layout({children}) {
  return (
    <>
      <Header />
      <HeaderNav />
      {children}
      <Footer />
    </>
  )
}