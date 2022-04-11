import Button from "./Button";
import MainCard from "./MainCard";

export default function MainSection(props) {
    return (
        <div className="mainSection">
            {props.children}
            <div className="layout">
                <div className="content">
                    <h3>Programa do cliente</h3>
                    <h1>EMAGREÇA EM<br /> <span>56</span> DIAS!</h1>
                    <h2>Nossos instrutores e nutricionistas <br />profissionais o levarão a uma vida<br /> saudável e feliz!</h2>
                    <Button style="btn-primary layout" value="Saiba mais..."></Button>
                </div>
                <img className="model-circle" src="/img/model.png" width="400px" height="400px" />
            </div>
            <div className="mainCardSection">
                <MainCard img="/img/halteres.png" title="Velozes" description="Resultados logo nas primeiras semanas."></MainCard>
                <MainCard img="/img/cherry.png" title="Saboroso" description="Perda de peso sem jejum ou dieta."></MainCard>
                <MainCard img="/img/balance.png" title="Segurança" description="Sob a supervisão de profissionais experientes."></MainCard>
                <MainCard img="/img/weight.png" title="Remotamente" description="Materiais e recomendações online."></MainCard>
            </div>
        </div>
    )
}