import Price from "../Price/Price";


const PriceOption = () => {
const priceOptions=[
    {
      "id": 1,
      "name": "Electric circite 1",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "price": 99
    },
    {
      "id": 2,
      "name": "Electric wire",
      "features": ["Feature A", "Feature B", "Feature C"],
      "price": 149
    },
    {
      "id": 3,
      "name": "Electric IC",
      "features": ["Feature X", "Feature Y", "Feature Z"],
      "price": 199
    }
  ];
  

    return (
        <div className="m-12">
            <h2 className="text-center text-5xl text-yellow-600 m-7">Best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
              priceOptions.map(option => <Price key={option.id} option={option}></Price>)  
            }
            </div>
        </div>
    );
};

export default PriceOption;