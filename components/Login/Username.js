import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Card from '@material-ui/core/Card/Card';
import CardText from '@material-ui/core/Card/CardText';
import style from './style.css';
import {textFieldStyle, textFieldInputStyle} from './style.js';

class Username extends React.Component {
    static propTypes = {
        submit: PropTypes.func
    };

    getValue = () => {
        return this.refs.f.getValue();
    };

    componentDidMount() {
        this.refs.f.input.focus();
    }

    render() {
        return (
            <Card>
                <CardText>
                    <h3 className={style.heading}>USER NAME</h3>
                    <TextField
                        name='username'
                        onKeyDown={this.props.submit}
                        ref='f'
                        style={textFieldStyle}
                        inputStyle={textFieldInputStyle}
                        underlineShow={false}
                    />
                    <button className={style.nextButton} onClick={this.props.submit}>Next</button>
                </CardText>
            </Card>
        );
    }
}

export default Username;
