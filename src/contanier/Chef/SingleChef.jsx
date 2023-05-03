import React from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SingleChef = ({ chef }) => {
    // console.log(chef)
    const { _id, name, img, recipes, experience,} = chef;
  return (
    <div className="card card-compact min-w-fit text-[#ffffff] shadow-xl m-4">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>
            <small>Years of experience: {experience}</small>
          </p>
        </div>
        <hr></hr>
        <div>
          <h4 className="text-base font-semibold pb-5">Numbers of recipes:</h4>

          {recipes.map((recipe, ind) => (
            <p className="mb-1" key={ind}>
              
              {ind + 1}. {recipe}
            </p>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex justify-center items-center">
            <p>58</p>
            <FaThumbsUp></FaThumbsUp>
          </span>
          <span className="flex justify-center items-center ">
            <p>02</p>
            <FaThumbsDown></FaThumbsDown>
          </span>
        </div>
        <div className="card-actions justify-end">
          <Link
            className="btn btn-primary w-full bg-[#f5efdb] text-[#0c0c0c] hover:bg-slate-200"
            to={`/allChef/${_id}`}
          >
            {" "}
            <button className="">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;