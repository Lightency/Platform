import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  color: red;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    opacity: 1;
  }
`;
