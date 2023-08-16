

const Card = ({card}) => {
  return (
    card.map(
        (cartas, index) => (
          <div key={index} >
            <h3>Nombre: {cartas.name}</h3>
            <p>Genero Musical:{cartas.genero}</p>
          </div>
        )
    )
  )
}

export default Card