import { useSelector } from 'react-redux';
import { FiCreditCard, FiEdit2, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { FaStar, FaGift } from 'react-icons/fa';
import { SiMastercard } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { items } = useSelector(state => state.cart);
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const gst = subtotal * 0.1;
  const orderTotal = subtotal + shipping + gst;

  const user = {
    name: "Johnn Maker",
    address: "123 Plae Grond Street\nVermont, California\nUnited States of America"
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT COLUMN - Forms */}
        <div className="lg:w-2/3 space-y-6">
          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg uppercase">Shipping Address</h2>
              <button className="text-blue-600 flex items-center">
                <FiEdit2 className="mr-1" /> Change
              </button>
            </div>
            <div className="whitespace-pre-line">
              <p className="font-medium">{user.name}</p>
              <p className="text-gray-600">{user.address}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg uppercase">Payment Method</h2>
              <button className="text-blue-600 flex items-center">
                <FiEdit2 className="mr-1" /> Change
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <SiMastercard className="text-2xl mr-3 text-[#006FCF]" />
                <span>Mastercard ending in 1252</span>
              </div>
              <div className="flex items-center text-green-600">
                <FaGift className="mr-3" />
                <span>$53.21 gift card balance</span>
              </div>
              <div className="flex items-center text-green-600 mt-2">
                <FiCheckCircle className="mr-2" />
                <span>Billing address same as Shipping Address</span>
              </div>
            </div>
          </div>

          {/* Review Bag */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-bold text-lg uppercase mb-4">Review Your Bag</h2>
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      className="w-20 h-20 object-contain border rounded-lg" 
                      alt={item.name}
                    />
                    <div className="flex-1">
                      <p className="font-bold text-black">{item.name.split('-')[0]}</p>
                      <p className="text-gray-500 text-sm">{item.name.split('-')[1]}</p>
                      <p className="text-gray-400 text-xs mt-1">Premium product with 2-year warranty</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-green-500 text-xs" />
                        ))}
                      </div>
                    </div>
                    <p className="font-medium">${item.price} × {item.quantity}</p>
                  </div>
                  <div className="border-t border-gray-200 my-3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Order Summary + Back Button */}
        <div className="lg:w-1/3 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated GST:</span>
                <span>${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Gift Card:</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="border-t border-gray-300 my-3"></div>

            <div className="flex justify-between font-bold text-red-600 mb-4">
              <span>Order Total:</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>

            <div className="border-t border-gray-300 my-3"></div>

            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Place Your Order
            </button>
          </div>

          {/* Back to Shop Button*/}
          <button 
            onClick={() => navigate('/')}
            className="w-[150px] flex items-center justify-center p-3 text-blue-600 hover:text-white hover:bg-blue-500 rounded-lg transition-all border border-blue-200"
          >
            <FiArrowLeft className="mr-2" /> Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}