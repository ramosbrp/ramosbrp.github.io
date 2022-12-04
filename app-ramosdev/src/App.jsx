import './App.css';
import logo from './img/logo.png';
import github from './img/github-2.png';
import email from './img/email-2.png';
import whatsapp from './img/whatsapp-2.png';

function App() {

    function displayAbout() {
        var arrow = document.getElementById("animation");
        arrow.classList.toggle("rotate");

        var display = document.getElementById("about");
        display.classList.toggle("active");
    }

    return (

        <>
            <header>
                {/*Logo */}
                <div>
                    <img id="logo" src={logo} alt="Logo" />
                </div>

                {/*Links */}
                <ul>
                    <li>
                        <a target="blank" href="https://github.com/ramosbrp">
                            <img src={github} alt="gitHub" /> <br />
                            gitHub</a>
                    </li>
                    <li>
                        <a target="blank" href="mailto:bruno.rp45@gmail.com">
                            <img src={email} alt="email" /> <br />
                            e-mail</a>
                    </li>
                    <li>
                        <a target="blank" href="https://wa.me/21989140246">
                            <img src={whatsapp} alt="whatsapp" /> <br />
                            whatsapp</a>
                    </li>
                </ul>

            </header>

            <main>
                <section className="container" >
                    {/*Apresentação*/}
                    <div className="name" >
                        <h1>Bruno Ramos</h1>
                        <h5>Full-Stack Developer</h5>
                    </div>

                    {/*arrow*/}
                    <div onClick={displayAbout} id="arrow" >
                        <i id="animation" className="fas fa-sort-down"></i>
                    </div>

                    {/*texto about me */}
                    <div style={{ display: 'none' }} id="about" className="active" >
                        <p>
                            Desenvolvedor da web e estudante de engenharia da computação apaixonado por tecnologia.
                            Minhas habilidades: JavaScrypt/TypeScrypt, React, C#.
                        </p>
                    </div>

                    {/*Deixar contato */}
                    <div className="form" >
                        <div>
                            <p>deixe seu contato!</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="seu melhor email :)" />
                            <button>enviar!</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App;
