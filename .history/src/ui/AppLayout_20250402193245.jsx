import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();

  // this is universal for the whole application, not a specifc component or page
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <main className="mx-auto max-w-3xl overflow-scroll">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
