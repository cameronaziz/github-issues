import {
    RECEIVE_GIT_REPOSITORIES,
    RECEIVE_REPOSITORY_ISSUES,
    MOVE_ISSUE_PRIORITY_UP,
    MOVE_ISSUE_PRIORITY_DOWN,
    SET_CURRENT_REPOSITORY,
    SET_API_KEY,
    RESET_STATE,
} from '../actions';

const initialState = {
    apiKey: undefined,
    repositories: [],
    currentRepository: undefined,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_GIT_REPOSITORIES: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            if (stateCopy.repositories.length === 0) {
                stateCopy.repositories = action.repositories;
                return stateCopy;
            }
            const newRepositories = [];
            for (let i = 0; i < action.repositories.length; i += 1) {
                const currentRepo = action.repositories[i];
                if (stateCopy.repositories.findIndex((repo) => currentRepo.id === repo.id) < 0) {
                    newRepositories.push(currentRepo);
                }
            }
            stateCopy.repositories.concat(stateCopy.repositories, newRepositories);
            return stateCopy;
        }
        case RECEIVE_REPOSITORY_ISSUES: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            const index = stateCopy.repositories.findIndex((repository) => repository.name === action.respositoryFullName);
            stateCopy.repositories[index].issues = action.issues;
            return stateCopy;
        }
        case SET_CURRENT_REPOSITORY: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.currentRepository = action.respositoryFullName;
            return stateCopy;
        }
        case MOVE_ISSUE_PRIORITY_UP: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            const repositoryIndex = stateCopy.repositories.findIndex((currentRepository) => currentRepository.name === action.respositoryFullName);
            const repository = stateCopy.repositories[repositoryIndex];
            const issueIndex = repository.issues.findIndex((currentIssue) => currentIssue.id === action.issueId);
            const [issue] = repository.issues.splice(issueIndex, 1);
            repository.issues.splice(issueIndex - 1, 0, issue);
            return stateCopy;
        }
        case MOVE_ISSUE_PRIORITY_DOWN: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            const repositoryIndex = stateCopy.repositories.findIndex((currentRepository) => currentRepository.name === action.respositoryFullName);
            const repository = stateCopy.repositories[repositoryIndex];
            const issueIndex = repository.issues.findIndex((currentIssue) => currentIssue.id === action.issueId);
            const [issue] = repository.issues.splice(issueIndex, 1);
            repository.issues.splice(issueIndex + 1, 0, issue);
            return stateCopy;
        }
        case SET_API_KEY: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.apiKey = action.apiKey;
            return stateCopy;
        }
        case RESET_STATE: {
            return initialState;
        }
        default:
            return state;
    }
}

export default reducer;