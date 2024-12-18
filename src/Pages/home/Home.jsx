import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Herosection from "../../components/Herosection/Herosection";
import Filter from "../../components/Filter/Filter";
import Track from "../../components/Track/Track";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Link } from "react-router-dom";
import Productcard from "../../components/Productcard/Productcard";

function Home() {
  return (
    <Layout>
      <Herosection />
      <Filter />
      <Productcard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
