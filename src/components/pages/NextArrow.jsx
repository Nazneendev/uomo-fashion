import { MdArrowForwardIos } from "react-icons/md";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
   
 
    <div className={"text-4xl text-white absolute top-1/2 right-14 -translate-y-1/2"} onClick={onClick}>
        <MdArrowForwardIos/>
    </div>
  );
  
}

export default NextArrow