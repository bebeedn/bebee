import Image from 'next/image';
import styles from './AchievementSection.module.css';

export default function AchievementSection() {
  const achievements = [
    { number: '01', text: 'НУШ', icon: 'picture_008.png' },
    { number: '02', text: 'Канадсько-фінська методика', icon: 'picture_011.png' },
    { number: '03', text: 'Daily 5', icon: 'picture_010.png' },
    { number: '04', text: 'Soft Skills', icon: 'picture_013.png' },
    { number: '05', text: 'Поглиблене вивчення англійської мови', icon: 'picture_014.png' },
    { number: '06', text: 'Метод проєктів', icon: 'picture_012.png' },
    { number: '07', text: 'Інноваційність', icon: 'picture_016.png' },
    { number: '08', text: 'Професійні педагоги', icon: 'picture_015.png' },
    { number: '09', text: 'Зручний графік', icon: 'picture_018.png' },
    { number: '10', text: 'Медичний супровід дітей лікарем-педіатром', icon: 'picture_009.png' },
    { number: '11', text: 'Класи до 15 дітей', icon: 'picture_007.png' },
    { number: '12', text: 'Власний басейн', icon: 'picture_017.png' },
    { number: '13', text: 'Гуртки за вподобаннями', icon: 'picture_002-1.png' },
    { number: '14', text: 'Профільні класи', icon: 'picture_020.png' },
    { number: '15', text: 'Закрита територія', icon: 'picture_021.png' },
  ];

  return (
    <section className={styles.achievement} id="achievement">
      <h2 className={styles.title}>Чому обирають нас?</h2>
      <div className={styles.divider}></div>

      <ol className={styles.list}>
        {achievements.map((item) => (
          <li key={item.number} className={styles.item}>
            <div className={styles.icon}>
              <Image
                src={`/images/2026/02/${item.icon}`}
                alt={item.text}
                width={80}
                height={80}
                quality={75}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.number}>{item.number}</div>
              <span className={styles.text}>{item.text}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
