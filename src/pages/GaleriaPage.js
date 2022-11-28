import '../styles/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
return (
    <main>
        <div className="galeria">
            <h3> <span>N</span>uestra <span>G</span>aleria</h3>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img src="images/galeria/a.webp" class="w-100 shadow-1-strong rounded mb-4" alt='#'/>
                    <img src="images/galeria/e.jpg" class="w-100 shadow-1-strong rounded mb-4" alt='#'/>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="images/galeria/b.jpg" class="w-100 shadow-1-strong rounded mb-4" alt='#'/>
                    <img src="images/galeria/c.jpg" class="w-100 shadow-1-strong rounded mb-4" alt='#'/>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="images/galeria/d.jpg" class="w-100 shadow-1-strong rounded mb-4" alt='#'/>
                    <img src="images/galeria/f.jpg" class="w-100 shadow-1-strong rounded mb-4" alt='#'/>
                </div>
            </div>
        </div>

    </main>
)

}

export default GaleriaPage;