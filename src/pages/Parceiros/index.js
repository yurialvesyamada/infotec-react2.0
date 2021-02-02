import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CakeContainer from '../../components/CakeContainer';
import HooksCakeContainer from '../../components/HooksCakeContainer';
import IceCreamContainer from '../../components/iceCreamContainer';

export default function Hello() {
    return (
        <Provider store={store}>
            <HooksCakeContainer />
            <CakeContainer />
            <IceCreamContainer />
        </Provider>
    )
}