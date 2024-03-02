import Botao from "../Botao"


const Form = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required/>
            </div>
            <div>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required/>
            </div>
            <Botao texto="Adicionar" />
        </form>
    )
}

export default Form