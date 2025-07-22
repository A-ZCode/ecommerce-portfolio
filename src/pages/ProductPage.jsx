import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import Sidebar from '../components/Sidebar';
import BagPanel from '../components/BagPanel'; // Replace Sidebag
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const mockProducts = [
  { id: 1, name: 'Apple Watch - Series 5 SE', price: 529.99, image: '/products/apple watch.jpg', description: 'Premium smartwatch', detailedDescription: 'Advanced fitness tracking', longDescription: 'The Apple Watch Series 5 SE offers advanced features...' },
  { id: 2, name: 'Sony ZX330BT - Light Grey', price: 39.99, image: '/products/iphone 11.webp', description: 'Wireless headphones', detailedDescription: 'Comfortable design', longDescription: 'High-quality sound...' },
  { id: 3, name: 'Iphone 11 - Serious Black', price: 619.99, image: '/products/iphone 11.webp', description: 'Powerful smartphone', detailedDescription: 'Dual camera system', longDescription: 'The iPhone 11 features...' },
  // ... other products from Home.jsx, with added description fields
];

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = mockProducts.find(item => item.id === parseInt(id));

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem({ id: product.id, name: product.name, price: product.price, image: product.image }));
    }
  };

  if (!product) {
    return <div className="p-4">Product not found!</div>;
  }

  return (
    <div className="detail-page">
      <Sidebar className="sidebar" />
      <div className="product-page-section">
        <div className="product-img">
          <span className="back-text">
            <FaArrowLeft className="back-icon" />
            <button onClick={() => navigate('/')} className="text-black">Back</button>
          </span>
          <div className="side-images">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h1 className="product-h1">{product.name}</h1>
            <h3 className="product-h3">{product.description}</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <h4 className="product-price">${product.price.toFixed(2)}</h4>
            <p className="product-p">{product.detailedDescription}</p>
          </div>
        </div>
        <button className="add-to-bag" onClick={handleAddToCart}>
          <i className="fa-solid fa-bag-shopping-plus"></i> Add to bag
        </button>
        <hr />
        <h2>Description</h2>
        <p>{product.longDescription}</p>
      </div>
      <BagPanel className="sidebag" />
    </div>
  );
}