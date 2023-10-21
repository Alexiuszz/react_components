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
  .page-inner {
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
