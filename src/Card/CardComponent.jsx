import styles from './card.module.css';

export const CardComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.topContainer}>
          <div className={styles.cardIcon}>F</div>
          <div id='badge' className={styles.badge}><span>Ready</span></div>
        </div>

        <div>
          <span id='sub' className={styles.subheading}>0/16</span>
          <span id='heading' className={styles.heading}>Banking Setup</span>
        </div>

        <div>
          <span className=''>Materials needed:</span>
          <ul>
            <li>W-9(s)</li>
            <li>AOI</li>
            <li>CP-575</li>
          </ul>
        </div>

        <div className={styles.cardCTA}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div >
  );
}
