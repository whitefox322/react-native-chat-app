import chatsReducer from './reducers';

export { default as chatsOperations } from './operations';
export { removeChat as removeChat } from './actions';
export { setVisit as setVisit } from './actions';
export { addMessage as addMessage } from './actions';
export { getAllChats as getAllChats } from './selectors';
export { getAllMessages as getAllMessages } from './selectors';

export default chatsReducer;
