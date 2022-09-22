import React from "react";
import styled from "styled-components";

const Circle = styled.span<{ upvotes: number; withMargins?: boolean }>`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: ${(props) => (props.upvotes > 20 ? "green" : "red")};
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
  margin-left: ${(props) => (props.withMargins ? "8px" : "0px")};
`;

const RedCircle = styled(Circle)`
  background-color: red;
`;

const GreenCircle = styled(Circle)`
  background-color: green;
`;

interface IProps {
  name: string;
  upvotes: number;
}

function Skill(props: IProps): JSX.Element {
  return (
    <li>
      {props.name}
      <Circle upvotes={props.upvotes} withMargins={true}>
        {props.upvotes}
      </Circle>
    </li>
  );
}

export default Skill;
