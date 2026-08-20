import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Heart,
  Fuel,
  Gauge,
  Settings2,
  CalendarDays,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { productList } from "@/data";
import { IProduct } from "@/interfaces";

function ProductDetails() {
  const { id } = useParams();
  //   console.log(id);
  const car = productList.find(
    (product: IProduct) => product.id.toString() == id,
  );
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">Car Not Found</h1>

          <p className="mt-2 text-slate-500">
            The car you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-flex mt-6 rounded-lg bg-slate-800 px-6 py-3 text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          <ArrowLeft size={18} />
          Back to cars
        </Link>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* LEFT */}
          <div>
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
              <img
                src={`${car.imageURL}?auto=format&fit=crop&w=1400&q=80`}
                alt={car.carBrand}
              />

              {/* Favorite */}
              <button
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur transition hover:bg-white hover:text-red-500"
                aria-label="Add to favorites"
              >
                <Heart size={21} />
              </button>

              {/* Badge */}
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-md backdrop-blur">
                {car.fuelType}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Description</h2>

              <p className="mt-4 leading-7 text-slate-600">{car.description}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            {/* Product Info */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              {/* Title */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Chevrolet
                  </p>

                  <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {car.carBrand}
                  </h1>

                  <p className="mt-2 text-slate-500">
                    {car.sellingType} • {car.fuelType}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-7">
                <p className="text-sm text-slate-500">Price</p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  ${car.price.toLocaleString()}
                </p>
              </div>

              {/* Specs */}
              <div className="my-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <Fuel className="text-blue-600" size={21} />

                  <p className="mt-3 text-xs text-slate-500">Fuel Type</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {car.fuelType}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <Gauge className="text-blue-600" size={21} />

                  <p className="mt-3 text-xs text-slate-500">Engine</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {car.fuelType}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <Settings2 className="text-blue-600" size={21} />

                  <p className="mt-3 text-xs text-slate-500">Transmission</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {car.transmission}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <CalendarDays className="text-blue-600" size={21} />

                  <p className="mt-3 text-xs text-slate-500">Year</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {car.year}
                  </p>
                </div>
              </div>

              {/* Extra info */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-slate-400" />

                  <div>
                    <p className="text-xs text-slate-500">Location</p>

                    <p className="font-medium text-slate-800"></p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Gauge size={20} className="text-slate-400" />

                  <div>
                    <p className="text-xs text-slate-500">Mileage</p>

                    {/* <p className="font-medium text-slate-800">{car.mileage}</p> */}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="mt-7 w-full rounded-xl bg-slate-800 px-6 py-4 font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98]">
                Contact Seller
              </button>

              <button className="mt-3 w-full rounded-xl border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">
                Schedule a Visit
              </button>

              {/* Trust */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4">
                <ShieldCheck size={22} className="shrink-0 text-green-600" />

                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Verified Listing
                  </p>

                  <p className="text-xs text-green-700">
                    This vehicle has been checked by our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
