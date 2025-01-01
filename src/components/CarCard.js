function CarCard({car}) {
  return (
      <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="single-featured-cars">
              <div className="border border-gray-300">
                  <div className="flex items-center justify-center px-7 h-[220px] border-b border-gray-300">
                      <img src={car.image_url} alt="cars" />
                  </div>
                  <div className="p-3">
                      <p className="text-xs text-gray-500 capitalize">
                          model: {car.year}
                          <span className="inline-block mx-2">{car.miles} mi</span>
                          <span className="inline-block mr-2">{car.horsepower}HP</span>
                          {car.transmission}
                      </p>
                  </div>
              </div>
              <div className="my-5">
                  <h2 className="text-sm mb-4">
                      <p className="uppercase">{car.make} {car.model}</p>
                  </h2>
                  <h3 className="text-xs mb-2">${car.price}</h3>
                  <p className="text-xs text-gray-500">
                      {car.description}
                  </p>
              </div>
          </div>
      </div>


)
}

export default CarCard