import React from 'react';

import styles from './CommonAccountsFind.module.css';

import BaseButton from '../../atoms/button/BaseButton';

import { WindowPopupHandler } from '../../../workers/WindowPopupHandler';
import { serviceIdObj } from '../resource/index';

const CommonAccountsFind = () => {
  const windowPopupHandler = new WindowPopupHandler();

  const openIntegratePopup = (serviceId: 'red' | 'blue', email?: string) => () => {
    windowPopupHandler.openSignupPopup('find', serviceIdObj[serviceId], email);
  };

  return (
    <>
      <div className={styles.container}>
        <h3>이메일/비밀번호 찾기</h3>
        <BaseButton title="이메일/비밀번호 찾기" type="button" onClick={openIntegratePopup('red')} />
      </div>
    </>
  );
};

export default CommonAccountsFind;
