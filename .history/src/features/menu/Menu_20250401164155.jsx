import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {

const menu = useLoaderData()

  return <ul>
    {menu.map(pizza => <MenuItem piz />)}
  </ul>
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
