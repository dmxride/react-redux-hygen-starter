/**
 * HelpMessage Component
 *
 * @author Hugo Fonseca <hfonseca@ubiwhere.com>
 * @author Nuno Silva   <nmsilva@ubiwhere.com>
 * @author Carlos Silva   <csilva@ubiwhere.com>
 */
import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
  message: string;
  transKey: string;
  className?: string;
  onUpdateKey: (any) => any;
}

interface IState {
  isMouseInsideMessage?: string;
  isMouseInside: boolean;
  value: string;
}

export default class HelpMessage extends Component<IProps> {
  state: IState = {
    isMouseInside: false,
    value: this.props.message,
  };

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };

  mouseLeave = () => {
    setTimeout(() => {
      if (!this.state.isMouseInsideMessage) {
        this.setState({ isMouseInside: false, value: this.props.message });
      }
    }, 300);
  };

  mouseEnterInside = () => {
    this.setState({ isMouseInsideMessage: true });
  };

  mouseLeaveInside = () => {
    this.setState({ isMouseInsideMessage: false, isMouseInside: false });
  };

  onClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { transKey, onUpdateKey } = this.props;
    const { value } = this.state;

    return (
      <IconWrapper
        className={this.props.className}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.onClick}
      >
        {this.state.isMouseInside && (
          <IconMessage onMouseEnter={this.mouseEnterInside} onMouseLeave={this.mouseLeaveInside}>
            {transKey}
            <input
              value={value}
              onChange={({ target }) => this.setState({ value: target.value })}
            />
            <button onClick={() => onUpdateKey && onUpdateKey(value)}>UPDATE</button>
          </IconMessage>
        )}
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.span`
  position: absolute;
  left: -10px;
  top: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px dashed cornflowerblue;
  z-index: 999999;
`;

const IconMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  border-radius: 4px;
  height: auto;
  border: 1px solid rgba(212, 212, 213, 0.28);
  color: #616161;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 10px;
  box-shadow: 0px 0px 7px rgba(204, 204, 204, 0.39);
  font-weight: normal;
`;
