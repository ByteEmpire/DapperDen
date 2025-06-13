// src/pages/CategoryProducts.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from '../components/AddToCartButton';


const CategoryProducts = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    size: [],
    priceRange: [0, 10000], // [min, max]
    rating: 0,
  });
  const [sortOption, setSortOption] = useState("price-low-to-high");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Function to fetch products based on category
    const getProductsForCategory = () => {
      if (!categoryName) {
        return [];
      }
      // Add a safeguard for each category to return data accordingly
      switch (categoryName.toLowerCase()) {
        case "ethnic wear":
          return [
            {
              id: '1',
              name: "Kanjeevaram Saree ",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/j/e/l/free-ls-redbutta-maroon-benaifer-fashion-unstitched-original-imagjpp4fkbxn9rg.jpeg?q=70",
              description: "Luxurious silk saree with rich gold zari from Tamil Nadu.",
              price: "₹5200",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.5 ⭐",
              discount: "15%",
            },
            { 
              id: '2',
              name: "Banarasi Saree",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/a/l/y/-original-imagvhcsggewzzr8.jpeg?q=70",
              description: "Elegant silk saree with intricate Mughal-inspired brocade.",
              price: "₹8500",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "10%",
            },
            {
              id: '3',
              name: "Angrakha",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/6/d/5/xxl-zallar-work-wine-hindva-fashion-original-imahywr672qyctfg.jpeg?q=70",
              description: "Overlapping tunic with traditional ties, popular in North India.",
              price: "₹2700",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.3 ⭐",
              discount: "15%",
            },
            {
              id: '4',
              name: "Pattu Pavadai",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-lehenga-choli/s/x/1/4-5-years-green-yellow-south-indian-pavadai-pattu-wommaniya-original-imahybw9usgjgjcf.jpeg?q=70",
              description: "Traditional South Indian silk skirt and blouse set.",
              price: "₹900",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "2.8 ⭐",
              discount: "5%",
            },
            {
              id: '5',
              name: "Paithani Silk Saree",
              image: "https://www.karagiri.com/cdn/shop/files/KORRA-TISSUE-370003-1.jpg?v=1709013190",
              description: "Paithani Silk Saree features vibrant colors and intricate gold zari work.",
              price: "₹6500",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.5 ⭐",
              discount: "25%",
            },
            {
              id: '6',
              name: "Pashmina Saree",
              image: "https://www.karagiri.com/cdn/shop/products/pashmina-saree-persian-blue-pashmina-saree-silk-saree-online-31759132393665.jpg?v=1648586383",
              description: "Soft, warm saree made from fine pashmina wool.",
              price: "₹9000",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "30%",
            },
            {
              id: '7',
              name: "Anarkali Suit",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/v/x/l-kd3-devi-mustard-youthnic-original-imah5mr2sbgzaa6m.jpeg?q=70",
              description: "Flowing, floor-length dress with intricate embroidery, ideal for festive occasions.",
              price: "₹1400",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "3.0 ⭐",
              discount: "10%",
            },
            {
              id: '8',
              name: "Ghagra Choli",
              image: "https://rukminim2.flixcart.com/image/612/612/kflftzk0/lehenga-choli/v/b/m/free-3-4-sleeve-rivaaz-purvaja-original-imafwyyynkfyfhn2.jpeg?q=70",
              description: "Traditional skirt and blouse combo with ethnic prints and embellishments.",
              price: "₹2700",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.6 ⭐",
              discount: "18%",
            },
            {
              id: '9',
              name: "Nehru Jacket",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/o/p/t/44-no-mjowc-4072maroon-jompers-original-imagr5x2d2ktgeet.jpeg?q=70",
              description: "Traditional silhouettes meet contemporary trends in ethnic fashion.",
              price: "₹1700",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "3.2 ⭐",
              discount: "8%",
            },
            {
              id: '10',
              name: "Palazzo Suit ",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/u/e/8/s-new-arkv-tex-original-imahfvampggfbmxg.jpeg?q=70",
              description: "Wide-legged pants paired with a tunic, blending comfort and modern style.",
              price: "₹1200",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.7 ⭐",
              discount: "5%",
            },
            {
              id: '11',
              name: "Kurta Patiala Set",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/9/s/m-navy-jaq-booty-kurta-maroon-loop-saldh-sydney-heights-original-imah5gztxfcgjzna.jpeg?q=70",
              description: "Celebratory wear that adds charm and grace to festive moments.",
              price: "₹2500",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "3.5 ⭐",
              discount: "18%",
            },
            {
              id: '12',
              name: "Salwar Kameez",
              image: "https://rukminim2.flixcart.com/image/612/612/kqse07k0/ethnic-set/w/s/6/44-maroon-s-slit-k-gan-r-patch-gold-sal-larwa-original-imag4pvx2s3qghwd.jpeg?q=70",
              description: "Classic and versatile ethnic outfit combining comfort with elegance.",
              price: "₹1500",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "10%",
            },
            {
              id: '13',
              name: "Tilla Saree",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/y/q/1/free-win-naitri-green-sita-unstitched-original-imagppu5fbby3ydz.jpeg?q=70",
              description: " Saree embroidered with metallic threads for opulence.",
              price: "₹1700",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "3.8 ⭐",
              discount: "12%",
            },
            {
              id: '14',
              name: "Batik Print Saree",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/0/6/5/free-37995-mirchi-fashion-unstitched-original-imah5z5shp7gzd44.jpeg?q=70",
              description: "Saree featuring wax-resist dyed patterns.",
              price: "₹2500",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.5 ⭐",
              discount: "15%",
            },
            {
              id: '15',
              name: "Pochampally Saree",
              image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/s/e/v/free-aphalsp116c-anr-anouk-rustic-unstitched-original-imahafb2ztnh6rfz.jpeg?q=70",
              description: "Ikat silk saree with vibrant geometric designs.",
              price: "₹3200",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "5%",
            },

          ];
        case "sports wear":
          return [
            {
              id: '16',
              name: "Men’s Dry-Fit Running T-shirt",
              image: "https://images.pexels.com/photos/16701780/pexels-photo-16701780/free-photo-of-model-in-tshirt.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Lightweight, breathable, moisture-wicking.",
              price: "₹600",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "10%",
            },
            {
              id: '17',
              name: "Women's Compression Leggings",
              image: "https://images.pexels.com/photos/4775202/pexels-photo-4775202.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Great for running, gym, or yoga.",
              price: "₹1050",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.9 ⭐",
              discount: "15%",
            },
            {
              id: '18',
              name: "Women's Track Jacket",
              image: "https://images.pexels.com/photos/8455333/pexels-photo-8455333.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Warm-up jacket with zipper.",
              price: "₹2200",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "3.8 ⭐",
              discount: "10%",
            },
            {
              id: '19',
              name: "Men’s Sports Shorts",
              image: "https://images.pexels.com/photos/6078307/pexels-photo-6078307.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Comfortable and functional.",
              price: "₹950",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "10%",
            },
            {
              id: '20',
              name: "Women’s Track Pants",
              image: "https://images.pexels.com/photos/11916009/pexels-photo-11916009.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Trendy and comfortable.",
              price: "₹1600",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.5 ⭐",
              discount: "15%",
            },
            {
              id: '21',
              name: "Women’s Crop Top with Dry-Fit Fabric",
              image: "https://images.pexels.com/photos/6582892/pexels-photo-6582892.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: " Sleek look for gym sessions.",
              price: "₹899",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "5%",
            },
            {
              id: '22',
              name: "Men’s Muscle Fit Longline Tee",
              image: "https://images.pexels.com/photos/31618281/pexels-photo-31618281/free-photo-of-strong-man-lifting-dumbbell-in-a-modern-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Elongated design with side slits.",
              price: "₹950",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "10%",
            },
            {
              id: '23',
              name: "Women’s Sports Bra with Mesh Back",
              image: "https://images.pexels.com/photos/6283596/pexels-photo-6283596.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Stylish and supportive.",
              price: "₹1700",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.5 ⭐",
              discount: "10%",
            },
            {
              id: '24',
              name: "Men’s Training Joggers",
              image: "https://images.pexels.com/photos/16495738/pexels-photo-16495738/free-photo-of-muscular-shirtless-brunette.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Stylish with ankle cuff and breathable fabric.",
              price: "₹1299",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "15%",
            },
            {
              id: '25',
              name: "Men’s Swim Briefs",
              image: "https://images.pexels.com/photos/6012007/pexels-photo-6012007.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Minimal drag, athletic design.",
              price: "₹900",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.2 ⭐",
              discount: "5%",
            },
            {
              id: '26',
              name: "Men’s Sleeveless Swim Vest",
              image: "https://images.pexels.com/photos/1415811/pexels-photo-1415811.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Good for surfing or paddleboarding.",
              price: "₹1800",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "10%",
            },
            {
              id: '27',
              name: "Men’s Waterproof Softshell Jacket",
              image: "https://images.pexels.com/photos/3022026/pexels-photo-3022026.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Windproof, breathable outer layer.",
              price: "₹2999",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "18%",
            },
            {
              id: '28',
              name: "Men’s Grip Gloves",
              image: "https://images.pexels.com/photos/7697774/pexels-photo-7697774.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "For board control & hand safety.",
              price: "₹500",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "10%",
            },
            {
              id: '29',
              name: "Women’s Lace-Up Canvas Skate Shoes",
              image: "https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Retro look, board feel.",
              price: "₹950",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "10%",
            },
            {
              id: '30',
              name: "Lightweight Aero Cycling Helmet",
              image: "https://images.pexels.com/photos/5808019/pexels-photo-5808019.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Streamlined design for speed.",
              price: "₹1099",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.8 ⭐",
              discount: "10%",
            },
            {
              id: '31',
              name: "Men’s Ice Hockey Jersey",
              image: "https://images.pexels.com/photos/8974630/pexels-photo-8974630.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Moisture-wicking fabric, breathable.",
              price: "₹4950",
              size: ["XS", "S", "M", "L", "XL"],
              reviews: "4.0 ⭐",
              discount: "10%",
            }
          ];
          case "kids wear":
            return [
              {
                id: '32',
                name: "Floral Cotton Frock ",
                image: "https://images.pexels.com/photos/7055916/pexels-photo-7055916.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Light summer dress with floral prints.",
                price: "₹1000",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.2 ⭐",
                discount: "20%",
              },
              {
                id: '33',
                name: "Ruffled Party Dress",
                image: "https://media.istockphoto.com/id/509091982/photo/smiling-little-girl-standing-on-the-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=zFgC7CyNyJUdwjfTeacS1wpC6Xt1FJ2rG3L7X_l3eiI=",
                description: "Satin dress with layers and glitter.",
                price: "₹850",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.0 ⭐",
                discount: "10%",
              },
              {
                id: '34',
                name: "Princess Tulle Gown",
                image: "https://cdn.pixabay.com/photo/2017/06/15/03/47/lady-honor-2404018_1280.jpg",
                description: "Long gown with net layers and bow tie.",
                price: "₹1500",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.6 ⭐",
                discount: "15%",
              },
              {
                id: '35',
                name: "Ethnic Kurti with Leggings",
                image: "https://images.unsplash.com/photo-1618143708983-a38cc62d72d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEV0aG5pYyUyMEt1cnRpJTIwd2l0aCUyMExlZ2dpbmdzJTIwJUUyJTgwJTkzJTIwVHJhZGl0aW9uYWwlMjB5ZXQlMjBjb21meS5raWRzfGVufDB8fDB8fHww",
                description: "Traditional yet comfy.",
                price: "₹750",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "3.8 ⭐",
                discount: "5%",
              },
              {
                id: '36',
                name: "Printed Hoodie with Joggers",
                image: "https://images.pexels.com/photos/15290406/pexels-photo-15290406/free-photo-of-a-boy-wearing-an-animated-hoodie-sweater.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Winter stylish look.",
                price: "₹1350",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.2 ⭐",
                discount: "10%",
              },
              {
                id: '37',
                name: "Peplum Top with Skirt",
                image: "https://images.pexels.com/photos/19109054/pexels-photo-19109054/free-photo-of-girl-with-black-hair-standing-in-skirt.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Fashion-forward and bright colored.",
                price: "₹1220",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.8 ⭐",
                discount: "10%",
              },
              {
                id: '38',
                name: "Graphic Tee with Ripped Jeans ",
                image: "https://images.pexels.com/photos/6179668/pexels-photo-6179668.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Cool look for older kids.",
                price: "₹1750",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "3.5 ⭐",
                discount: "15%",
              },
              {
                id: '39',
                name: "Blazer",
                image: "https://images.pexels.com/photos/9656750/pexels-photo-9656750.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Outfit for special occasions.",
                price: "₹2950",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.6 ⭐",
                discount: "20%",
              },
              {
                id: '40',
                name: "Sleeveless Tank with Cotton Shorts",
                image: "https://images.pexels.com/photos/14761172/pexels-photo-14761172.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Best for playtime.",
                price: "₹1899",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "3.0 ⭐",
                discount: "10%",
              },
              {
                id: '41',
                name: "Maxi Dress with Belt ",
                image: "https://images.pexels.com/photos/9545054/pexels-photo-9545054.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Elegant long dress.",
                price: "₹1100",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "2.9 ⭐",
                discount: "5%",
              },
              {
                id: '42',
                name: "Denim Jacket",
                image: "https://images.pexels.com/photos/5905519/pexels-photo-5905519.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Trendy and comfortable.",
                price: "₹1600",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.4 ⭐",
                discount: "15%",
              },
              {
                id: '43',
                name: "Ethnic Kurta Pajama Set",
                image: "https://images.pexels.com/photos/17015459/pexels-photo-17015459/free-photo-of-a-young-boy-in-a-traditional-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Festive wear with printed detail.",
                price: "₹2300",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.8 ⭐",
                discount: "18%",
              },
              {
                id: '44',
                name: "Sleeveless A-line Dress",
                image: "https://images.pexels.com/photos/8190282/pexels-photo-8190282.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Perfect for outings.",
                price: "₹1500",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "3.6 ⭐",
                discount: "5%",
              },
              {
                id: '45',
                name: "Tutu Skirt with Top",
                image: "https://images.pexels.com/photos/7675938/pexels-photo-7675938.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Ballet-inspired fashion.",
                price: "₹950",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.0 ⭐",
                discount: "10%",
              },
              {
                id: '46',
                name: "Jumpsuit",
                image: "https://images.pexels.com/photos/5561170/pexels-photo-5561170.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "All-in-one outfit with bright colors.",
                price: "₹1400",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.5 ⭐",
                discount: "12%",
              },
              {
                id: '47',
                name: "T-shirt Dress",
                image: "https://images.pexels.com/photos/9740366/pexels-photo-9740366.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Casual and playful.",
                price: "₹800",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "3.4 ⭐",
                discount: "5%",
              },
              {
                id: '48',
                name: "Chaniya Choli",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/b/f/h/xs-short-sleeve-jab24lc00586-janasya-original-imah6esefnygbxrv.jpeg?q=70",
                description: "Gujarati traditional skirt and blouse with mirror work and embroidery.",
                price: "₹1850",
                size: ["XS", "S", "M", "L", "XL"],
                reviews: "4.2 ⭐",
                discount: "10%",
              }
            ];
            
            default:
              return Array.from({ length: 16 }, (_, index) => ({
                id: `${index + 1}`, // ID based on index
                name: `${categoryName} Product ${index + 1}`,
                image: `https://cdn.pixabay.com/photo/2014/08/26/21/49/shirts-428618_1280.jpg`,
                description: `${categoryName} description for product ${index + 1}`,
                price: `₹${(index + 1) * 500}`,
                size: ["XS", "S", "M", "L", "XL"],
                reviews: `${Math.floor(Math.random() * 5) + 1} ⭐`, // Random reviews out of 5
                discount: `${Math.floor(Math.random() * 30) + 5}%`, // Random discount between 5% and 35%
              }));
          }
        };
    
        const all = getProductsForCategory();
        setProducts(all);
        setFilteredProducts(all);
      }, [categoryName]);
    
      useEffect(() => {
        const filtered = products.filter((p) => {
          const [min, max] = filters.priceRange;
          const price = parseInt(p.price.replace(/[^\d]/g, ''), 10);
          const rating = parseFloat(p.reviews);
          return (
            (filters.size.length === 0 || filters.size.some((s) => p.size.includes(s))) &&
            price >= min && price <= max &&
            rating >= filters.rating
          );
        });
    
        const sorted = [...filtered];
        if (sortOption === "price-low-to-high") {
          sorted.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, ''), 10) - parseInt(b.price.replace(/[^\d]/g, ''), 10));
        }
        if (sortOption === "price-high-to-low") {
          sorted.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, ''), 10) - parseInt(a.price.replace(/[^\d]/g, ''), 10));
        }
        if (sortOption === "rating") {
          sorted.sort((a, b) => parseFloat(b.reviews) - parseFloat(a.reviews));
        }
    
        setFilteredProducts(sorted);
      }, [products, filters, sortOption]);
    
      const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prev) => {
          if (type === "checkbox") {
            const arr = prev[name];
            return {
              ...prev,
              [name]: checked ? [...arr, value] : arr.filter((x) => x !== value),
            };
          }
          return { ...prev, [name]: Number(value) };
        });
      };
    
      const handleMinPriceChange = (e) => {
        const min = Number(e.target.value);
        setFilters((prev) => ({
          ...prev,
          priceRange: [min, prev.priceRange[1]],
        }));
      };
    
      const handleMaxPriceChange = (e) => {
        const max = Number(e.target.value);
        setFilters((prev) => ({
          ...prev,
          priceRange: [prev.priceRange[0], max],
        }));
      };
    
      const handleAddToCart = (p) => {
        setCart((c) => [...c, p]);
        alert(`${p.name} added to cart`);
      };
    
      return (
        <div className="py-12 px-4 bg-white">
          <h2 className="text-3xl font-bold text-center mb-8">{categoryName.toUpperCase()}</h2>
    
          <div className="flex space-x-6 mb-8">
            <aside className="w-1/4 bg-gray-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Filters</h3>
    
              <div className="mb-6">
                <h4 className="font-medium mb-2">Size</h4>
                {["XS", "S", "M", "L", "XL"].map((sz) => (
                  <label key={sz} className="block">
                    <input
                      type="checkbox"
                      name="size"
                      value={sz}
                      checked={filters.size.includes(sz)}
                      onChange={handleFilterChange}
                      className="mr-2"
                    />
                    {sz}
                  </label>
                ))}
              </div>
    
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex justify-between text-sm mb-2">
                  <span>₹{filters.priceRange[0]}</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={filters.priceRange[1]}
                  step={500}
                  value={filters.priceRange[0]}
                  onChange={handleMinPriceChange}
                  className="w-full mb-2"
                />
                <input
                  type="range"
                  min={filters.priceRange[0]}
                  max={10000}
                  step={500}
                  value={filters.priceRange[1]}
                  onChange={handleMaxPriceChange}
                  className="w-full"
                />
              </div>
    
              <div className="mb-6">
                <h4 className="font-medium mb-2">Rating</h4>
                <input
                  type="range"
                  name="rating"
                  min={0}
                  max={5}
                  step={0.5}
                  value={filters.rating}
                  onChange={handleFilterChange}
                  className="w-full"
                />
                <div className="text-sm text-center mt-1">{filters.rating} Stars & Up</div>
              </div>
    
              <div>
                <h4 className="font-medium mb-2">Sort By</h4>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="price-low-to-high">Price: Low to High</option>
                  <option value="price-high-to-low">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </aside>
    
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length === 0 ? (
                <p>No products match your filters.</p>
              ) : (
                filteredProducts.map((p, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white">
                    <div className="cursor-pointer" onClick={() => handleAddToCart(p)}>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4 text-center bg-gray-50">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="text-gray-600">{p.description}</p>
                      <p className="font-bold text-gray-700">₹{parseInt(p.price.replace(/[^\d]/g, ''), 10)}</p>
                      <p className="text-sm text-gray-500">Size: {p.size.join(", ")}</p>
                      <p className="text-sm text-yellow-500">{parseFloat(p.reviews)} ⭐</p>
                      <AddToCartButton 
                        product={p} 
                        buttonClass="mt-3 w-full bg-black text-white py-1 rounded hover:bg-gray-800" 
                      />


                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    };
    
export default CategoryProducts;
