
const Card = ({card}) => {
  return (
    card.map(
        (cartas, index) => (
          <div key={index}>
            <h3>{cartas.name}</h3>
            <p>{cartas.genero}</p>
          </div>
        )
    )
  )
}

export default Card