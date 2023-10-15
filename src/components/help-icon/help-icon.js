import HelpImage from './help.png';
import './help.css'
function HelpIcon(){
    return (
        <div className="help-container">
            <img class="help-image" src={HelpImage} alt="ícone de ajuda para o tutorial"/>
            <p className='help-text'>Ajuda</p>
        </div>
    )
}
export default HelpIcon;