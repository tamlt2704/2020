import React, {Component} from 'react';
import logo from './logo.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSortUp} from '@fortawesome/free-solid-svg-icons'
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Seed from './seed.js';

library.add(fab, faCheckSquare, faCoffee, faSortUp)

class Product extends Component {
    render() {
        return (
            <div className='container product-box'>
                <div className='row'>
                    <div className='col-1 product-img'>
                        <img src={this.props.productImageUrl} alt=""/>
                    </div>

                    <div className='col-9 text-left'>
                        <div className='card-block'>
                            <h4 className='card-title'>
                                {this.props.title} 
                            </h4>
                            <FontAwesomeIcon icon='sort-up' className='fa-2x'/>
                            votes: {this.props.votes}
                            <p className='card-text'>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

class ProductList extends Component {
    render() {
        const products = Seed.products.sort((a, b) => b.votes - a.votes);
        const productComponents = Seed.products.map((product) => (
            <Product
                key = {'product-' + product.id}
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = '#'
                votes = {product.votes}
                submitterAvatarUrl = {product.submitterAvatarUrl}
                productImageUrl = {product.productImageUrl}
            />
        ));
        return (
            <div>
                {productComponents}
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
        <ProductList /> 
    </div>
  );
}

export default App;
