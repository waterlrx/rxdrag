import styled from "styled-components";

export const TreeListShell = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  .bordered{
    border: solid 1px ${props => props.theme?.token?.colorBorder}
  }
`;