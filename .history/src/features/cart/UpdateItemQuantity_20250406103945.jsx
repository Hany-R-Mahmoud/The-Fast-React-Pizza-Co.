import Button from '../../ui/Button';

function UpdateItemQuantity({ pizzaId }) {
  return (
    <div className="">
      <Button type="round">+</Button>
      <Button type="round">-</Button>
    </div>
  );
}

export default UpdateItemQuantity;
