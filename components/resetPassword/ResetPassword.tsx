import React, { ChangeEvent, useCallback, useState } from 'react';
import styles from '../../styles/ResetPassword.module.scss';
import { Button, Input } from '@/components/index';
import { useMutation } from 'react-query';
import { changePasswordApi } from '../../services/user';

const ResetPassword = () => {
  const [passwordInfo, setPasswordInfo] = useState({
    password: '',
    confirm_password: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    password: '',
    confirm_password: '',
  });
  const changePasswordMutation = useMutation(changePasswordApi);

  const onChangePasswordInfo = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const id = event.target.id;
      const value = event.target.value;
      setPasswordInfo(prevState => ({
        ...prevState,
        [id]: value,
      }));
    },
    [],
  );

  const checkValidation = useCallback(() => {
    const regPassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    const temp = {
      password: '',
      confirm_password: '',
    };
    if (
      passwordInfo.password.length < 8 ||
      !regPassword.test(passwordInfo.password)
    ) {
      temp.password =
        'Password Must contain 8 or more characters, at least one uppercase, number, and symbol.';
    } else if (passwordInfo.password !== passwordInfo.confirm_password) {
      temp.confirm_password = 'Password and confirm password must be same.';
    }
    setErrorInfo(temp);
    return temp;
  }, [passwordInfo.confirm_password, passwordInfo.password]);

  const onPressSubmit = useCallback(() => {
    const validation = checkValidation();
    if (!validation.confirm_password && !validation.password) {
      const payload = {
        password: passwordInfo.password,
        confirm_password: passwordInfo.confirm_password,
      };
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const code = params.get('code');
      const finalPayload = {
        code: code || '',
        payload,
      };
      if (finalPayload.code && finalPayload.payload) {
        changePasswordMutation.mutate(finalPayload, {
          onSuccess: () => {
            alert('Password reset successfully');
          },
          onError: (err: any) => {
            console.error('Error in update password', err);
            alert('Somethings went wrong');
          },
        });
      }
    }
  }, [
    changePasswordMutation,
    checkValidation,
    passwordInfo.confirm_password,
    passwordInfo.password,
  ]);

  return (
    <div className={styles.resetPassword}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h3 className={styles.title}>{`Reset Password`}</h3>
          <p
            className={
              styles.description
            }>{`Lorem ipsum dolor sit amet consectetur. In ultricies id ipsum maecenas commodo aliquam posuere amet consectetur. `}</p>
          <div className={styles.inputContainer}>
            <Input
              id={'password'}
              label={'New Password'}
              onChange={onChangePasswordInfo}
              value={passwordInfo.password}
              placeholder={'New Password'}
              type={'password'}
              errorText={errorInfo.password}
            />
          </div>
          <Input
            id={'confirm_password'}
            label={'Confirm New Password'}
            onChange={onChangePasswordInfo}
            value={passwordInfo.confirm_password}
            placeholder={'Confirm New Password'}
            type={'password'}
            errorText={errorInfo.confirm_password}
          />
          <div className={styles.buttonContainer}>
            <Button
              label={'Reset Password'}
              id={'reset_password'}
              onClick={onPressSubmit}
              disabled={
                !passwordInfo.password || !passwordInfo.confirm_password
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
