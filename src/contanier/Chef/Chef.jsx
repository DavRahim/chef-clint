import React, { useState } from "react";
import "./Chef.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Toaster, toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";


const Chef = () => {
  const chef = useLoaderData();
  const [isDisabled, setDisabled] = useState(true);

  const toggleClass = () => {
    setDisabled(!isDisabled);
    toast.success('Add favorite List')
  };

  console.log(chef);
  const { name, img, description, recipes, rating } = chef;
  return (
    <LazyLoad>
      <div className="app__bg app__wrapper section__padding flex flex-col justify-center items-center">
        <SubHeading title="Chef Recipes" />

        <div className="app__wrapper_img app__wrapper_img-reverse w-9/12 flex flex-col justify-center items-center">
          <img src={img} alt="chef_image" />
        </div>

        <div className="app__wrapper_info w-9/12 flex flex-col justify-center items-center">
          <h1 className="headtext__cormorant text-5xl my-5">
            What we believe in
          </h1>

          <div className="app__chef-content mt-2">
            <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote_image" />
              <p className="p__opensans mb-6 font-semibold text-xl">
                {recipes[0]}
              </p>
            </div>
            <p className="p__opensans">{description}</p>
          </div>

          <div className="app__chef-sign">
            <p>{name}</p>
            <p className="p__opensans">Chef & Founder</p>
            <div>
              <Rating
                className="text-[#dcca87]"
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />
            </div>
            {/* <img src={images.sign} alt="sign_image" /> */}
          </div>
        </div>
        <button
          onClick={toggleClass}
          className={
            isDisabled
              ? "btn btn-prima none bg-[#f5efdb] text-[#0c0c0c] hover:bg-slate-200"
              : "hidden"
          }
        >
          favorite
        </button>
        <Toaster />
      </div>
    </LazyLoad>
  );
};

export default Chef;
