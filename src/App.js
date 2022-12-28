import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

// import {
//     onAuthStateChangedListener,
//     createUserDocumentFromAuth,
//     getCurrentUser
// } from './utils/firebase/firebase.utils';

// import Home from './routes/home/home.component';
// import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout.component';
// import { setCurrentUser } from './store/user/user.action';
import { checkUserSession } from './store/user/user.action';

import { GlobalStyle } from './global.styles';
import { Fragment } from 'react';

import Spinner from './components/spinner/spinner.component';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // const unsubscribe = onAuthStateChangedListener((user) => {
        //     if (user) {
        //         createUserDocumentFromAuth(user);
        //     }
        //     dispatch(setCurrentUser(user));
        // });

        // return unsubscribe;

        // getCurrentUser().then((user) => {
        //     // dispatch(setCurrentUser(user))
        //     console.log(user);
        // });

        dispatch(checkUserSession());
    }, []);

    return (
        <Fragment>
            <GlobalStyle />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path='/' element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path='shop/*' element={<Shop />} />
                        <Route path='auth' element={<Authentication />} />
                        <Route path='checkout' element={<Checkout />} />
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
};

export default App;
