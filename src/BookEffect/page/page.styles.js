import styled from "styled-components";

const PageParent = styled.div`
  width: 50%;
  position: absolute;
  right: 0px;
  height: 100%;
  transform-origin: 0 50%;
`;
export const PageContainer = styled(PageParent)`
  pointer-events: none;
  float: right;
  transform-style: preserve-3d;
  &:nth-of-type(${(props) => props.$pagenum}) {
    z-index: ${(props) => props.$pages - props.$pagenum};
    transition: transform 1s 0.2s, z-index 0s 0.5s;
  }
  & .page-inner {
    background-color: ${(props) => `#e${props.$pagenum}d46d`};
  }
  &:nth-of-type(1) {
    left: 0;
    z-index: 0;
    transform: rotateY(0deg) !important;
    pointer-events: none;

    & .page-inner {
      transform: rotateY(0deg) !important;
    }
  }
  &:nth-of-type(2) {
    pointer-events: all;
  }

  &:nth-of-type(odd) {
    & .page-inner {
      transform: rotateY(180deg);
    }
  }

  &:nth-of-type(1) {
    .page-inner {
      background-color: #eed46d;
    }
  }

  &:nth-of-type(2) {
    .page-inner {
      background-color: #1b63d7;
    }
  }

  &:nth-of-type(3) {
    .page-inner {
      background-color: #571bd7;
    }
  }

  &:nth-of-type(4) {
    .page-inner {
      background: #4a5f5c;
    }
  }

  .page-inner {
    height: 100%;
    transform-style: preserve-3d;

    .control {
      position: absolute;
      z-index: 1;
      width: 31px;
      height: 31px;
      border: 1px solid #abd71b;
      border-radius: 100px;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
      cursor: pointer;
      transition: all 0.23s;
      box-shadow: 0 0 0 0px rgba(191, 151, 38, 1);
      &:hover {
        box-shadow: 0 0 0 10px rgba(191, 151, 38, 0.3);
        left: 34px;

        &:before {
          width: 40px;
          left: -40px;
        }
      }

      &.next {
        left: auto;
        right: 30px;

        &:hover {
          right: 34px;

          &:before {
            width: 40px;
            right: -40px;
          }
        }
        &:before {
          left: auto;
          right: -33px;
        }

        &:after {
          transform: rotate(180deg);
          top: 5px;
          left: 11px;
          pointer-events: none;
        }
      }
      label {
        z-index: 2;
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: pointer;
      }
      &:after {
        content: "▢";
        display: block;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        color: #abd71b;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.2s;
      }
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 32px;
        height: 1px;
        background: #abd71b;
        top: 50%;
        transform: translateY(-50%);
        left: -32px;
        transition: all 0.2s;
      }
    }

    .page-content {
      transform-style: preserve-3d;
      position: absolute;
      z-index: 1;
      pointer-events: none;
      top: 0;
      transform: translateZ(0px);
      width: 100%;
      height: 100%;
    }
    .page-number {
      position: absolute;
      bottom: 20px;
      left: 34px;
      width: 400px;
      color: #abd71b;
      letter-spacing: 60px;
      &:after {
        height: 1px;
        width: 100px;
        background: #abd71b;
        content: "";
        display: block;
        position: absolute;
        left: 20px;
        top: 19px;
      }
    }
  }
`;
