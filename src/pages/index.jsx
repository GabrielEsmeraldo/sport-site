import Menu from '../components/Menu'
import MainSection from '../components/MainSection'
import AboutSection from '../components/AboutSection'
import Tab from '../components/Tab'
import Results from '../components/Results'
import Title from '../components/Title'
import ResultsCard from '../components/ResultsCard'
import CommentsSection from '../components/CommentsSection'
import Comments from '../components/Comments'
import AskSection from '../components/AskSection'
import ContactSection from '../components/ContactSection'
import MapSection from '../components/MapSection'
import ComponentsGroup from '../components/ComponentsGroup'
import Subtitle from '../components/Subtitle'
import Form from '../components/Form'
import Button from '../components/Button'
import Map from '../components/Map'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='container'>

            <MainSection>
                <Menu></Menu>
            </MainSection>

            <AboutSection>
                <Tab></Tab>
                <img className='iphone' src="/img/iPhone.png" alt="" />
            </AboutSection>

            <Results>
                <Title title="Resultados de nossos clientes"></Title>
                <div className="results-card-group">
                    <ResultsCard data='150+' description='Participantes já melhoraramseu corpo com nossa equipe.'></ResultsCard>
                    <ResultsCard data='20' description='Quantos meses existe o projeto “SB”.'></ResultsCard>
                    <ResultsCard data='500+' description='Quilo em geral perdido para todos os participantes.'></ResultsCard>
                    <ResultsCard data='15' description='Especialistas certificados em contato com você.'></ResultsCard>
                </div>
            </Results>

            <CommentsSection>
                <Comments></Comments>
            </CommentsSection>


            <ComponentsGroup>
                <AskSection>
                    <Title title="Alguma pergunta?"></Title>
                    <Subtitle className="subtitle" subtitle="Deixe-nos uma mensagem e entraremos em contato imediatamente!"></Subtitle>
                    <Form>
                        <Button style="btn-primary" value="Enviar"></Button>
                    </Form>
                </AskSection>

                <ContactSection>
                    <Subtitle className="subtitle" subtitle="Entre em contato conosco!" ></Subtitle>
                    <div>
                        <div className='mailPhone'>
                            <div className='mail'>
                                <p><img src="/img/mail.png" alt="" />sbcontato@gmail.com</p>
                            </div>
                            <div className='phone'>
                                <p><img src="/img/phone.png" alt="" />+380 (99) 642 - 48 - 72</p>
                            </div>
                            <span>Fax: 123 4567890</span>
                        </div>

                        <img className='logoSb' src="/img/logo.png" alt="" />
                        <p>Compartilhe suas impressões sobre nosso clube de sucesso com seus amigos nas redes sociais</p>

                        <div className='social-media'>
                            <a href="#"><img src="/img/whats.png" alt="logo whatsapp" /></a>
                            <a href="#"><img src="/img/facebook.png" alt="logo facebook" /></a>
                            <a href="#"><img src="/img/youtube.png" alt="logo youtube" /></a>
                            <a href="#"><img src="/img/instagram.png" alt="logo instagram" /></a>
                            <a href="#"><img src="/img/tiktok.png" alt="logo tiktok" /></a>
                            <a href="#"><img src="/img/twitter.png" alt="logo twitter" /></a>
                        </div>
                    </div>
                </ContactSection>

                <MapSection>
                    <Subtitle className="subtitle" subtitle="Onde nos encontrar" ></Subtitle>
                    <Map></Map>
                </MapSection>
            </ComponentsGroup>

            <Footer>
                <Menu></Menu>
            </Footer>

        </div>
    )
}
