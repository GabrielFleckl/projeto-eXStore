function calculateDiscountedPrice(originalPrice, discount) {
  const discountPercentage = parseFloat(discount);
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice.toFixed(3);
}

function Card({ name, price, discount, prevPrice, isFree, img }) {
  const discountedPrice = calculateDiscountedPrice(prevPrice, discount);

  return (
    <>
      <main className="bg-slate-100 p-4 rounded-lg cursor-pointer hover:scale-[1.03] ease-in-out duration-300">
        <div className="mb-4">
          <img src={img} alt="" />
        </div>
        <div>
          <h1 className="text-primaryBlack font-medium text-xl	mb-4 lg:text-start text-center">
            {name}
          </h1>

          {isFree ? (
            <div className="bg-primaryGray inline-block rounded px-3 py-1">
              <p className="text-primaryBlue font-medium text-base">
                Free Download
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between mb-2 lg:items-center items-center">
              <div>
                <p className="text-primaryBlue font-medium text-base">
                  RP {discount ? discountedPrice : price}
                </p>
              </div>

              {discount && (
                <div className="flex items-center bg-slate-200 rounded">
                  <p className="bg-red-200 text-red-500 px-1 rounded font-medium">
                    {discount}
                  </p>
                  <p className="text-gray-600 line-through font-medium mx-1">
                    Rp {prevPrice}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Card;
