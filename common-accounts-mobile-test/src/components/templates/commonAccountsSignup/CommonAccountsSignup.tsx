import styles from './CommonAccountsSignup.module.css';

import BaseButton from '../../atoms/button/BaseButton';

const CommonAccountsSignup = () => {
  const openSignupPopup = () => {};

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
