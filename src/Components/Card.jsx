

const Card = ({card}) => {
  return (
    card.map(
        (cartas, index) => (
          <div key={index} >
            <h3>Hola: {cartas.name}</h3>
            <p>Genero Musical Favorito:{cartas.genero}</p>
          </div>
        )
    )
  )
}

export default Card