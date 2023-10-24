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
    height: calc(100% - 110px);
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

    ${({ $pages }) => {
      let $inputs = "+ input + input";
      let $p = 0;
      let $styles = "";
      for (let i = 1; Math.ceil($pages / 2) - 2; i++) {
        $inputs += "+ input";
      }
      for (let i = 1; i <= Math.ceil($pages / 2); i++) {
        let $lpage = "";
        let $rpage = "";

        if (i === $pages / 2) $inputs = $inputs.slice(0, -8);
        else $inputs = $inputs.slice(0, -7);

        console.log("input string->", $inputs);
        for (let j = 1; j <= $p; j++) {
          if (i === 1) {
            $lpage = $lpage + "";
            $rpage = $lpage + "";
          } else {
            $lpage = $lpage + "+ div ";
            $rpage = $lpage + "+ div ";

            $styles += `
            input[type="radio"]:nth-of-type(${i}) {
            &:checked {
              & ${$inputs} ${$rpage} {
                pointer-events: all;
                transform: rotateY(-180deg);
                z-index: 10;
                transition: transform 1s 0.2s, z-index 0s 0.5s;

                .control {
                  box-shadow: 0 0 0 200px rgba(0, 0, 0, 0);
                }
              }

              & ${$inputs} ${$rpage} + div {
                pointer-events: all;
              }

              & ${$inputs} ${$lpage} {
                pointer-events: none;
                z-index: 9;
                .pagenumber {
        letter-spacing: 59px;
        transition: all 0.8s 0.7s cubic-bezier(0.6, 0.045, 0.165, 1);

        &:after {
          width: 100px;
          transition: all 1s 0.7s cubic-bezier(0.6, 0.045, 0.165, 1);
        }
      }
              }
            }
          }
          `;
          }
        }
        $p += 2;
      }
      return $styles;
    }}
  }
`;
