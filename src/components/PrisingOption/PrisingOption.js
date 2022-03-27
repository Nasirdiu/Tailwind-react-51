import React from "react";
import Benifit from "../Benifit/Benifit";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const PrisingOption = (props) => {
  const { name, price, benifit } = props.option;
  return (
    <div className="bg-white p-4">
      <h2 className="bg-indigo-300 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benefit:</h3>

        {benifit.map((benifits) => (
          <Benifit benifits={benifits}></Benifit>
        ))}
      </div>
      <button className="bg-green-500 flex w-full justify-center py-2 rounded mt-6 text-slate-50 hover:bg-green-700 font-bold">
        Buy Now{" "}
        <ArrowNarrowRightIcon className="w-6 h-6 ml-2"></ArrowNarrowRightIcon>
      </button>
    </div>
  );
};

export default PrisingOption;
