import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
    margin-top: auto;
  /* position: relative; */
  left: 0;
  bottom: 0;
  /* margin-bottom: auto; */
  justify-content: center;
  align-items: flex-end;
  }
  .copyright {
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    font-size: 1.3rem;
    align-self: flex-end;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
        </div>
        <div className="footer__col2">
        </div>
      </div>
      <div className="copyright">
        <div className="container">
            © 2021 - Pell Ensemble | Designed via Tech for Better
            <a target="_blank" rel="noreferrer" href="http://pellensemble.com">
              Pell Ensemble
            </a>
        </div>
      </div>
    </FooterStyle>
  );
}