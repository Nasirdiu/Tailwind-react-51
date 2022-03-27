import React from "react";
import PrisingOption from "../PrisingOption/PrisingOption";

const Prising = () => {
  const prisingOption = [
    { id: 1, name: "Free", price: 0,benifit:[
        'lifetime free',
        'united free',
        'localiged deals',
        'fantastic deals',
        'creazy deals'
    ] },
    { id: 2, name: "Rguler", price: 56.10 ,benifit:[
        'Every free',
        'united free',
        'localiged deals',
        'fantastic deals',
        'creazy deals'
    ]},
    { id: 3, name: "Past", price: 44.50,benifit:[
        'everything free',
        'united free',
        'localiged deals',
        'fantastic deals',
        'creazy deals'
    ] },
    
  ];
  return (
    <div className="bg-indigo-200 p-4 m-8">
      <h1 className="text-6xl font-mono text-white">Tailwind Css</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores
        iusto eum sapiente qui ullam aperiam laudantium cumque voluptates
        inventore optio repellendus rerum, porro corporis consectetur harum
        animi commodi vel.
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
          {
              prisingOption.map(option=><PrisingOption key={option.id}option={option}></PrisingOption>)
          }
      </div>
    </div>
  );
};

export default Prising;
