// import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { Image, ProductCartContainer, Footer, Name, Price } from './product-card.styles';

// import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const { isCartOpen, setIsCartOpen, addItemToCart } = useContext(CartContext);

    const addProdtuctToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    };

    return (
        <ProductCartContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProdtuctToCart}>
                Add to cart
            </Button>
        </ProductCartContainer>
    );
};

export default ProductCard;
