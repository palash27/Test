import React from 'react';

export default class AnimatedInput extends React.Component {
    state = {
        isFocus: false,
    }

    handleFocus = () => {
        this.setState(state => ({
            isFocus: true,
        }));
    }

    handleBlur = () => {
        this.setState(state => ({
            isFocus: false,
        }));
    }

    render() {
        return (
            <div class={this.state.isFocus ? "input-animation active" : "input-animation"}>
                <label for={this.props.id}>{this.props.label}</label>
                <input {...this.props} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </div>
        );
    }
}
