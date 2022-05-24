import styles from "./Home.module.css";


const array = [1,2,3,4,5,6,7,8]

const Home = () => {
  return (
    <div className={styles.containerPadre}>
       <h1 className={styles.titulo}>Algunos de nuestros productos</h1>
      <div className={styles.containerCards} >   
       {array.map(elem => (
          <div className={styles.card}>
          <h4 className={styles.title}>Titulo</h4>
          <img alt='ok' src='https://www.pequenitosbabyshop.com.ar/uploads/producto/329/imagenes/variedades/574/pack-2-chupetes-freeflow-de-0-a-6-meses-pajaritos-nena-1-medium.jpeg' height={150} width={150}/>
          <p className={styles.text}>Descripción del producto. 64 caracteres seguramente</p>
          <strong className={styles.price}>$500</strong>
      </div>
       ))}
      </div>
    </div>
  );
};

export default Home;
