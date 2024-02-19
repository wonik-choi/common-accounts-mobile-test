import React from 'react';
import { useState } from 'react';

import styles from './BaseInput.module.css';

type BaseInputProps = {
  onChange: (props: any) => void;
  label: string;
  placeholder: string;
  type: 'text' | 'number';
};

const BaseButton = ({ label, type, placeholder, onChange }: BaseInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange({ name: label, value: e.target.value });
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input" className={styles.label}>
        {label}
      </label>
      <input
        id="input"
        name={label}
        placeholder={placeholder}
        type={type}
        className={styles.input}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default BaseButton;
