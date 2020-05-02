import {v4 as uuidv4} from 'uuid';
import {commerce, image, lorem} from 'faker';

function generateProductList(size) {
    var size = size || 10;
    return [...Array(size).keys()].map(i => ({
        id: uuidv4(),
        title: commerce.productName(),
        description: lorem.sentences().split('\.').slice(0, 2),
        url: '#',
        votes: Math.floor(Math.random() * 100),
        submitterAvatarUrl: `images/product-${i}.jpg`,
        productImageUrl: `images/product-${i}.jpg`
    }));
}

const products = generateProductList();

const Seed = {
    products: products,
}

export default Seed;
