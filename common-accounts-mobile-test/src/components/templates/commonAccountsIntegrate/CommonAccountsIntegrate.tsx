import React from 'react';
import { useState } from 'react';

import styles from './CommonAccountsIntegrate.module.css';

import BaseButton from '../../atoms/button/BaseButton';
import BaseInput from '../../atoms/input/BaseInput';

import { WindowPopupHandler } from '../../../workers/WindowPopupHandler';
import { serviceIdObj } from '../resource/index';

type CommonAccountsIntegrateProps = {
  serviceId: string;
};

const CommonAccountsIntegrate = ({ serviceId }: CommonAccountsIntegrateProps) => {
  const [info, setInfo] = useState({
    email: '',
  });

  const windowPopupHandler = new WindowPopupHandler();

  const openIntegratePopup = (serviceId: string, email: string) => () => {
    windowPopupHandler.openSignupPopup('migrate', serviceIdObj[serviceId as 'RED' | 'BLUE'], email);
  };

  const handleInputInfoChange = (props: any) => {
    setInfo({ ...info, [props.name]: props.value });
  };

  return (
    <>
      <div className={styles.container}>
        <h3>통합계정으로 전환</h3>
        <BaseInput label="email" placeholder="이메일을 입력하세요" type="text" onChange={handleInputInfoChange} />
        <BaseButton title="마이그레이션" type="button" onClick={openIntegratePopup(serviceId, info.email)} />
      </div>
    </>
  );
};

export default CommonAccountsIntegrate;
