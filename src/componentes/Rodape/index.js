import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src="images/fb.png" alt="Logo do Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/tw.png" alt="Logo do Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/deiv_soares/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/ig.png" alt="Logo do Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Deivison Soares.
                </p>
            </section>
        </footer>
    )
}

export default Rodape