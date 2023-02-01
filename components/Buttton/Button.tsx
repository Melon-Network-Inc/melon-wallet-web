import React from 'react';
import styles from '../../styles/Button.module.scss';
import clsx from 'clsx';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  id: string;
  label: string;
}

const Button = ({ id, label, ...rest }: Props) => {
  const { disabled } = rest;
  return (
    <button
      id={id}
      {...rest}
      type={'button'}
      className={clsx(styles.buttonContainer, disabled && styles.disabled)}>
      {label}
    </button>
  );
};

export default Button;
