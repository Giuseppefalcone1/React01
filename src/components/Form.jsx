import { useState } from 'react'
function Form(){

    const [formData,setFormData] = useState({
    produttore:"",
    modello:"",
    colore:"",
  })

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;  // 1. catturiamo il name e value dell'input
  
    setFormData((prev) => ({...prev, [name]: value}));//2. cambiamo con i nuovi dati nel formData
    console.log(name, value);
  }



  return(
    <>
      <input type="text"
        name='produttore'
        value={formData.produttore} //catturiamo l'input formData.produttore e lo inscatoliamo nel value
        onChange={handleChange} //ogni cambiamento richiamiamo la funzione handleChange
      />
    </>
  )

}

export default Form