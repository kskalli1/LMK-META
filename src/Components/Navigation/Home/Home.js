import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './Assets/bg.jpg';
import eos from './Assets/eos.png';
import ethereum from './Assets/ethereum.png';
import cosmos from './Assets/cosmos.png';
import axie from './Assets/axie.png';
import oracle from './Assets/oracle.png';
import novo from './Assets/novo.png';
import boa from './Assets/boa.png';
import vinci from './Assets/vinci.png';

export default function Home() {
    return (
        <Carousel variant="dark">
            <Carousel.Item interval={1000} >
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <img
                        src={eos}
                        alt="eos"
                        width={'300px'}
                        height={'300px'} />
                    <h3>EOS</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <img
                        src={ethereum}
                        alt="ethereum"
                        width={'500px'}
                        height={'300px'} />
                    <h3>Ethereum</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <img
                        src={cosmos}
                        alt="cosmos"
                        width={'250px'}
                        height={'auto'} />
                    <h3>Cosmos</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <img
                        src={axie}
                        alt="axie"
                        width={'300px'}
                        height={'auto'} />
                    <h3>Axie infinity</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <img
                        src={oracle}
                        alt="oracle"
                        width={'300px'}
                        height={'300px'} />
                    <h3>Oracle</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <img
                        src={novo}
                        alt="novo"
                        width={'300px'}
                        height={'300px'} />
                    <h3>Novo Nordisk</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <img
                        src={boa}
                        alt="boa"
                        width={'600px'}
                        height={'auto'} />
                    <h3>Bank of america</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg}
                    width={'800px'}
                    height={'600px'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <img
                        src={vinci}
                        alt="vinci"
                        width={'300px'}
                        height={'300px'} />
                    <h3>Vinci</h3>
                    <p>Investissez et récupérer rapidement vos gains</p>
                    <button className='btn btn-outline-dark'>
                        <NavLink to='/purchase' style={{ textDecoration: "none" }}>
                            <h4 style={{ color: "#F5CB5C" }}>Cliquez ici</h4>
                        </NavLink>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
