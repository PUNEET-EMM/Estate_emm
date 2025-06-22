import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Buy or Sell Properties Seamlessly Online</h1>
          <p>
            Discover your perfect home or list your property for thousands of verified buyers.
            Our platform connects buyers and sellers across the country with trusted agents,
            secure transactions, and real-time property insights. Whether you're searching for a
            cozy apartment or selling your family home — we make real estate simple and digital.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>500+</h1>
              <h2>Homes Sold Online</h2>
            </div>
            <div className="box">
              <h1>1,200+</h1>
              <h2>Verified Listings</h2>
            </div>
            <div className="box">
              <h1>24/7</h1>
              <h2>Support & Guidance</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Modern house background" />
      </div>
    </div>
  );
}

export default HomePage;
