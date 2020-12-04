const dummyProducts = [
	{
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
		name: 'Sony WH-1000XM3 Bluetooth Noise Cancelling',
		image: '/images/sony.jpg',
		description:
			'Sony WH-1000XM3 Bluetooth Noise Cancelling Koptelefoon, (30 Uur Batterijduur, 1.5 M USB Kabel, Touch Sensor, Headphones Connect App, Snellaadfunctie, Compatibel met Amazon Alexa), Zwart',
		brand: 'SONY',
		category: 'Electronics',
		price: 198.99,
		countInStock: 30,
		rating: 4.5,
		numReviews: 12
	},

	{
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
		name: 'Apple iMac 22-inch Core i5 3.1GHz',
		image: '/images/iMac.jpg',
		description:
			'27-inch (diagonal) 5120-by-2880 Retina 5K display 3.1GHz 6-core 10th-generation Intel Core i5 AMD Radeon Pro 5300 graphics Ultrafast SSD storage',
		brand: 'MAC',
		category: 'Electronics',
		price: 1999.99,
		countInStock: 3,
		rating: 4.5,
		numReviews: 20
	},
	{
		name: 'Canon EOS M50 Systeemcamera Kit, 24,1 MP',
		image: '/images/camera-1.jpg',
		description:
			'Canon EOS M50 Systeemcamera Kit, 24,1 MP, Roterend en Draaibaar 7,5 cm Touchscreen LC-display, Digic 8, 4K Video, OLED EVF, WLAN, Bluetooth, met Lens EF-M 15-45 mm IS STM, Zwart',
		brand: 'Cannon',
		category: 'Electronics',
		price: 540.99,
		countInStock: 5,
		rating: 4.5,
		numReviews: 31
	},
	{
		name: 'Sony Playstation 5 Pro White Version',
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
		name: 'Apply Gaming Mouse smooth playing experience',
		image: '/images/mouse.jpg',
		description:
			'Get a better handle on your games with this Apply LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
		brand: 'Apply',
		category: 'Electronics',
		price: 49.99,
		countInStock: 7,
		rating: 3.5,
		numReviews: 10
	},
	{
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
		name: 'Nieuw Apple iPad Pro 12,9‑inch',
		image: '/images/ipad.jpg',
		description:
			'Nieuw Apple iPad Pro (12,9‑inch, Wi-Fi, 256 GB) - Zilver (4e generatie)12,9‑inch Liquid Retina-display (rand tot rand) met ProMotion, True Tone en brede kleurweergave (P3) ',
		brand: 'APPLE',
		category: 'Electronics',
		price: 999.99,
		countInStock: 0,
		rating: 4.5,
		numReviews: 40
	},
	{
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
		name: 'New Apple iMac with Retina 5K 27-inch ',
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
		name: 'Acer Predator Helios 300 Gaming Laptop ',
		image: '/images/acer.jpg',
		description:
			'Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6" Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, WiFi 6, RGB US QWERTY Keyboard',
		brand: 'Acer',
		category: 'Electronics',
		price: 1449.99,
		countInStock: 5,
		rating: 5.0,
		numReviews: 30
	},
	{
		name: 'Canon EOS Mirrorless Lens Camera RP Full-frame ',
		image: '/images/canon.jpg',
		description:
			'Canon EOS RP Full-frame Mirrorless Interchangeable Lens Camera + RF24-105mm lens F4-7.1 IS STM Lens Kit Compact and lightweight for Traveling and Vlogging, Black (3380C132)',
		brand: 'CANON',
		category: 'Electronics',
		price: 750.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8
	},
	{
		name: 'ASUS ROG Strix G15 G512LW-HN069',
		image: '/images/asus.jpg',
		description:
			'ASUS ROG Strix G15 G512LW-HN069 - 39,6 cm (15,6 inch) Full HD 144Hz (Intel Core i7-10750H, 16GB RAM, 1TB SSD, GeForce RTX2070-8GB, geen besturingssysteem) zwart origineel',
		brand: 'ASUS',
		category: 'Electronics',
		price: 1949.99,
		countInStock: 3,
		rating: 4.0,
		numReviews: 20
	}
];

module.exports = dummyProducts;
