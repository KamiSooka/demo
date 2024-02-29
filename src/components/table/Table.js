import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"

const Item = () => {

        const products = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ];

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((e, i) =>
                     (
                        <tr key = {i} >
                            <td>
                                {e.name}
                            </td>
                            <td>
                                {e.price}
                            </td>
                        </tr>
                    )
                )}
            </tbody>
            </Table>
    )
}

export default Item;