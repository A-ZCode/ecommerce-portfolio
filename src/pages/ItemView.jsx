import { useSelector, useDispatch } from 'react-redux';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity, clearCart } from '../features/cart/cartSlice';

export default function ItemView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector(state => state.cart);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-6 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Cart ({items.length})</h1>
        
        {items.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate('/')}
              className="bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 border-b border-gray-200 py-4">
                    <img
                      src={item.image}
                      className="w-20 h-20 object-contain rounded-lg"
                      alt={item.name}
                    />
                    <div className="flex-1">
                      <p className="font-bold text-black">{item.name.split(' - ')[0]}</p>
                      {item.name.split(' - ')[1] && (
                        <p className="text-gray-500 text-sm">{item.name.split(' - ')[1]}</p>
                      )}
                      <p className="font-medium text-gray-900 mt-1">
                        ${parseFloat(item.price).toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <FiMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <FiPlus />
                      </button>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-gray-400 hover:text-red-500 ml-4"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => dispatch(clearCart())}
                className="text-red-500 hover:text-red-700 text-sm mt-4"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-4 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}