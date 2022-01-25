import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey)
    --offWhite: #ededed;
    --maxWidth: 62.500rem;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.9);

    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }
  a {
    color: var(---black);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: var(--maxWidth);
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
};
