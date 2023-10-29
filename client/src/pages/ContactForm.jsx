export function ContactForm(){
    return(
        <>
            <h1>Contáctenos</h1>
            <form>
                <p>Asunto: <input type="text" name="textAsunto"/></p>
                <p>Email: <input type="email" name="textEmail"/></p>
                <p>
                    Mensaje:
                    <textarea name="textMensaje" rows="5" cols="30"></textarea>
                </p>
                <input type="submit" value="Enviar"/>
            </form>
  
        </>
    )
}