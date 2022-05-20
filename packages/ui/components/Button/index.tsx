import * as React from "react";

type Props = React.ComponentProps<"button">;

export const Button = (props: Props) => {
  return <button {...props} />;
};
