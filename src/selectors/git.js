import { createSelector } from 'reselect'

const allRespositorieselector = state => state.git.repositories;
const currentRepositoryNameSeleector = state => state.git.currentRepository;

const currentRepositorySeleector = (repositories, currentRepository) => {
    return repositories.find((repository) => repository.name === currentRepository);
};

export const currentRepository = createSelector(
    allRespositorieselector,
    currentRepositoryNameSeleector,
    currentRepositorySeleector,
);