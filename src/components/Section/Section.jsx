import PropTypes from 'prop-types';
import {SectionFeedback} from './Section.styled';
// ================================
export const Section =({title, children})=>{
  return(
    <SectionFeedback>
      <h2>{title}</h2>
      <div>{children}</div>      
    </SectionFeedback>
  )
}

Section.propTypes = {
  title:PropTypes.string.isRequired,
  children:PropTypes.node.isRequired
}