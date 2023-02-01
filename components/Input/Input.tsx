import React, { useCallback, useState } from 'react';
import styles from '../../styles/Input.module.scss';
import clsx from 'clsx';
import passwordShow from '../../assets/icons/PasswordShow.png';
import passwordHide from '../../assets/icons/PasswordHide.png';
import Image from 'next/image';
import { InputLabel } from '@/components/index';

interface Props extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  id: string;
  label: string;
  required?: boolean;
  textarea?: boolean;
  errorText?: string;
}

const Input = ({
  required,
  className,
  label,
  id,
  errorText,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(rest?.type || 'text');

  const onTogglePassword = useCallback(() => {
    setShowPassword(prevState => (prevState === 'text' ? 'password' : 'text'));
  }, []);

  return (
    <div className={clsx(styles.inputControl)}>
      <InputLabel id={id} required={required} label={label} />
      <input
        id={id}
        className={clsx(
          className,
          rest?.type === 'password' && styles.secureInput,
        )}
        {...rest}
        type={showPassword}
      />
      {rest?.type === 'password' ? (
        <Image
          className={styles.iconStyle}
          src={showPassword === 'password' ? passwordHide : passwordShow}
          alt={'password'}
          onClick={onTogglePassword}
        />
      ) : null}
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
};

export default Input;
