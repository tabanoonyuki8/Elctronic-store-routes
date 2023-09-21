
import { BsCheck2Circle } from 'react-icons/bs';
const Desciption = ({f}) => {
    return (
        <div>
          <p className='text-3xl flex '>
            <BsCheck2Circle className='text-green-900 mr-4'></BsCheck2Circle>{f}</p>
        </div>
    );
};

export default Desciption;