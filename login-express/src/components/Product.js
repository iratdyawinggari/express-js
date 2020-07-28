import React from 'react';
import { getProduct } from '../api/user';

class Product extends React.Component {
    state = { product: [] }

    getDataJson = async () => {
        const response = await getProduct();
        const data = await response.json()
        this.setState({ product: data })
        console.log(this.state.product)
    }

    componentDidMount() {
        this.getDataJson()
    }

    closeProduct = () => {
        this.props.history.push({ pathname: "/MainContent" })
    }

    render(){
        let listProduct = this.state.product.map((p) => {
            const { productId, productName } = p
            return (
                <tr>
                    <td>{productId}</td>
                    <td>{productName}</td>
                </tr>
            )
        })

        return(
            <div className="container">
                <h2>Daftar Product</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProduct}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={this.closeProduct}>Back</button>
            </div>
        )
    }

}

export default Product