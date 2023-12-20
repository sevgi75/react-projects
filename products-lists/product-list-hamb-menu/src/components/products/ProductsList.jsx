import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductsList = ({products}) => {
    // console.log(products);
  return (
    <div className="products-list">
        {/* //! destructuring yapmadan kullanma */}
        {/* {products.map(product => (
            <div key={product.id}>
                <div>
                    <h3>{product.price}</h3>
                </div>
                <img src={product.image} alt={product.title} width="100px" />
                <div>
                    <h2>{product.title}</h2>
                </div>
            </div>
        ))} */}
        {/*//! map icinde destructuring etme */}
        {/* {products.map((product) => {
            const {price, title, image, id} = product;
            return (
            <div key={id}>
                <div>
                    <h3>{price}</h3>
                </div>
                <img src={image} alt={title} width="100px" />
                <div>
                    <h2>{title}</h2>
                </div>
            </div>
            )
        })} */}
        {/* //!map e ait olan callback parametresinde destructurin */}
        {/* {products.map(({price, title, image, id}) => (         
            <div key={id}>
                <div>
                    <h3>{price}</h3>
                </div>
                <img src={image} alt={title} width="100px" />
                <div>
                    <h2>{title}</h2>
                </div>
            </div>
            )
        )} */}
        {/* //!Best Practice Alt Componente Gonderme */}
        {/* //!Buradan acmadan gonderip alt componentte karsilayip icini acma */}
        {/* {
            products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}  */}
        {/* //!Buradan spreadle acarak gonderip objenin propertylerini props objesine yerlestirme */}
        {products.map((product) => (
            <ProductCard key={product.id} {...product} />
        ))} 
        
    </div>
  )
}

export default ProductsList