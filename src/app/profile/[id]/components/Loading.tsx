export default function Loading() {
  return (
    <main className="min-h-screen bg-[#EFE1D1] p-4 sm:p-8">

      <div className="mx-auto max-w-5xl animate-pulse">


        <div className="overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl">

          <div className="h-48 w-full bg-[#5B3F22]" />

          <div className="px-6 pb-8">

            <div className="-mt-16 flex justify-center">

              <div className="h-32 w-32 rounded-full border-4 border-[#EFE1D1] bg-[#5B3F22]" />

            </div>


            <div className="mt-5 flex flex-col items-center">

              <div className="h-9 w-48 rounded-lg bg-[#5B3F22]" />

              <div className="mt-3 h-4 w-20 rounded bg-[#5B3F22]" />

            </div>


            <div className="mt-6 flex justify-center">

              <div className="h-12 w-44 rounded-xl bg-[#5B3F22]" />

            </div>

          </div>

        </div>


        {/* Car */}

        <div className="mt-6 overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl">

          <div className="relative h-72 bg-[#5B3F22] sm:h-96">

            <div className="absolute right-5 top-5 h-9 w-24 rounded-full bg-[#6B4A2A]" />

          </div>


          <div className="p-6">

            <div className="h-4 w-16 rounded bg-[#5B3F22]" />

            <div className="mt-3 h-8 w-56 rounded-lg bg-[#5B3F22]" />

          </div>

        </div>



        <div className="mt-6 rounded-3xl bg-[#432E1A] p-6 shadow-xl">

          <div className="h-4 w-28 rounded bg-[#5B3F22]" />

          <div className="mt-5 space-y-3">

            <div className="h-4 w-full rounded bg-[#5B3F22]" />
            <div className="h-4 w-11/12 rounded bg-[#5B3F22]" />
            <div className="h-4 w-8/12 rounded bg-[#5B3F22]" />

          </div>

        </div>



        <div className="mt-6 rounded-3xl bg-[#432E1A] p-6 shadow-xl">

          <div className="mb-5 h-6 w-32 rounded bg-[#5B3F22]" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#5B3F22] p-4"
              >

                <div className="h-4 w-20 rounded bg-[#6B4A2A]" />

                <div className="mt-3 h-5 w-36 rounded bg-[#6B4A2A]" />

              </div>
            ))}

          </div>

        </div>



        <div className="mt-6 rounded-3xl bg-[#432E1A] p-6 shadow-xl">

          <div className="h-6 w-32 rounded bg-[#5B3F22]" />

          <div className="mt-5 flex gap-3">

            <div className="h-9 w-24 rounded-full bg-[#5B3F22]" />

            <div className="h-9 w-28 rounded-full bg-[#5B3F22]" />

            <div className="h-9 w-20 rounded-full bg-[#5B3F22]" />

          </div>

        </div>

      </div>

    </main>
  );
}