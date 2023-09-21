import PropTypes from 'prop-types';
import Desciption from '../Desciption/Desciption';

const Price = ({option}) => {
    const {name,price,features}= option;
    return (
        <div className='bg-sky-500 rounded-md p-5 '>
            <h2 className='text-center' >
                <span className='text-5xl text-center'>
                    {price}
                </span>
                <span className='text-3xl text-center'>/mon</span>

            </h2>
            <h4 className='text-3xl font-bold my-8 text-center'>
                {name}
            </h4>
   <div className='pl-5'>
   {
                features.map((f,index)=> <Desciption key={index} f={f}>

                </Desciption>)
            }
   </div>
   <div>
         <button className='text-3xl font-semibold mt-12 bg-green-500 w-full py-4 rounded-lg hover:bg-green-700'>Buy now</button>
   </div>
        </div>
    );
};
Price.propTypes={
    option:PropTypes.object.isRequired
  
  }
export default Price;