import React from 'react'
import { InnerWrapper, MidWrapper, OuterWrapper } from '../../Styles/Wrappers'

const RowContainer = (props) => {
  return (
    <OuterWrapper>
        <MidWrapper>
            <InnerWrapper>
                {props.children}
            </InnerWrapper>
        </MidWrapper>
    </OuterWrapper>
  )
}

export { RowContainer }