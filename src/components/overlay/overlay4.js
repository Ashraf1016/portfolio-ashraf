import arrow from '../../components/images/arrow-path.svg'

const Overlay4 = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }} >
            <div >
            <img src={arrow} alt="arrow" />
    <h2 className="whatido">What i do</h2>
                <div className="root-parent">

                <div className="parent"  >
                    <div className="card">
                        <div className="logo">
                            <span className="circle circle2"></span>
                            <span className="circle circle3"></span>
                        </div>
                        <div className="glass"></div>
                        <div className="content  pt-2">
                            <span className="title">WEB </span>
                            <span className="title"> DEVELOPMENT</span>
                        </div>
                    </div>
                </div>
                <div className="parent2"   >
                    <div className="card">
                        <div className="logo">
                            <span className="circle circle2"></span>
                            <span className="circle circle3"></span>
                        </div>
                        <div className="glass"></div>
                        <div className="content  pt-2">
                            <span className="title">UI/UX </span>
                            <span className="title"> DESIGNING</span>
                        </div>
                    </div>
                </div>
                <div className="parent3" >
                    <div className="card">
                        <div className="logo">
                            <span className="circle circle2"></span>
                            <span className="circle circle3"></span>
                        </div>
                        <div className="glass"></div>
                        <div className="content  pt-2">
                            <span className="title">GRAPHIC </span>
                            <span className="title"> DESIGNING</span>
                        </div>
                    </div>
                </div>
                </div>
             
            </div>

        </div>

    )
}

export default Overlay4