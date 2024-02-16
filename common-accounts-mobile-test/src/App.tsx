import styles from './App.module.css';

import BaseButton from './components/button/BaseButton';
import CommonAccountsSignup from './components/templates/commonAccountsSignup/CommonAccountsSignup';

function App() {
  return (
    <>
      <main className={styles.rootContainer}>
        <section className={styles.appContainer}>
          <h1>Common Accounts Mobile Test</h1>
          <p>통합계정 절차 시나리오에 따른 팝업창 테스트</p>
          <CommonAccountsSignup />
        </section>
      </main>
    </>
  );
}

export default App;
