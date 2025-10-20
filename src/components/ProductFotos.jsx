import { assets } from '../assets/assets'

const ProductFotos = () => {
  return (
    <div className="space-y-5">
      <div className="flex grid-cols-2 flex-col gap-8 sm:grid md:grid-cols-3 lg:grid-cols-4 mt-8">
        <div className="relative overflow-hidden flex justify-center items-center">
          <img
            src={assets.tRolle_1}
            alt="Thermorolle 1"
            width={300}
            height={300}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden flex justify-center items-center">
          <img
            src={assets.rolle_info}
            alt="Info zu unseren Thermorollen"
            width={700}
            height={700}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden flex justify-center items-center">
          <img
            src={assets.tRolle_2}
            alt="Thermorolle 2"
            width={700}
            height={700}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden flex justify-center items-center">
          <img
            src={assets.tRolle_3}
            alt="Thermorolle 3"
            width={700}
            height={700}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductFotos
