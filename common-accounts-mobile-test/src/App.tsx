import styles from './App.module.css';
import CommonAccountsSignup from './components/templates/commonAccountsSignup/CommonAccountsSignup';
import CommonAccountsIntegrate from './components/templates/commonAccountsIntegrate/CommonAccountsIntegrate';
import CommonAccountsUpdateTerm from './components/templates/commonAccountsUpdateTerm/CommonAccountsUpdateTerm';
import CommonAccountsFind from './components/templates/commonAccountsFind/CommonAccountsFind';

function App() {
  return (
    <>
      <main className={styles.rootContainer}>
        <section className={styles.appContainer}>
          <h1>Common Accounts Mobile Test</h1>
          <p>통합계정 절차 시나리오에 따른 팝업창 테스트</p>
          <p>* 현재는 RED 서비스 고정입니다</p>
          <div className={styles.line}></div>
          <div className={styles.buttonContainer}>
            <CommonAccountsSignup />
            <CommonAccountsIntegrate />
            <CommonAccountsUpdateTerm />
            <CommonAccountsFind />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
