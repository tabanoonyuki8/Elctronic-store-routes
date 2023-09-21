import Price from "../Price/Price";


const PriceOption = () => {
const priceOptions=[
    {
      "id": 1,
      "name": "Electric Appliance 1",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "price": 99.99
    },
    {
      "id": 2,
      "name": "Electric Appliance 2",
      "features": ["Feature A", "Feature B", "Feature C"],
      "price": 149.99
    },
    {
      "id": 3,
      "name": "Electric Appliance 3",
      "features": ["Feature X", "Feature Y", "Feature Z"],
      "price": 199.99
    }
  ];
  

    return (
        <div>
            <h2>Best price in the town</h2>
            {
              priceOptions.map(option => <Price key={option.id} option={option}></Price>)  
            }
        </div>
    );
};

export default PriceOption;