function PreOrderCard({ title, img }) {
  return (
    <main className="relative">
      <img src={img} className="blur-[3px] " alt="" />
      <h1 className="absolute lg:bottom-24 bottom-24 lg:left-9 left-5 w-60 lg:w-80  text-white font-bold text-1xl md:text-4xl">
        {title}
      </h1>
      <button className="btn text-white p-1 m-0 h-0 absolute lg:bottom-6 bottom-6 lg:left-9 left-5 hover:bg-white hover:text-slate-800">
        Pre-order now!
      </button>
    </main>
  );
}

export default PreOrderCard;
