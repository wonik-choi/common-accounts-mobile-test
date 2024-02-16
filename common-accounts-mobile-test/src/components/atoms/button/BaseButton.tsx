import styles from './BaseButton.module.css';

type BaseButtonProps = {
  title: string;
  type: 'submit' | 'button';
  onClick: () => void;
};

const BaseButton = ({ title, type, onClick }: BaseButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
};

export default BaseButton;
