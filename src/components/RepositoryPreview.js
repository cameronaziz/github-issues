import React from 'react';
import { connect } from 'react-redux';
import { setRepository } from '../actions';
import { MenuButton } from './styled';

const RepositoryPreview = ({ repository, setRepository }) => {
    return (
        <div onClick={() => setRepository(repository.name)}>
            <MenuButton>{repository.shortName}</MenuButton>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    setRepository: (respositoryFullName) => dispatch(setRepository(respositoryFullName)),
});

export default connect(null, mapDispatchToProps)(RepositoryPreview);