import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";

import { Link } from "react-router-dom";
import "./Inbox.css";
let user =""
const data = { "receiver": user };


class Sent extends Component {
    state = {
        Messages: [],
        title: "",
        receiver: "",
        id:"",
      
    };
    componentDidMount() {
        user = this.props.user
        this.getLatest();

        console.log(user)
    }
    getLatest = () => {
        console.log()
        API.mailSender({'sender': this.props.user})
            .then(res =>
                    console.log(res)
               // this.setState({ Messages: res.data, id:"", title: "", receiver: ""})
            )
            .catch(err => console.log(err));
    };
    deleteMessage = id => {
        console.log("made it", )
        API.senderDelete({"id":id, "sender":data.sender})
      .then(res => this.getLatest())
      .catch(err => console.log(err));
    };
    render() {
        return (
            <Container fluid>
                    {this.state.Messages.length ? (
                        <table className="messageDump uk-table uk-table-striped" id="clickIt">
                        <tbody>
                        {this.state.Messages.map(message => (
                            
                            <tr key={message.id} className="clickThis">
                                <td className="sender">{message.receiver} </td>
                                    <td className="message" value = {message.id} ><Link to={{ pathname: "/Mail/Message", state: {passed: (this, message.id), user:(this.props.user)}}}>
                                        {message.title}</Link></td>
                                    <td className="delete"><center><button className="uk-button uk-button-danger" onClick={this.deleteMessage.bind(this, message.id)}>X</button></center></td>
                            </tr>
                            
                            ))
                        }
                    </tbody>
                    </table>
                    ) : (
                            <h3 class="color-white">You haven't sent any messages... </h3>
                        )}
            </Container>
        )
    }
}

export default Sent;