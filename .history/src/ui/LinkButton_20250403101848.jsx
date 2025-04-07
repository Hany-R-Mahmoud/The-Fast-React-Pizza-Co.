import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return (
    <Link
      to={to}
      className="text0blue-500 text-sm hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
