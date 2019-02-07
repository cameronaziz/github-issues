import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { moveIssuePriorityUp, moveIssuePriorityDown } from '../actions';
import { Card, FlexDiv, CardActions, CardButton } from './styled';

const Issue = ({ issue, elementIndex, size, priorityUp, priorityDown, currentRepository }) => (
    <Card>
        <FlexDiv>
            <h4>{issue.title}</h4>
            <div>Created On: {moment(issue.created_at).format('DD/MM/YYYY')}</div>
            <div>Updated At: {moment(issue.created_at).fromNow()}</div>
            {issue.assignee && <img alt="avatar" src={issue.assignee.avatar_url} width="40px" height="40px" />}
        </FlexDiv>
        <CardActions>
            {elementIndex > 0 && <CardButton onClick={() => priorityUp(currentRepository.name, issue.id)}>Move Up</CardButton>}
            {elementIndex !== size - 1 && <CardButton onClick={() => priorityDown(currentRepository.name, issue.id)}>Move Down</CardButton>}
        </CardActions>
    </Card>
);

const mapStateToProps = (state) => ({
    currentRepository: state.git.repositories.find((repository) => repository.name === state.git.currentRepository),
});

const mapDispatchToProps = (dispatch) => ({
    priorityUp: (respositoryFullName, issueId) => dispatch(moveIssuePriorityUp(respositoryFullName, issueId)),
    priorityDown: (respositoryFullName, issueId) => dispatch(moveIssuePriorityDown(respositoryFullName, issueId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Issue);