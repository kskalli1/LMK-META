import React from 'react';
import './Payment.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Paypal from './Paypal/Paypal';

export default class Payment extends React.Component {
    constructor(props) {

        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeChoix = this.onChangeChoix.bind(this);
        this.onChangeSelectAppointement = this.onChangeSelectAppointement.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            firstname: '',
            email: '',
            choix: '',
            date: '',
        }
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeChoix(e) {
        this.setState({
            choix: e.target.value
        });
    }

    onChangeSelectAppointement(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }



    onSubmit() {
        if (this.state.name != null &&
            this.state.firstname != null &&
            this.state.email != null &&
            this.state.date != null &&
            this.state.choix != null) {
            const user = {
                name: this.state.name,
                firstname: this.state.firstname,
                email: this.state.email,
                choix: this.state.choix,
                date: this.state.date,
            };
            console.log(user);
            // axios.post('http://localhost/lmk_project/insert.php', user)
            //     .then(res => console.log(res.data))
            //     .catch(error => {
            //         console.log(error.response)
            //     });

        }
        else {
            alert("champs vide");
        }

    }



    render() {
        return (
            <div className="Paiement">
                <Paypal />
                // <div className='login-box' >
                //     <h2>Paiement</h2><br />
                //     <form action="">
                //         <div className="user-box">
                //             <label>Nom</label>
                //             <input
                //                 id='inputname'
                //                 type="text"
                //                 pattern="[A-Za-z]{1, 50}"
                //                 required="required"
                //                 value={this.state.name}
                //                 onChange={this.onChangeName}
                //             />
                //         </div>
                //         <div className="user-box">
                //             <label>Prénom</label>
                //             <input
                //                 type="text"
                //                 pattern="[A-Za-z]{1, 50}"
                //                 required="required"
                //                 value={this.state.firstname}
                //                 onChange={this.onChangeFirstname}
                //             />
                //         </div>
                //         <div className="user-box">
                //             <label>E-mail</label><br />
                //             <input
                //                 type="email"
                //                 pattern="[A-Za-z0-9@.]{1, 50}"
                //                 required="required"
                //                 value={this.state.email}
                //                 onChange={this.onChangeEmail}
                //             />
                //         </div>
                //         <div className="user-box">
                //             <label>choix</label><br />
                //             <Form.Select
                //                 aria-label="Default select example"
                //                 value={this.state.choix}
                //                 onChange={this.onChangeChoix}
                //             >
                //                 <optgroup label="Cryptomonaie">
                //                     <option value="">Sélectionner votre produit</option>
                //                     <option value="EOS">EOS</option>
                //                     <option value="ETHEREUM">ETHEREUM</option>
                //                     <option value="cosmos">cosmos</option>
                //                     <option value="axie infinity">axie infinity</option>
                //                 </optgroup>
                //                 <optgroup label="Finance">
                //                     <option value="oracle">oracle</option>
                //                     <option value="novo nordisk">novo nordisk</option>
                //                     <option value="bank of america">bank of america</option>
                //                     <option value="vinci">vinci</option>
                //                 </optgroup>
                //             </Form.Select>


                //         </div>
                //         <div className="user-box">
                //             <label>Créneau pour contact</label><br />
                //             <input
                //                 type="datetime-local"
                //                 required="required"
                //                 value={this.state.date}
                //                 onChange={this.onChangeSelectAppointement}
                //             />
                //         </div><br />
                //         <button onClick={this.onSubmit}>
                //             <Link to="/stripePayment" />
                //             <h4>Valider</h4>
                //         </button>
                //     </form>
                // </div>
            </div >
        )
    }
}