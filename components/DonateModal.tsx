"use client";

import { useState } from "react";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_AMOUNTS = [50000, 100000, 150000, 200000, 250000, 500000];

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50000);
  const [customAmount, setCustomAmount] = useState("");

  if (!isOpen) return null;

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Icons */}
        <div className="flex justify-between items-start mb-8">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex-shrink-0" />
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Text Content */}
        <div className="mb-8">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-gray-800 mb-3 tracking-tight">
            Make a Difference Today
          </h2>
          <p className="text-[15px] text-gray-500 font-normal">
            Your donation directly funds education, healthcare, and community development across Nigeria.
          </p>
        </div>

        {/* Donation Presets */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              onClick={() => handlePresetClick(amount)}
              className={`py-4 px-2 rounded-xl font-bold text-[15px] transition-all border ${
                selectedAmount === amount
                  ? "bg-[#f0fdf4] border-[#bbf7d0] text-gray-900"
                  : "bg-white border-gray-100 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {formatNaira(amount)}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="mb-8">
          <label className="block text-[13px] text-gray-500 font-medium mb-2">
            Custom
          </label>
          <div className="relative">
            <input
              type="number"
              placeholder="Enter amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-100 text-[15px] text-gray-900 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full py-4 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-[16px] transition-all shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)] mb-4">
          Donate Now - Secure & Safe
        </button>

        {/* Footer Text */}
        <p className="text-center text-[13px] text-gray-500 font-normal">
          Tax-deductible · Transparent reporting
        </p>
      </div>
    </div>
  );
}
