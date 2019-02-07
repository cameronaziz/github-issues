import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepositoryIssues } from '../actions';
import { currentRepository } from '../selectors';
import { FlexThreeDiv, SelectButton  } from './styled';
import Issue from './Issue';

class IssuesPanel extends Component {
    render() {
        return (
            <FlexThreeDiv>
                <h1>{this.props.currentRepositoryName}</h1>
                <SelectButton onClick={() => this.props.getRepositoryIssues(this.props.currentRepositoryName)}>Get Issues</SelectButton>
                {this.props.currentRepository.issues &&
                this.props.currentRepository.issues.length > 0 ? 
                <div>
                    {this.props.currentRepository.issues.map((issue, index) => <Issue
                                                        key={issue.id}
                                                        issue={issue}
                                                        elementIndex={index}
                                                        size={this.props.currentRepository.issues.length}
                                                    />)}
                </div> : <div>No Issues!</div>}
            </FlexThreeDiv>
        )
    }
}

const mapStateToProps = (state) => ({
    currentRepository: currentRepository(state),
    repositories: state.git.repositories,
    currentRepositoryName: state.git.currentRepository,
});

const mapDispatchToProps = (dispatch) => ({
    getRepositoryIssues: (respositoryFullName) => dispatch(getRepositoryIssues(respositoryFullName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPanel);