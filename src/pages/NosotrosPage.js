import '../styles/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main>
            <div className="info">
                <div className="trayectoria">
                    <h3><span>T</span>rayectoria</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id incidunt animi itaque
                        voluptatem, vel
                        modi veniam laboriosam veritatis cupiditate vitae ulit illum beatae autem voluptatum iusto
                        quia.</p>
                </div>
                <div className="objetivo">
                    <h3><span>O</span>bjetivo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id incidunt animi itaque
                        voluptatem, vel
                        modi veniam laboriosam veritatis cupiditate vitae ullam atque impedit illum beatae autem voluptatum
                        iusto
                        quia. ng elit. Perferendis id incidunt animi itaque voluptatem, vel
                        modi veniam laboriosam .</p>
                </div>
            </div>
            <div className="staff">
                <h3><span>N</span>uestros <span>P</span>rofesores</h3>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros/nosotros2.jpg" alt="#"></img>
                            <h5>Marta Rodriguez</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, est soluta aliquid mol?
                                Amet minima odit consequuntur saepe voluptatem.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros3.jpg" alt="#"></img>
                            <h5>Juan Maserati</h5>
                            <p>Voluptatibus, est soluta aliquid mol? Amet minima odit consequuntur saepe voluptatem.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros4.jpg" alt="#"></img>
                            <h5>Fiona Ferrari</h5>
                            <p>Dlor sit amet consectetur adipisicing elit. Voluptatibus, est soluta aliquid mol? Amet minima
                                odit consequuntur saepe voluptatem.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros5.jpg" alt="#"></img>
                            <h5>Miguel Pagani</h5>
                            <p>LAdipisicing elit. Voluptatibus, est soluta aliquid mol? Amet minima odit consequuntur saepe
                                voluptatem.</p>
                    </div>
                </div>
            </div>
        </main>


    )

}

export default NosotrosPage;