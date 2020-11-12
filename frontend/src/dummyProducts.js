const dummyProducts = [
	{
		id: '1',
		name: 'Skylight Frame: 10 inch WiFi Digital Picture',
		image: '/images/skylight.jpg',
		description:
			'Skylight Frame: 10 inch WiFi Digital Picture Frame, Email Photos from Anywhere, Touch Screen Display 10 INCH DISPLAY: Gorgeous 10 inch color touch-screen display with 1280x800 resolution',
		brand: 'SKY',
		category: 'Electronics',
		price: 150.99,
		countInStock: 0,
		rating: 3.5,
		numReviews: 18
	},
	{
		id: '2',
		name: 'Bose QuietComfort 35 Wireless Headphones',
		image: '/images/headphones.jpg',
		description:
			'Three levels of world-class noise cancellation for better listening experience in any environment Hassle-free Bluetooth pairing, personalized settings, access to future updates, and more through the Bose connect app.Usb cable: 12 inch',
		brand: 'BOSE',
		category: 'Electronics',
		price: 199.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12
	},

	{
		id: '3',
		name: 'New Apple iMac with Retina 5K ',
		image: '/images/mac.jpg',
		description:
			'27-inch (diagonal) 5120-by-2880 Retina 5K display 3.1GHz 6-core 10th-generation Intel Core i5 AMD Radeon Pro 5300 graphics Ultrafast SSD storage',
		brand: 'MAC',
		category: 'Electronics',
		price: 1700.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12
	},
	{
		id: '4',
		name: 'Apple MacBook Pro 256GB Wi-Fi Laptop ',
		image: '/images/macbook.jpg',
		description:
			'Apple MacBook Pro 256GB Wi-Fi Laptop 13.3in with Intel Core i5 MF840LL/A - Silver (Renewed) Connectivity includes 802.11ac Wi-Fi, Bluetooth 4.0, two USB 3.0 ports, two "Thunderbolt 2" ports, an',
		brand: 'Apple',
		category: 'Electronics',
		price: 700.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	},
	{
		id: '5',
		name: 'MSI GL65 Leopard 10SFK-062 15.6" FHD ',
		image: '/images/msi.jpg',
		description:
			'MSI GL65 Leopard 10SFK-062 15.6" FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD Win 10',
		brand: 'MSI',
		category: 'Electronics',
		price: 900.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	},
	{
		id: '6',
		name: 'Canon EOS Mirrorless Lens Camera ',
		image: '/images/canon.jpg',
		description:
			'Canon EOS RP Full-frame Mirrorless Interchangeable Lens Camera + RF24-105mm lens F4-7.1 IS STM Lens Kit Compact and lightweight for Traveling and Vlogging, Black (3380C132)',
		brand: 'CANON',
		category: 'Electronics',
		price: 750.99,
		countInStock: 7,
		rating: 2.5,
		numReviews: 22
	},
	{
		id: '7',
		name: 'Airpods Wireless Bluetooth Headphones',
		image: '/images/airpods.jpg',
		description:
			'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
		brand: 'Apple',
		category: 'Electronics',
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12
	},
	{
		id: '8',
		name: 'iPhone 11 Pro 256GB Memory White',
		image: '/images/phone.jpg',
		description:
			'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
		brand: 'Apple',
		category: 'Electronics',
		price: 599.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	},
	{
		id: '9',
		name: 'Cannon EOS 80D DSLR Camera',
		image: '/images/camera.jpg',
		description:
			'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
		brand: 'Cannon',
		category: 'Electronics',
		price: 929.99,
		countInStock: 5,
		rating: 3.5,
		numReviews: 31
	},
	{
		id: '10',
		name: 'Sony Playstation 4 Pro White Version',
		image: '/images/playstation.jpg',
		description:
			'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
		brand: 'Sony',
		category: 'Electronics',
		price: 399.99,
		countInStock: 11,
		rating: 5,
		numReviews: 12
	},
	{
		id: '11',
		name: 'Logitech G-Series Gaming Mouse',
		image: '/images/mouse.jpg',
		description:
			'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
		brand: 'Logitech',
		category: 'Electronics',
		price: 49.99,
		countInStock: 7,
		rating: 3.5,
		numReviews: 10
	},
	{
		id: '12',
		name: 'Amazon Echo Dot 3rd Generation',
		image: '/images/alexa.jpg',
		description:
			'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
		brand: 'Amazon',
		category: 'Electronics',
		price: 29.99,
		countInStock: 0,
		rating: 4,
		numReviews: 12
	},
	{
		id: '13',
		name: 'Skylight Frame: 10 inch WiFi Digital Picture',
		image: '/images/skylight.jpg',
		description:
			'Skylight Frame: 10 inch WiFi Digital Picture Frame, Email Photos from Anywhere, Touch Screen Display 10 INCH DISPLAY: Gorgeous 10 inch color touch-screen display with 1280x800 resolution',
		brand: 'SKY',
		category: 'Electronics',
		price: 150.99,
		countInStock: 0,
		rating: 3.5,
		numReviews: 18
	},
	{
		id: '14',
		name: 'Bose QuietComfort 35 Wireless Headphones',
		image: '/images/headphones.jpg',
		description:
			'Three levels of world-class noise cancellation for better listening experience in any environment Hassle-free Bluetooth pairing, personalized settings, access to future updates, and more through the Bose connect app.Usb cable: 12 inch',
		brand: 'BOSE',
		category: 'Electronics',
		price: 199.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12
	},

	{
		id: '15',
		name: 'New Apple iMac with Retina 5K ',
		image: '/images/mac.jpg',
		description:
			'27-inch (diagonal) 5120-by-2880 Retina 5K display 3.1GHz 6-core 10th-generation Intel Core i5 AMD Radeon Pro 5300 graphics Ultrafast SSD storage',
		brand: 'MAC',
		category: 'Electronics',
		price: 1700.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12
	},
	{
		id: '16',
		name: 'Apple MacBook Pro 256GB Wi-Fi Laptop ',
		image: '/images/macbook.jpg',
		description:
			'Apple MacBook Pro 256GB Wi-Fi Laptop 13.3in with Intel Core i5 MF840LL/A - Silver (Renewed) Connectivity includes 802.11ac Wi-Fi, Bluetooth 4.0, two USB 3.0 ports, two "Thunderbolt 2" ports, an',
		brand: 'Apple',
		category: 'Electronics',
		price: 700.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	},
	{
		id: '17',
		name: 'MSI GL65 Leopard 10SFK-062 15.6" FHD ',
		image: '/images/msi.jpg',
		description:
			'MSI GL65 Leopard 10SFK-062 15.6" FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD Win 10',
		brand: 'MSI',
		category: 'Electronics',
		price: 900.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	},
	{
		id: '18',
		name: 'Canon EOS Mirrorless Lens Camera ',
		image: '/images/canon.jpg',
		description:
			'Canon EOS RP Full-frame Mirrorless Interchangeable Lens Camera + RF24-105mm lens F4-7.1 IS STM Lens Kit Compact and lightweight for Traveling and Vlogging, Black (3380C132)',
		brand: 'CANON',
		category: 'Electronics',
		price: 750.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	}
];

export default dummyProducts;
