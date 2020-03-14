import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import React from 'react';
import { Paper } from '@material-ui/core';

export const CardPaper = styled(Paper)`
  list-style: none;

  a {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
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
`;

export const Container = styled.ul`
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 40px;
`;

export const LinkPublisher = styled(Link)`
  font-size: 17px;
  transition: 0.4s;

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
    color: #3d4977;
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
    color: #3d4977;
  }
`;
