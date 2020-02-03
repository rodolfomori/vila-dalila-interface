import styled from 'styled-components';
import { Check } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import React from 'react';
import { darken } from 'polished';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin:40px;
  button {
    width:100%;
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.04, '#3b9eff')};
      }
    }
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding-top:8px;
    padding-bottom:8px;
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 18px;
      font-weight: bold;
    }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  .pubs{
    display:flex;
    flex-direction:row;
  }
`;

export const Publisher = styled.text`
  font-size: 17px;

  color: black;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;

export const Group = styled.text`
  font-size: 25px;
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const CheckPublishers = styled(Check)`
  font-size: 100px;
  margin-left: 20px;
`;
