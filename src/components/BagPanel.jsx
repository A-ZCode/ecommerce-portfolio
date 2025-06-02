import { FiShoppingBag, FiTrash2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function BagPanel() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-gray-200 z-30 flex flex-col border-0">
      {/* Bag Header - Centered and larger text */}
      <div className="p-4 flex-col items-center ">
        <h2 className="font-bold text-xl text-center">Bag ({totalItems})</h2>
        {items.length > 0 && (
          <button 
            onClick={() => dispatch(clearCart())}
            className="text-xs text-red-500 hover:text-red-700 mt-1"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Bag Items */}
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
        {items.length === 0 ? (
          <>
            <p className="text-center text-gray-500 py-8 col-span-full">Your bag is empty</p>
            {/* View Bag Button*/}
            <div className="col-span-full -mt-10 px-2"> 
              <button 
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium
                  ${items.length > 0 ? 'bg-black text-white' : 'bg-gray-900 text-gray-500 cursor-not-allowed'}`}
                disabled={items.length === 0} 
                onClick={() => navigate('/checkout')}
              >
                <FiShoppingBag />
                View Bag
              </button>
            </div>
          </>
        ) : (
          <>
            {items.map(item => (
              <div key={item.id} className="flex flex-col items-center p-2">
                <img 
                  src={item.image} 
                  className="w-16 h-16 object-contain rounded" 
                  alt={item.name}
                />
                <div className="text-xs mt-1 text-center">
                  <span className="font-medium">{item.quantity}x</span>
                </div>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-gray-400 hover:text-red-500 mt-1"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            ))}
            {/* View Bag Button */}
            <div className="col-span-full mt-2 px-4">
              <button 
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium bg-black text-white`}
                onClick={() => navigate('/checkout')}
              >
                <FiShoppingBag />
                View Bag
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}