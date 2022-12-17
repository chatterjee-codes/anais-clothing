import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as AnaisLogo } from '../../assets/anais.svg';

// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentuser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

// import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentuser);
    // console.log('currentUser', currentUser);
    // const { isCartOpen } = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <AnaisLogo className='logo' style={{ width: '100%', height: '100%' }} />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
