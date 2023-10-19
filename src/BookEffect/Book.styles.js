import styled from "styled-components";
import { centerContent } from "../styles/style_mixins";

export const BookContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${centerContent};
  position: absolute;
  top: 0;
  left: 0;
  .book {
    width: 85%;
    height: 70%;
    box-shadow: 0 41px 38px -20px #3a3a3a;
  }
`;
