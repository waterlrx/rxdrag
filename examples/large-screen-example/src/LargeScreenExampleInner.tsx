import { memo } from "react"
import { Toolbar } from "./Toolbar"
import { ZoomableEditor } from "@rxdrag/react-antd-shell"
import styled from "styled-components"
import { LeftSide } from "./LeftSide"
import { LeftSideSecondary } from "./LeftSideSecondary"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  background-color: ${props => props.theme.token?.colorBgContainer};
  color: ${props => props.theme.token?.colorText};
`

export const LargeScreenExampleInner = memo((
  props: {
    canvasUrl: string,
    previewUrl: string,
  }
) => {
  const { canvasUrl, previewUrl } = props;
  return (
    <Container className="zoomable-editor">
      <Toolbar />
      <ZoomableEditor
        canvasUrl={canvasUrl}
        previewUrl={previewUrl}
        schemas={[]}
      />
      <LeftSide />
      <LeftSideSecondary />
    </Container>
  )
})