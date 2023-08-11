import MainLayout from "../layouts/MainLayout";

export const addProductToCart = async (product, cart, setCart) => {
  let findProductInCart = await cart.find((i) => {
    return i.id === product.id;
  });

  if (findProductInCart) {
    let newCart = [];
    let newItem;

    cart.forEach((cartItem) => {
      if (cartItem.id === product.id) {
        newItem = {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          totalAmount: cartItem.price * (cartItem.quantity + 1),
        };
        newCart.push(newItem);
      } else {
        newCart.push(cartItem);
      }
    });

    setCart(newCart);
  } else {
    let addingProduct = {
      ...product,
      quantity: 1,
      totalAmount: product.price,
    };
    setCart([...cart, addingProduct]);
  }
};
export const removeProduct = async (product, cart, setCart) => {
  const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
  setCart(newCart);
};

const Cart = () => {
    return (
        <MainLayout>

        </MainLayout>
    )
}

export default Cart;
