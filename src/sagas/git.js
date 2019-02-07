import { put, take, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import { 
    REQUEST_GIT_REPOSITORIES,
    RECEIVE_GIT_REPOSITORIES,
    REQUEST_REPOSITORY_ISSUES,
    RECEIVE_REPOSITORY_ISSUES,
} from '../actions';

// ae92d01f6774e3a4fc65f4f968e8537ce83c52ce
const getApiKey = state => state.git.apiKey;

export function* requestGitRepositories() {
    yield take(REQUEST_GIT_REPOSITORIES);
    const apiKey = yield select(getApiKey);
    const { data } = yield axios.get(`https://api.github.com/user/repos?access_token=${apiKey}`);
    const repositories = [];
    for (let i = 0; i < data.length; i += 1) {
        const repository = data[i];
        repositories.push({
            name: repository.full_name,
            createdAt: repository.created_at,
            updatedAt: repository.updated_at,
            shortName: repository.name,
        })
    }
    yield put({
        type: RECEIVE_GIT_REPOSITORIES,
        repositories,
    });
}

function* getRepositoryIssues({ respositoryFullName }) {
    const apiKey = yield select(getApiKey);
    const { data } = yield axios.get(`https://api.github.com/repos/${respositoryFullName}/issues?access_token=${apiKey}`);
    yield put({
        type: RECEIVE_REPOSITORY_ISSUES,
        issues: data,
        respositoryFullName,
    });
}

export function* requestRepositoryIssues() {
    yield takeEvery(REQUEST_REPOSITORY_ISSUES, getRepositoryIssues)
}
