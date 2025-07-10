
        import React, { useState, useEffect } from 'react';

        function FoodFact() {
          const [product, setProduct] = useState(null);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);

          useEffect(() => {
            const fetchProduct = async () => {
              try {
                const response = await fetch(`https://world.openfoodfacts.net/api/v2/product/3274080005003.json`);
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                data.product
                setProduct(data.product);
              } catch (err) {
                setError(err);
              } finally {
                setLoading(false);
              }
            };
            fetchProduct();
          }, []);

          if (loading) return <p>Loading product data...</p>;
          if (error) return <p>Error: {error.message}</p>;
          if (!product) return <p>Product not found.</p>;

          return (
            <div className="apiDetails">
                <h1>{product.last_image_dates_tags}</h1>
                <h1>{product.last_image_t}</h1>
              {/* Add more details like nutrition facts, etc. */}
            </div>
          );
        }

        export default FoodFact;