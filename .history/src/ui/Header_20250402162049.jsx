import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
    </header>
  );
}
export default Header;
