import { createStore } from 'redux';
import { cartComponent } from './reducers';

export const store = createStore(cartComponent);

/**
 * For debugging
 */
// store.subscribe(() => {
//     console.log(store.getState());
// });