import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const AllChef = () => {
  const allChef = useLoaderData();
  // console.log(allChef)
    return (
      <div className="bg-[#0c0c0c] py-9 lg:px-9">
        <div className="app__specialMenu-title">
          <SubHeading title="Menu that fits your palatte" />
          <h1 className="headtext__cormorant">Chef's Word</h1>
        </div>
        <div className="lg:grid gap-4 grid-cols-3 grid-rows-2">
          {/* <div className="card card-compact w-96 text-[#ffffff] shadow-xl m-4">
            <figure>
              <img src={images.chef1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">Al Ikramuin Amin</h2>
                <p>
                  <small>Years of experience: 5 year</small>
                </p>
              </div>
              <hr></hr>
              <div>
                <h4 className="text-base font-semibold pb-5">
                  Numbers of recipes:
                </h4>
                <p className="mb-1">1. Avocado Cucumber Tuna Salad</p>
                <p className="mb-1">2. Caprese-Stuffed Avocados</p>
                <p className="mb-1">3. Fruit Salad with Honey Lime Dressing</p>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full bg-[#f5efdb] text-[#0c0c0c] hover:bg-slate-200">
                  View Recipes
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="card card-compact w-96 text-[#ffffff] shadow-xl m-4">
            <figure>
              <img src={images.chef2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">Al Ikramuin Amin</h2>
                <p>
                  <small>Years of experience: 5 year</small>
                </p>
              </div>
              <hr></hr>
              <div>
                <h4 className="text-base font-semibold pb-5">
                  Numbers of recipes:
                </h4>
                <p className="mb-1">1. Avocado Cucumber Tuna Salad</p>
                <p className="mb-1">2. Caprese-Stuffed Avocados</p>
                <p className="mb-1">3. Fruit Salad with Honey Lime Dressing</p>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full bg-[#f5efdb] text-[#0c0c0c] hover:bg-slate-200">
                  View Recipes
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="card card-compact w-96 text-[#ffffff] shadow-xl m-4">
            <figure>
              <img src={images.chef3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">Al Ikramuin Amin</h2>
                <p>
                  <small>Years of experience: 5 year</small>
                </p>
              </div>
              <hr></hr>
              <div>
                <h4 className="text-base font-semibold pb-5">
                  Numbers of recipes:
                </h4>
                <p className="mb-1">1. Avocado Cucumber Tuna Salad</p>
                <p className="mb-1">2. Caprese-Stuffed Avocados</p>
                <p className="mb-1">3. Fruit Salad with Honey Lime Dressing</p>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full bg-[#f5efdb] text-[#0c0c0c] hover:bg-slate-200">
                  View Recipes
                </button>
              </div>
            </div>
          </div> */}

          {allChef.map((chef, ind) => (
            <SingleChef key={ind} chef={chef}></SingleChef>
          ))}
        </div>
      </div>
    );
};

export default AllChef;