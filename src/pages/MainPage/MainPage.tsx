import useCart from '../../hooks/cart/useCart';

const MainPage = () => {
  const { cartQuery, addOrUpdate, removeItem } = useCart();

  return (
    <div>
      <p
        style={{ fontSize: '60px' }}
        onClick={async () => {
          await addOrUpdate.mutate('TestProductID');
          console.log(cartQuery.data);
        }}
      >
        get Cart
      </p>
      <p
        style={{ fontSize: '60px' }}
        onClick={async () => {
          await addOrUpdate.mutate('TestProductID');
          console.log(cartQuery.data);
        }}
      >
        set Cart
      </p>
      <p
        style={{ fontSize: '60px' }}
        onClick={async () => {
          await removeItem.mutate('TestProductID');
          console.log(cartQuery.data);
        }}
      >
        remove Cart
      </p>

      <h1 style={{ fontSize: '300px' }}>Main Page</h1>
    </div>
  );
};

export default MainPage;
