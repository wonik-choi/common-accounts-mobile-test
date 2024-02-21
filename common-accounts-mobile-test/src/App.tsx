import { useState } from 'react';
import styles from './App.module.css';

import RadioGroup from './components/molecules/RadioGroup/RadioGroup';
import CommonAccountsSignup from './components/templates/commonAccountsSignup/CommonAccountsSignup';
import CommonAccountsIntegrate from './components/templates/commonAccountsIntegrate/CommonAccountsIntegrate';
import CommonAccountsUpdateTerm from './components/templates/commonAccountsUpdateTerm/CommonAccountsUpdateTerm';
import CommonAccountsFind from './components/templates/commonAccountsFind/CommonAccountsFind';
import CommonAccountsConnectService from './components/templates/commonAccountsConnectService/CommonAccountsConnectService';

function App() {
  const [serviceId, setServiceId] = useState<string>('RED');

  const serviceIdOptions = [
    {
      id: '1',
      label: 'RED',
      value: 'RED',
      name: 'serviceId',
      defaultChecked: true,
    },
    {
      id: '2',
      label: 'BLUE',
      value: 'BLUE',
      name: 'serviceId',
      defaultChecked: false,
    },
  ];

  const handleServiceIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceId(e.target.value);
  };

  return (
    <>
      <main className={styles.rootContainer}>
        <section className={styles.appContainer}>
          <h1>Common Accounts Mobile Test</h1>
          <p>통합계정 절차 시나리오에 따른 팝업창 테스트</p>
          <RadioGroup options={serviceIdOptions} onChange={handleServiceIdChange} />
          <div className={styles.line}></div>
          <div className={styles.buttonContainer}>
            <CommonAccountsSignup serviceId={serviceId} />
            <CommonAccountsIntegrate serviceId={serviceId} />
            <CommonAccountsUpdateTerm serviceId={serviceId} />
            <CommonAccountsFind serviceId={serviceId} />
            <CommonAccountsConnectService serviceId={serviceId} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
