import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {


  const base = 'mt-3 inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ',
    
  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small:base +'py-2'
    };
    
  
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
