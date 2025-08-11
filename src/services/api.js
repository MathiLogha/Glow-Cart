import axios from 'axios';

export const getProducts = async () => {
  try {
    const res = await axios.get('https://dummyjson.com/products');
    return res.data.products.filter(p => 
      p.title.toLowerCase().includes('lip') || 
      p.title.toLowerCase().includes('cream') ||
      p.title.toLowerCase().includes('mascara')
    );
  } catch (err) {
    console.error(err);
    return [];
  }
};
