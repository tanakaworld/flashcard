import * as React from "react";
import styled from "@emotion/styled";

type Props = React.ComponentProps<"button">;

const SButton = styled.button`
  background-color: var(--secondary);
  border: solid 1px var(--primary);
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  font-size: larger;
  cursor: pointer;
`;

export const Button = (props: Props) => {
  return <SButton {...props} />;
};
