import styles from './CommonAccountsSignup.module.css';

import BaseButton from '../../atoms/button/BaseButton';
import { RED_SERVICE_ID, BLUE_SERVICE_ID } from '../resource/index';

const CommonAccountsSignup = () => {
  let commonAccountsSignupPopup: Window | null = null;

  const setCommonAccountsSignupUrl = (serviceId: string) => {
    let baseUrl = new URL(`http://dev.accounts.susimdal.com/sign-up`);

    baseUrl.searchParams.set('step', '0');
    baseUrl.searchParams.set('serviceId', serviceId);

    return baseUrl;
  };

  const popupfullSizeParams = () => {
    let params = `width= ` + screen.width;
    params += `, height= ` + screen.height;
    params += `, top=0, left=0`;
    params += `, fullscreen=yes`;

    return params;
  };

  const popupMessageListener = (event: MessageEvent) => {
    if (event.origin !== 'http://dev.accounts.susimdal.com') {
      return;
    }

    if (event.data === 'popup-close') {
      commonAccountsSignupPopup?.close();
      window.removeEventListener('message', popupMessageListener);
      return;
    }

    const parsedUserDto = JSON.parse(event.data);
    console.log(parsedUserDto);
  };

  const openSignupPopup = () => {
    const popupParams = popupfullSizeParams();
    const commonAccountsSignupUrl = setCommonAccountsSignupUrl(BLUE_SERVICE_ID); // blue

    commonAccountsSignupPopup = window.open(commonAccountsSignupUrl, 'blueSignup', popupParams);
    window.addEventListener('message', popupMessageListener);
  };

  return (
    <>
      <div className={styles.container}>
        <h3>통합계정 회원가입</h3>
        <BaseButton title="회원가입" type="button" onClick={openSignupPopup} />
      </div>
    </>
  );
};

export default CommonAccountsSignup;
