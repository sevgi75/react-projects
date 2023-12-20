import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  let data = []

  const handleCategory = (e) => {
    setFilter(e.target.textContent.toLocaleLowerCase())
  }

  if (filter === "all"  && search === "") {
    data = products;
  }else if (filter === "all" && search !== "") {
    data = products.filter((item) => item.title.toLocaleLowerCase().includes(search));
  }else {
    data = products.filter((item) => item.category.toLocaleLowerCase() === filter.toLocaleLowerCase() && item.title.toLocaleLowerCase().includes(search));
  }

  const handleSearch = (e) => {
    setSearch(e.target.value.toLocaleLowerCase());
  }

  return (
    <>
      <Header categories={categories} text="Products List" handleCategory={handleCategory} btnActive={filter}/>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto mt-3"
        onChange={handleSearch}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data.map((product) => (<ProductCard key={product.id} {...product}/>)) }
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
