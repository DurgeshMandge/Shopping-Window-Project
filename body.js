import { useState } from "react";
import { shopItemsData } from "../constants.js";

const ClothCard = ({ name, color, price, desc, img }) => {
  return (
    <div className="card cloth-card section">
      <div className="img-section col">
        <img src={img} alt={name} className="cloth-card-image" />
      </div>
      <div className="info-section col">
        <h4 className="cloth-card-title">{name}</h4>
        <h5 className="cloth-card-price">{price}</h5>
        <h6 className="cloth-card-desc">{desc}</h6>
        <h6 className="cloth-card-color">{color}</h6>
      </div>
    </div>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [shopData] = useState(shopItemsData);
  const [filteredShopData, setFilteredShopData] = useState(shopData);

  function filterClothData(shopData, searchText) {
    return shopData.filter(
      (shop) => shop.desc.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  const handleSearch = () => {
    setFilteredShopData(filterClothData(shopData, searchText));
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button type="submit" onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="card-list">
        {filteredShopData.map((item) => (
          <ClothCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
