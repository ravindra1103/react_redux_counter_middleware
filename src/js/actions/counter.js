export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
import store from '../store';

export function incrementCounter() {
  store.dispatch({type: INCREMENT});
}

export function decrementCounter() {
  store.dispatch({type: DECREMENT});
}
