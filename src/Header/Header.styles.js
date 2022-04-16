import { css } from 'styled-components';

export const wrapper = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 10%);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button + button {
    margin-left: 10px;
  }
`;

export const svg = css`
  display: inline-block;
  vertical-align: top;
`;

export const h1 = css`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`;

export const welcome = css`
  color: #333;
  font-size: 14px;
  margin-right: 10px;
`;
