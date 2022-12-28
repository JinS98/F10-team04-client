import { css } from "@emotion/react";

export const globalStyles = css`
  background-image: url(/background.webp);
  background-size: cover;
  background-position-x: center;

  * {
    margin: 0;
    box-sizing: border-box;
  }


  @font-face {
    font-family: "GongGothicMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
