import styles from './Textfloat.module.css';

export default function Textfloat({ x }: { x: string }) {
  return (
    <span className={styles.textfloat}>
      {x.split('').map((char, index) => (
        <span key={index}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
