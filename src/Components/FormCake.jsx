import { useParams } from "react-router-dom";
import queques from "../Data/Data";

const FormCake = () => {
    //Uso de parametro que indica el ID del queque
    const { id } = useParams();

    //function del FormCake
    const wombat = queques
    .filter(function (queque) {
      return queque.id === id;
    })
    .map(function (queque) {
      return (
        <queque className="imagen">
          <div className="">
            <h1>Esto es un formulario</h1>
            <img src={queque.imagen} alt="" />
            <h1>{queque.name}</h1>
            <p>{queque.desc}</p>
          </div>
        </queque>
      );
    });
  console.log(wombat);
  //Formulario del a estilizar
  return (
    <form action="">
      <label htmlFor="">{wombat}</label>
    </form>
  );
}

export default FormCake
