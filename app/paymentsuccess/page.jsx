"use client";
import { useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("paymentId");

  return (
    <div className="flex items-center justify-center m-10 flex-col h-[70vh] bg-gray-100 rounded-lg">
      <p className="bg-pink-300 p-4 rounded-full">Congratulations !</p>
      <p className="font-bold text-[#444] ">Payment done successfully.</p>
      <span className="bg-green-400 p-8 m-4 rounded-md mt-10 ">
        Your payment ID is:{" "}
        <p className="mt-2 font-bold text-yellow-900 bg-white p-2 rounded-md">
          {search.slice(4)}
        </p>
      </span>
    </div>
  );
};

export default SuccessPage;
