import React, { ChangeEvent, useCallback, useState } from 'react';
import styles from '../../styles/ForgetPassword.module.scss';
import { isValidEmail } from '../../helpers/utils';
import { useMutation } from 'react-query';
import { forgetPasswordApi } from '../../services/user';
import { Button, Input } from '@/components/index';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const forgetPasswordMutation = useMutation(forgetPasswordApi);

  const checkValidation = useCallback(() => {
    if (!isValidEmail(email.trim())) {
      setEmailError('Email is not valid');
      return false;
    }
    return true;
  }, [email]);

  const onPressSubmit = useCallback(() => {
    if (checkValidation()) {
      setEmailError('');
      forgetPasswordMutation.mutate(email, {
        onSuccess: () => {
          alert('Email sent please check the email');
        },
        onError: err => {
          console.error('Error in send email', err);
          alert('Somethings went wrong');
        },
      });
    }
  }, [checkValidation, email, forgetPasswordMutation]);

  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  }, []);

  return (
    <div className={styles.resetPassword}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h3 className={styles.title}>{`Reset Password`}</h3>
          <p
            className={
              styles.description
            }>{`Please enter your email to receive a link for reset password.`}</p>
          <Input
            id={'email'}
            label={'Email'}
            onChange={onChangeEmail}
            value={email}
            placeholder={'Email'}
            errorText={emailError}
          />

          <div className={styles.buttonContainer}>
            <Button
              label={'Send Instruction'}
              id={'send_email'}
              onClick={onPressSubmit}
              disabled={!email.trim()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
