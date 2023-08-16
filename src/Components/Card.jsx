

const Card = ({card}) => {
  return (
    card.map(
        (cartas, index) => (
          <div key={index}style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            border: '1px solid black',
          }}>
            <h3>Hola: {cartas.name}</h3>
            <p>Genero Musical Favorito:{cartas.genero}</p>
          </div>
        )
    )
  )
}

export default Card