import React, { Component, useState } from "react";
import styled, { css } from "styled-components/macro";
import { device } from "./mediaquery";

const Wrapper = styled.div`
  display: grid;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          @media ${device.desktop} {
            display: none;
          }
          div:nth-child(1) {
            transform: rotate(45deg);
            position: absolute;
          }
          div:nth-child(2) {
            display: none;
          }
          div:nth-child(3) {
            transform: rotate(-45deg);
            position: absolute;
          }
        `
      : ""}

  @media ${device.desktop} {
    opacity: 0;
  }
`;

const Stripe = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

class Hamburgermenu extends Component {
  render() {
    return (
      <Wrapper
        onClick={() => {
          this.props.onClick();
        }}
        isOpen={this.props.isOpen}
      >
        <Stripe />
        <Stripe />
        <Stripe />
      </Wrapper>
    );
  }
}

export default Hamburgermenu;
