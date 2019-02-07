import { all, fork } from 'redux-saga/effects';
import * as gitSagas from './git';

export default function* rootSaga() {
  yield all([
      ...Object.values(gitSagas),
    ].map(fork));
}