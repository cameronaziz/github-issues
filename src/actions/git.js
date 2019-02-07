export const REQUEST_GIT_REPOSITORIES = 'REQUEST_GIT_REPOSITORIES';
export const RECEIVE_GIT_REPOSITORIES = 'RECEIVE_GIT_REPOSITORIES';
export const getGitRepositories = () => ({
    type: REQUEST_GIT_REPOSITORIES,
});

export const REQUEST_REPOSITORY_ISSUES = 'REQUEST_REPOSITORY_ISSUES';
export const RECEIVE_REPOSITORY_ISSUES = 'RECEIVE_REPOSITORY_ISSUES';
export const getRepositoryIssues = (respositoryFullName) => ({
    type: REQUEST_REPOSITORY_ISSUES,
    respositoryFullName,
});

export const SET_CURRENT_REPOSITORY = 'SET_CURRENT_REPOSITORY'
export const setRepository = (respositoryFullName) => ({
    type: SET_CURRENT_REPOSITORY,
    respositoryFullName,
});

export const MOVE_ISSUE_PRIORITY_UP = 'MOVE_ISSUE_PRIORITY_UP';
export const moveIssuePriorityUp = (respositoryFullName, issueId) => ({
    type: MOVE_ISSUE_PRIORITY_UP,
    respositoryFullName,
    issueId,
});

export const MOVE_ISSUE_PRIORITY_DOWN = 'MOVE_ISSUE_PRIORITY_DOWN';
export const moveIssuePriorityDown = (respositoryFullName, issueId) => ({
    type: MOVE_ISSUE_PRIORITY_DOWN,
    respositoryFullName,
    issueId,
});

export const SET_API_KEY = 'SET_API_KEY';
export const setApiKey = (apiKey) => ({
    type: SET_API_KEY,
    apiKey,
});

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
    type: RESET_STATE,
})