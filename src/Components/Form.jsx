import { useState } from "react";
import Card from "./Card";



const Form = ({setError}) => {

    const [info,setInfo] = useState({
        name:"",
        genero:""
    })

    const [card,setCard] = useState([])

    const  [ver,setVer]=useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (info.name.length>2 && info.genero.length>5 && info.name[0]!== " ") {
            setCard([info,...card])
            setError(false)
            setVer(true)
        }else{
            setError(true)
        }
    }

    const handleChange = (e) => {
        setInfo({
          ...info,
            [e.target.name]:e.target.value
        })
        console.log(info);
    }

    
    
    return (
    <div>

        <form onSubmit={handleSubmit} style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
        <label >Nombre</label>
        <input type="text"onChange={handleChange} name="name"/>
        <label >Genero musical</label>
        <input type="text" onChange={handleChange} name="genero"/>
        <button>Enviar</button>
        </form>
        {ver && <Card card={card}/>}
    </div>
    

)
}

export default Form