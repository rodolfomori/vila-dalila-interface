import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import React from 'react';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin:40px;
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
`;

export const LinkPublisher = styled(Link)`
  font-size: 17px;

  color: black;
  font-weight: bold;
  text-align: center;

  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    font-size: 21px;
    transition: 0.4s;
  }
`;

export const LinkGroup = styled(Link)`
  font-size: 25px;
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  text-align: center;

  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    font-size: 23px;
    transition: 0.4s;
  }
`;
