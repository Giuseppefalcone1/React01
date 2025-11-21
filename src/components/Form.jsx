import { useState } from 'react'

function Form({ addCar }) {

  const [formData, setFormData] = useState({
    produttore: "",
    modello: "",
    anno: "",
    disponibile: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 👈 IMPORTANTISSIMO

    const car = {
      id: Math.random(),
      produttore: formData.produttore,
      modello: formData.modello,
      anno: formData.anno,
      disponibile: formData.disponibile,
    };

    addCar(car); // 👈 aggiunge l’auto
  };

  return (
    <>
      <form onSubmit={handleSubmit}> {/* all'invio chiamo handleSubmit */ }

        <input
          type="text"
          name="produttore"
          value={formData.produttore}
          onChange={handleChange}
        />

        <input
          type="text"
          name="modello"
          value={formData.modello}
          onChange={handleChange}
        />

        <input
          type="text"
          name="anno"
          value={formData.anno}
          onChange={handleChange}
        />

        <input
          type="checkbox"
          name="disponibile"
          checked={formData.disponibile}
          onChange={handleChange}
        />

        <button type="submit">Aggiungi</button>
      </form>
    </>
  );
}

export default Form;
