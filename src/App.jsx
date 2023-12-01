import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <main className="min-h-screen font-['Libre_Franklin']">
      <section className="grid justify-center pt-28 lg:pt-24">
        <picture>
          <img className="block mx-auto" src="/logo.svg" alt="" />
        </picture>
        <h1 className="text-2xl lg:text-5xl font-light text-[hsl(0,0%,59%)] mt-14 mb-7 text-center">
          We are launching{" "}
          <span className="font-bold text-[hsl(209,33%,12%)]">soon!</span>
        </h1>
        <p className="text-center lg:text-lg text-black/70 lg:text-black/90 lg:w-[615px]">
          Subscribe and get notified
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-11 lg:flex lg:gap-3"
        >
          <label htmlFor="email">
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please provide a valid email adress",
                },
              })}
              className={`border border-[hsl(223,100%,88%)] outline-none rounded-full px-8 py-3 w-full lg:w-[400px] ${
                errors["email"] ? "border-[hsl(354,100%,66%)]" : ""
              }`}
              placeholder="Your email adress.."
              type="text"
              id="email"
            />
            {errors["email"] && (
              <p className="text-sm text-center lg:text-start lg:pl-8 lg:text-xs mt-1 mb-4 italic text-[hsl(354,100%,66%)]">
                {errors["email"].message}
              </p>
            )}
          </label>
          <button className="bg-[hsl(223,87%,63%)] hover:bg-blue-700 transition-colors outline-none text-base font-medium text-white w-full rounded-full text-center py-3 shadow-lg lg:max-w-[264px] max-h-[50px]">
            Notify Me
          </button>
        </form>
      </section>
      <picture>
        <img
          className="mt-16 lg:mt-20 mb-24 lg:mb-16 max-w-[85vw] lg:max-w-[610px] mx-auto"
          src="/illustration-dashboard.png"
          alt=""
        />
      </picture>
      <footer>
        <nav className="flex gap-3 justify-center items-center">
          <i className="text-[hsl(223,87%,63%)] border border-[hsla(0,0%,59%,0.29)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(223,87%,63%)] hover:text-white rounded-full px-2 py-2 bx bxl-facebook bx-sm"></i>
          <i className="text-[hsl(223,87%,63%)] border border-[hsla(0,0%,59%,0.29)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(223,87%,63%)] hover:text-white rounded-full px-2 py-2 bx bxl-twitter bx-sm"></i>
          <i className="text-[hsl(223,87%,63%)] border border-[hsla(0,0%,59%,0.29)] hover:border-[hsl(223,87%,63%)] hover:bg-[hsl(223,87%,63%)] hover:text-white rounded-full px-2 py-2 bx bxl-instagram bx-sm"></i>
        </nav>
        <p className="font-light text-[hsl(0,0%,59%)] text-sm text-center mt-14 lg:mt-6 mb-12 lg:mb-14">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
