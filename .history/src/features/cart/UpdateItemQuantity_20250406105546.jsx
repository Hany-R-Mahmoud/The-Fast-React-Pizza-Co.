import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  // const currentQuntityById = useSelector(getCurrentQuntityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => {
          // if (currentQuntityById === 0) return;
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
