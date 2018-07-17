import React from 'react';
import styled from "styled-components";
import "../styles/custom-props.css";

const Card = styled.div`
  height: 250px;
  padding: 10px 20px;
  border: 1px solid var(--main-border-color);
  background: white;
  overflow: hidden;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: "capitalize";
  border-bottom: 2px solid var(--main-border-color);
  padding-bottom: 0.5rem;
`;

const CardContent = styled.p`
  font-weight: 200;
  padding: 0.5rem 0;
  `;

const Note = (props) => {
    return (
        <Card>
            <CardTitle>
              {props.title}
            </CardTitle>
            <CardContent>
              {props.textBody}
            </CardContent>
        </Card>
    );
}
 
export default Note;