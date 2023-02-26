import styles from "./card.module.sass";
import Icon from "./icon-flag.png";

export default function Card({
  status = "Ready",
  heading,
  complete = 0,
  total,
  desc,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.cardHeader}>
          <CardIcon />
          <Badge status={status} />
        </div>
        <div className={styles.cardBody}>
          {total && (
            <span id="sub" className={styles.subHead}>
              {complete}/{total}
            </span>
          )}
          <span id="heading" className={styles.heading}>
            {heading}
          </span>

          <div className={styles.desc}>
            {desc && (
              <>
                <span className="">Materials needed:</span>
                <ul>
                  {desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardCTA}>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Badge = ({ status }) => {
  return (
    <div id="badge" className={styles.badge}>
      <span>{status}</span>
    </div>
  );
};

const CardIcon = () => {
  return (
    <div className={styles.cardIcon}>
      <img src={Icon} alt="icon" />
    </div>
  );
};
