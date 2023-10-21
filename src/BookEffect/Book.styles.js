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
    width: calc(100% - 110px);
    height: calc(100% - 210px);
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    perspective: 1800px;
    box-shadow: 0 41px 38px -20px #0a3150;
    max-width: 1300px;
    max-height: 650px;
  }
`;
