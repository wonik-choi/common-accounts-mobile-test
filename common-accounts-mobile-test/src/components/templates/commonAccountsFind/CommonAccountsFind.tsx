import React from 'react';

import styles from './CommonAccountsFind.module.css';

import BaseButton from '../../atoms/button/BaseButton';

import { WindowPopupHandler } from '../../../workers/WindowPopupHandler';
import { serviceIdObj } from '../resource/index';

type CommonAccountsFindProps = {
  serviceId: string;
};

const CommonAccountsFind = ({ serviceId }: CommonAccountsFindProps) => {
  const windowPopupHandler = new WindowPopupHandler();

  const openIntegratePopup = (serviceId: string, email?: string) => () => {
    windowPopupHandler.openSignupPopup('find', serviceIdObj[serviceId as 'RED' | 'BLUE'], email);
  };

  return (
    <>
      <div className={styles.container}>
        <h3>이메일/비밀번호 찾기</h3>
        <BaseButton title="이메일/비밀번호 찾기" type="button" onClick={openIntegratePopup(serviceId)} />
      </div>
    </>
  );
};

export default CommonAccountsFind;
