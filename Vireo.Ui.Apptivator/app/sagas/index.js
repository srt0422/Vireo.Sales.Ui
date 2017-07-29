import { fork } from 'redux-saga/effects';
//Import all sagas
import appContent from './appContent';


export default function* root() {
  yield fork(appContent);
  //Fork and yield other sagas here if you have more
}
