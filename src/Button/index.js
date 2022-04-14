// @flow
import * as React from 'react';
import './button.css';

type Props = {|
  primary?: boolean,
  backgroundColor?: null | string,
  size?: 'small' | 'medium' | 'large',
  label: string,
  onClick?: any,
|};

/**
 * Primary UI component for user interaction
 */
function Button({
  primary, backgroundColor, size = Button.defaultProps.size, label, ...props
}: Props): React.Node {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
