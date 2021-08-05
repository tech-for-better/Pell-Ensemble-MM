import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  /* padding-top: 25rem; */
  .footer-container {
    display: flex;
    gap: 3rem;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin-bottom: auto;
    position: sticky;
    justify-content: center;
  }
  .copyright {
    text-align: center;
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
      <div className="copyright">
        <div className="footer-container">
            © 2021 - Pell Ensemble | Designed via Tech for Better
            <a target="_blank" rel="noreferrer" href="http://pellensemble.com">
              Pell Ensemble
            </a>
        </div>
      </div>
    </FooterStyle>
  );
}