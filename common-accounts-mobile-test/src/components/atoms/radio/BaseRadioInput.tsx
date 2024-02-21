import { InputHTMLAttributes } from 'react';
import styles from './BaseRadioInput.module.css';

export interface BaseRadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string;
  name: string;
  defaultChacked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseRadioInput = ({ label, id, value, onChange, name, defaultChacked, ...rest }: BaseRadioInputProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        name={name}
        id={id}
        className={styles.radio}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChacked}
        {...rest}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default BaseRadioInput;
