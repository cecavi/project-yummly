import React from "react";
import styled from "styled-components/macro";

const TagsVisual = ({ tag }) => {
  return (
    <Tag>
      {tag}
    </Tag>
  )
}

export default TagsVisual

export const Tag = styled.div`
  background-color: #D7C0AE;
  color: black;
  font-size: 12px;
  padding: 5px; 
  border-radius: 10px;
`