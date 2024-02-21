import styles from './CommonAccountsSignup.module.css';

import BaseButton from '../../atoms/button/BaseButton';

import { WindowPopupHandler } from '../../../workers/WindowPopupHandler';
import { serviceIdObj } from '../resource/index';

type CommonAccountsSignupProps = {
  serviceId: string;
};

const CommonAccountsSignup = ({ serviceId }: CommonAccountsSignupProps) => {
  const windowPopupHandler = new WindowPopupHandler();

  const openSignupPopup = (serviceId: string) => () => {
    windowPopupHandler.openSignupPopup('sign-up', serviceIdObj[serviceId as 'RED' | 'BLUE']);
  };

  return (
    <>
      <div className={styles.container}>
        <h3>통합계정 회원가입</h3>
        <BaseButton title="회원가입" type="button" onClick={openSignupPopup(serviceId)} />
      </div>
    </>
  );
};

export default CommonAccountsSignup;
