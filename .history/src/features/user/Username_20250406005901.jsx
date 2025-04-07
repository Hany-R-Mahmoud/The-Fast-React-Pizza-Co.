import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((store) => store.user.username);
  console.log(username);

  return <div className="hidden text-sm font-semibold md:block">Jonas</div>;
}

export default Username;
