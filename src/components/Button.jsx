const Button = ({content}) => {
  return <div role="button" className="bg-grey-700 w-full rounded-lg flex justify-center items-center py-3 cursor-pointer text-white font-bold hover:bg-green hover:text-grey-800 transition-colors duration-500">
    {content}
  </div>;
};

export default Button;
