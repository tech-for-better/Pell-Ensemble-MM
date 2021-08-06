import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  padding-top: 1.5rem;
  .footer-container {
    /* display: flex;
    gap: 3rem;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin-bottom: auto;
    position: sticky;
    justify-content: center; */
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
    <FooterStyle className="copyright">
      <div className="footer-container">
        © 2021 - Pell Ensemble | Designed via Tech for Better
      </div>
    </FooterStyle>
  );
}
