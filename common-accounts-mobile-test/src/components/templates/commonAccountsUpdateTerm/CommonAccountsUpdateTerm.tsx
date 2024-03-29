import React from 'react';
import { useState } from 'react';

import styles from './CommonAccountsUpdateTerm.module.css';

import BaseButton from '../../atoms/button/BaseButton';
import BaseInput from '../../atoms/input/BaseInput';

import { WindowPopupHandler } from '../../../workers/WindowPopupHandler';
import { serviceIdObj } from '../resource/index';

type CommonAccountsUpdateTermProps = {
  serviceId: string;
};

const CommonAccountsUpdateTerm = ({ serviceId }: CommonAccountsUpdateTermProps) => {
  const [info, setInfo] = useState({
    email: '',
  });

  const windowPopupHandler = new WindowPopupHandler();

  const openIntegratePopup = (serviceId: string, email: string) => () => {
    windowPopupHandler.openSignupPopup('update-term', serviceIdObj[serviceId as 'RED' | 'BLUE'], email);
  };

  const handleInputInfoChange = (props: any) => {
    setInfo({ ...info, [props.name]: props.value });
  };

  return (
    <>
      <div className={styles.container}>
        <h3>추가 약관동의</h3>
        <BaseInput label="email" placeholder="이메일을 입력하세요" type="text" onChange={handleInputInfoChange} />
        <BaseButton title="추가약관동의" type="button" onClick={openIntegratePopup(serviceId, info.email)} />
      </div>
    </>
  );
};

export default CommonAccountsUpdateTerm;
