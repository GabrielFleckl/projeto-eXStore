function FeedbackCard({ name, stars, img, description }) {
  return (
    <div className=" bg-white p-4 rounded mx-4 hover:scale-105 transition duration-200 ">
      <div className="flex justify-center items-center gap-4">
        <div className="w-24">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="flex flex-col  justify-start items-start">
          <div className="flex gap-2">
            <p className="font-medium">{name}</p>
            <img src={stars} alt="" />
          </div>
          <p className="text-base w-64">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
