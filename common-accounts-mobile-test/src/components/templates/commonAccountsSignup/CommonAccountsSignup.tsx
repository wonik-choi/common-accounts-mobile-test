import styles from './CommonAccountsSignup.module.css';

import BaseButton from '../../atoms/button/BaseButton';

import { WindowPopupHandler } from '../../../workers/WindowPopupHandler';
import { serviceIdObj } from '../resource/index';

const CommonAccountsSignup = () => {
  const windowPopupHandler = new WindowPopupHandler();

  const openSignupPopup = (serviceId: 'red' | 'blue') => () => {
    windowPopupHandler.openSignupPopup('sign-up', serviceIdObj[serviceId]);
  };

  return (
    <>
      <div className={styles.container}>
        <h3>통합계정 회원가입</h3>
        <BaseButton title="회원가입" type="button" onClick={openSignupPopup('blue')} />
      </div>
    </>
  );
};

export default CommonAccountsSignup;
