// @flow
import * as React from 'react';
import Button from './Button.component.js';

type Props = {|
  primary?: boolean,
  size?: 'small' | 'medium' | 'large',
  backgroundColor?: string,
  label: string,
  onClick?: SyntheticMouseEvent<HTMLButtonElement> => void,
|}

/**
 * Primary UI component for user interaction
 */
function ButtonContainer({ label, ...props }: Props) {
  return <Button type="button" {...props}>{label}</Button>;
}

ButtonContainer.defaultProps = {
  backgroundColor: undefined,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default (ButtonContainer: React.ComponentType<Props>);
