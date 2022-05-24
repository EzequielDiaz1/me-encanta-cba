import styles from "./Catalogo.module.css";

const categorias = [
  "Chupetes",
  "Mamaderas",
  "Tazas",
  "Remeras",
  "Computadoras",
];
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const Catalogo = () => {
  return (
    <div >

    
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        fontSize: "18px",
        
      }}
    >
      {categorias.map((categoria, index) => (
        <div style={{ marginBottom: "-20px" }}>
          <p>{categoria}</p>
        </div>
      ))}
      <div className={styles.containerCards}>
        {array.map((elem) => (
          <div className={styles.card}>
            <h4 className={styles.title}>Titulo</h4>
            <img
              alt="ok"
              src="https://www.pequenitosbabyshop.com.ar/uploads/producto/329/imagenes/variedades/574/pack-2-chupetes-freeflow-de-0-a-6-meses-pajaritos-nena-1-medium.jpeg"
              height={150}
              width={150}
            />
            <p className={styles.text}>
              Descripción del producto. 64 caracteres seguramente
            </p>
            <strong className={styles.price}>$500</strong>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Catalogo;
