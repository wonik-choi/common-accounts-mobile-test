import styles from './RadioGroup.module.css';
import BaseRadioInput from '../../atoms/radio/BaseRadioInput';

import { BaseRadioInputProps } from '../../atoms/radio/BaseRadioInput';

type RadioGroupProps = {
  options: Omit<BaseRadioInputProps, 'onChange'>[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioGroup = ({ options, onChange }: RadioGroupProps) => {
  return (
    <div className={styles.radioGroupContainer}>
      {options.map((option, index) => (
        <BaseRadioInput
          key={index}
          id={option.id}
          name={option.name}
          label={option.label}
          value={option.label}
          defaultChacked={option.defaultChecked}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
