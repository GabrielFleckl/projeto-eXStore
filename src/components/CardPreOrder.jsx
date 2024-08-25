function PreOrderCard({ title, img }) {
  return (
    <main className="relative border-2 border-slate-500/50 rounded-xl">
      <img src={img} className="w-full object-fit" alt="" />
      <h1 className="absolute lg:bottom-24 bottom-24 lg:left-9 left-5 w-60 lg:w-80   py-1 rounded-lg text-white font-bold text-xl md:text-4xl">
        {title}
      </h1>
      <button className="btn text-slate-100 border-none bg-[#3B44F6] backdrop-blur-md  absolute lg:bottom-6 bottom-6 lg:left-9 left-5 hover:bg-[#3B44F6] ring-slate-50 hover:ring-1 ">
        Pre-order now!
      </button>
    </main>
  );
}

export default PreOrderCard;
