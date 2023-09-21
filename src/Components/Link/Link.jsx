import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
          
             <li className="md:mr-20 md:ml-10 md:p-1  text-xl md:text-1xl font-semibold "><a href={route.path}>{route.name}</a></li>
           
        </div>
    );
};
Link.propTypes={
  route:PropTypes.object.isRequired

}
export default Link;