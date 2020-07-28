import React from 'react';

class Order extends React.Component {
    constructor(props) {
        super(props)
    }

    closeOrder = () => {
        this.props.history.push({ pathname: "/MainContent" })
    }

    render() {
        return (
            <div >
                <div className="container">
                    <h1>Order</h1>
                    1. Commerce: A confirmed request by one party to another to buy, sell, deliver, or receive goods or services under specified terms and conditions. When accepted by the receiving party, an order becomes a legally binding contract. See also purchase order.
                    <br />2. Banking: An instrument (such as a check or draft) through which its maker or issuer (drawer) authorizes a bank or other financial institution to pay the stated sum to a named holder (drawee or payee). Such instruments are transferable by endorsement, and thus are negotiable instruments.
                    <br />3. Law: An authoritative mandate, command, or direction issued by a court under its seal.
                    <br /><br />
                    <button type="submit" className="btn btn-primary" onClick={this.closeOrder}>Back</button>
                </div>
            </div>
        );
    }
}

export default Order;