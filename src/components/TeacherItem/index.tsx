import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
    return(
<article className="teacher-item">
<header>
    <img src="https://ogimg.infoglobo.com.br/in/23888272-db3-f38/FT1086A/652/livro-bope.jpg" alt="Willame Costa"/>
    <div>
        <strong>Willame costa</strong>
        <span>Quimica</span>
    </div>
</header>

<p>
    Developer em Reactjs desenvolvimentos de aplicações complexas.
        <br/><br/>
    Fundador do whatSapp e Instagram sempre buscando inovação e complexibilidade.

</p>
<footer>
    <p>
    Preço/hora
    <strong>R$ 80,00</strong>
    </p>
    <button type="button">
    <img src={whatsappIcon} alt="Whatsapp"/>
    Entrar em contato
    </button>
</footer>
</article>
    );
}
export default TeacherItem;


