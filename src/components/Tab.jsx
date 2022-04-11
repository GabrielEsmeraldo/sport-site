import Title from "./Title"

export default props => {
    return (
        <div className="tab">
            <Title title="Sobre Nós"></Title>
            <div>
                <button className="btn-tab">Sobre o serviço</button>
                <button className="btn-tab">Quem combina</button>
                <button className="btn-tab">Níveis</button>
            </div>
            <div>
                <p>Este projeto é projetado para ajudá-lo a alcançar a forma desejada para o benefício de sua saúde. Será desenvolvida uma dieta individual para cada participante, tendo em conta a sua rotina diária, bem como as indicações médicas. Você aprenderá a comer os alimentos certos na quantidade certa, como resultado do qual o peso derreterá sem deixar vestígios e sem retorno.
                E para isso você não precisa passar fome!</p><br/>

                <p>Além disso, se desejar, você pode escolher um programa de treinamento e, sob a supervisão de treinadores experientes, fazê-lo em casa. Seu progresso será registrado semanalmente em seu perfil em sua conta pessoal.</p>
            </div>
        </div>
    )
}