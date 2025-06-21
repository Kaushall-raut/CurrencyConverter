import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getData } from "../api/Axios";

const Converter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Currency"],
    queryFn: () => getData(from, to, amount),
    enabled: false, //if it is false then it will not fetch the data while page loading
  });
  const handleClick = () => {
    if (amount > 0) {
      refetch();
    }
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <section className="bg-blue-100 h-auto w-100 m-3 lg:h-[60%] lg:w-[30%]  rounded-xl p-4">
      <h1 className="text-center text-3xl text-blue-700 mb-4 mt-12">
        Currency Converter
      </h1>
      <hr className="text-gray-500  " />
      <div className="flex justify-baseline  w-full h-full  flex-col gap-4 mt-8">
        <div className="  w-full flex justify-center">
          <label className="text-lg m-1">
            Amount:
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
              className="border-blue-500 border-2 rounded-xs text-center"
            />
          </label>
        </div>
        <div className="flex justify-evenly m-2">
          <div>
            <label>
              From :
              <select
                name="from"
                id="from"
                className="border m-2"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                {["USD", "INR", "EUR", "GBP", "AUD"].map((value, index) => {
                  return (
                    <option name="from" value={value} key={index}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select
                name="to"
                id="to"
                value={to}
                className="border m-2"
                onChange={(e) => setTo(e.target.value)}
              >
                {["INR", "USD", "EUR", "GBP", "AUD"].map((value, index) => {
                  return (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        </div>
        <button
          disabled={amount == 0 || isLoading}
          className={`${amount == 0 ? "bg-gray-400 text-gray-700" : "bg-blue-400"}
          text-2xl
          font-semibold
          m-2
          cursor-pointer`}
          onClick={handleClick}
        >
          {isLoading ? "Converting" : "convert"}
        </button>
        <hr className="text-gray-500  " />

        {data && (
          <h2 className="text-center text-2xl">
            {amount} {from} = {data.toFixed(2)} {to}
          </h2>
        )}
      </div>
    </section>
  );
};
export default Converter;
