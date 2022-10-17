import PropTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled';
// ==============================
export const FeedbackOptions =({options,handleButton})=>{
  return(
    <>
    {Object.keys(options).map(key=>      
      <Button key={key} type="button" name={key} onClick={(e)=>handleButton(e)}>{key}</Button>      
      )}      
    </>
  )
}

FeedbackOptions.propTypes ={
  options:PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired,
  handleButton:PropTypes.func.isRequired
}
