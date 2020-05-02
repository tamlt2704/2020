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
    constructor(props) {
        super(props);

        this.handleUpVote = this.handleUpVote.bind(this);
    }
    
    handleUpVote() {
        console.log(this.props.id);
        this.props.onVote(this.props.id);
    }

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
                            <a onClick={this.handleUpVote}>
                                <FontAwesomeIcon icon='sort-up' className='fa-2x'/>
                            </a>
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
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        this.handleUpVote = this.handleUpVote.bind(this);
    }

    handleUpVote(productId) {
        this.setState({
                products: this.state.products.map((product) => {
                    if (product.id === productId) {
                        return Object.assign({}, product, {
                                    votes: product.votes + 1
                                });
                    } else {
                        return product;
                    }
                }),
        });
    }

    componentDidMount() {
        this.setState({products: Seed.products});
    }

    render() {
        const products = this.state.products.sort((a, b) => b.votes - a.votes);
        const productComponents = products.map((product) => (
            <Product
                key = {'product-' + product.id}
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = '#'
                votes = {product.votes}
                submitterAvatarUrl = {product.submitterAvatarUrl}
                productImageUrl = {product.productImageUrl}
                onVote = {this.handleUpVote}
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
