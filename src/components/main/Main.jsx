import React from "react"
import './main.css'
import avatar from '../../assests/avatar.jpg'
import Chart from '../charts/Charts'

const Main = ()=>{
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={avatar} alt="hello"/>
                    <div className="main__greeting" style={{display:'inline-block'}}>
                        <h1> Hello Consumer</h1>
                        <p> Welcome to your Dashboard </p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Subscribers</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-clock fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>
                

                    <div className="card">
                        <i className="fa fa-video fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title">340</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>
                </div>
                
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California , USA</p>
                            </div>
                            <i className="fa fa-dollar-sign"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, California , USA</p>
                            </div>
                            <i className="fa fa-dollar-sign"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>
                        
                            <div className="card2">
                                <h1>Sales </h1>
                                <p>$124,200</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>
    
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1881</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main