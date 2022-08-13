import { useContext } from 'react';

import { Image, ProductCartContainer, Footer, Name, Price } from './product-card.styles';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { isCartOpen, setIsCartOpen, addItemToCart } = useContext(CartContext);

    const addProdtuctToCart = () => {
        addItemToCart(product);

        // // open mini cart
        // if (!isCartOpen) {
        //     setIsCartOpen(true);
        // }
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
