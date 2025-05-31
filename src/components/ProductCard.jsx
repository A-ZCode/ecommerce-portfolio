import { FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  
  // Split name at first occurrence of " - "
  const [firstLine, secondLine] = product.name.split(/ - (.*)/s);

  const handleAddToBag = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
  };

  return (
    <div className="group bg-transparent rounded-lg overflow-hidden w-64 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      {/* Top Section - Product Image */}
      <div className="bg-white rounded-lg p-4 flex justify-center transition-transform duration-300 group-hover:scale-[1.02]">
        <img 
          src={product.image} 
          className="h-48 object-contain transition-transform duration-500 group-hover:scale-105" 
          alt={product.name}
        />
      </div>

      {/* Bottom Section - Product Info */}
      <div className="bg-gray-200 p-4 rounded-b-lg transition-all duration-300 group-hover:bg-gray-300 min-h-[140px]">
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 group-hover:text-black truncate">
              {firstLine}
            </h3>
            {secondLine && (
              <p className="text-sm text-gray-600 group-hover:text-gray-800 truncate">
                {secondLine}
              </p>
            )}
            <p className="font-bold text-gray-900 mt-1 group-hover:text-black">
              ${product.price}
            </p>
          </div>
          
          <button 
            onClick={handleAddToBag}
            className="text-gray-700 hover:text-indigo-600 transition-colors ml-4 group-hover:scale-125 flex-shrink-0"
            aria-label="Add to bag"
          >
            <FiShoppingBag className="text-xl transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}