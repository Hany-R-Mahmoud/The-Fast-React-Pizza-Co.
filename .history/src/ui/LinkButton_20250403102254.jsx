import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === '-1') return;
  <button onClick={() => navigate(-1)}></button>;

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
