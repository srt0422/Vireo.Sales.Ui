import { fork } from 'redux-saga/effects';
//Import all sagas
import appContents from './appContents';
import payments from './payments';

export default function* root() {
    yield fork(appContents);
    yield fork(payments);
    //Fork and yield other sagas here if you have more
}
