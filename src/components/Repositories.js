import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGitRepositories, setApiKey, setRepository, resetState } from '../actions';
import { Container, MenuButton, FlexDiv, SelectButton, KeyContainer }  from './styled';
import IssuesPanel from './IssuesPanel';

class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    componentDidMount(){
        if (this.props.apiKey) {
            this.props.getGitRepositories();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.apiKey !== this.props.apiKey) {
            this.props.getGitRepositories();
        }
    }

    updateField = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        if (!this.props.apiKey) {
            return (
                <KeyContainer>
                    <input onChange={this.updateField} />
                    <button onClick={() => this.props.setApiKey(this.state.value)}>Submit API Key</button>
                </KeyContainer>
            )
        }

        return (
            <div>
                <SelectButton onClick={this.props.resetState}>Clear API Key</SelectButton>
                <Container>
                    <FlexDiv>
                        {this.props.repositories.map((repository) => <MenuButton
                                                                        key={repository.name}
                                                                        repository={repository}
                                                                        onClick={() => this.props.setRepository(repository.name)}>
                                                                            {repository.shortName}
                                                                    </MenuButton>)}
                    </FlexDiv>
                    {this.props.currentRepositoryName && <IssuesPanel />}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    repositories: state.git.repositories,
    currentRepositoryName: state.git.currentRepository,
    apiKey: state.git.apiKey,
});

const mapDispatchToProps = (dispatch) => ({
    getGitRepositories: () => dispatch(getGitRepositories()),
    setApiKey: (apiKey) => dispatch(setApiKey(apiKey)),
    setRepository: (respositoryFullName) => dispatch(setRepository(respositoryFullName)),
    resetState: () => dispatch(resetState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);