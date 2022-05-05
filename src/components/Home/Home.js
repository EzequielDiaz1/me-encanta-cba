import styles from "./Home.module.css";


const array = [1,2,3,4,5,6,7,8]

const Home = () => {
  return (
    <div className={styles.containerPadre}>
      <div className={styles.containerCards} >
       {array.map(elem => (
          <div className={styles.card}>
          <h4 className={styles.title}>Titulo</h4>
          <img alt='ok' src='https://st2.depositphotos.com/5943796/11433/v/600/depositphotos_114332550-stock-illustration-initial-letter-sf-silver-gold.jpg' height={150} width={150}/>
          <p className={styles.text}>Descripción del producto. 64 caracteres seguramente</p>
          <strong className={styles.price}>$500</strong>
      </div>
       ))}
      </div>
    </div>
  );
};

export default Home;
