import ProductCard from '../components/ProductCard';

 const mockProducts = [
  { id: 1, name: 'Apple Watch - Series 5 SE', price: '529.99', image: '/products/apple watch.jpg' },
  { id: 2, name: 'Sony ZX330BT - Light Grey', price: '39.99', image: '/products/sony zx330bt.jpg' },
  { id: 3, name: 'Iphone 11 - Serious Black', price: '619.99', image: '/products/iphone 11.webp' },
  { id: 4, name: 'Iphone 11 - Subway Blue', price: '619.99', image: '/products/iphone-11-blue.jpg' },
  { id: 5, name: 'Iphone 11 - Product RED', price: '619.99', image: '/products/iphone 11 red.webp' },
  { id: 6, name: 'Iphone 11 - Milky White', price: '619.99', image: '/products/iphone 11 white.jpg' },
  { id: 7, name: 'Iphone 13 - Product RED', price: '619.99', image: '/products/iphone 13 red.webp' },
  { id: 8, name: 'Iphone 14 - Product RED', price: '699.99', image: '/products/iphone 14 red.webp' },
];


export default function Home() {
  return (
    <div className="pl-6 bg-gray-200 w-[1300px]"> {/* Increased left padding */}
      <div className="grid grid-cols-4 gap-8 p-6">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}