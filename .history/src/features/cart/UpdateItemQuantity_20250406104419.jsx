import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  getCurrentQuntityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuntityById = useSelector(getCurrentQuntityById(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <Button
        type="round"
        onClick={() => {
          if (currentQuntityById === 0) return;
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
