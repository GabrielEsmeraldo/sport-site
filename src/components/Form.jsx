export default props => {
    return (
        <form action="">
            <input type="text" placeholder="Digite seu nome..."/>
            <input type="text" placeholder="Digite seu telefone..."/>
            <input type="text" placeholder="Digite seu e-mail..."/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem..."></textarea>
            {props.children}
        </form>
    )
}