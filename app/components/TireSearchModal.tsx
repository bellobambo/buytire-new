"use client";

import React, { useState, useEffect } from "react";
import { vehicleData, tireAttributeData } from "../data/vehicleData";

export default function TireSearchSection() {
  // Main states
  const [step, setStep] = useState("search");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Search form states
  const [searchType, setSearchType] = useState("vehicle");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [tireSize, setTireSize] = useState("");

  const [season, setSeason] = useState("All Tires");

  // Tire size form states
  const [isStaggered, setIsStaggered] = useState(false);
  const [frontWidth, setFrontWidth] = useState("");
  const [frontProfile, setFrontProfile] = useState("");
  const [frontWheelSize, setFrontWheelSize] = useState("");
  const [rearWidth, setRearWidth] = useState("");
  const [rearProfile, setRearProfile] = useState("");
  const [rearWheelSize, setRearWheelSize] = useState("");
  const [mainTireSeason, setMainTireSeason] = useState("");

  // Customer form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Derived data
  const [years, setYears] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [trims, setTrims] = useState<string[]>([]);
  const [tireSizes, setTireSizes] = useState<string[]>([]);
  const [vehicleImage, setVehicleImage] = useState("");

  // Initialize years
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearArray = [];
    for (let y = currentYear; y >= 1948; y--) {
      yearArray.push(y.toString());
    }
    setYears(yearArray);
    setMounted(true);
  }, []);

  // Update models when make changes
  useEffect(() => {
    if (make && make in vehicleData) {
      setModels(
        [...(vehicleData[make as keyof typeof vehicleData].models || [])].sort()
      );
    } else {
      setModels([]);
    }
    setModel(""); setTrim(""); setTireSize(""); setTrims([]); setTireSizes([]); setVehicleImage("");
  }, [make]);

  // Update trims and tire sizes when model changes
  useEffect(() => {
    if (make && model && make in vehicleData) {
      const makeData = vehicleData[make as keyof typeof vehicleData];

      setTrims(
        [...(makeData.trims?.[model as keyof typeof makeData.trims] || [])].sort()
      );

      const sizes =
        (makeData.tireSizes?.[
          model as keyof typeof makeData.tireSizes
        ] as string[]) || [];

      setTireSizes(
        [...sizes].sort((a, b) => {
          const na = a.replace(/\D/g, "");
          const nb = b.replace(/\D/g, "");
          return Number(na) - Number(nb);
        })
      );


      setVehicleImage(`/${make} ${model}.png`);
    }
  }, [make, model]);

  // Generate tire size string for "By Size" search
  useEffect(() => {
    if (searchType === "size") {
      if (isStaggered) {
        const front = `${frontWidth}/${frontProfile}R${frontWheelSize.replace('"', '')}`;
        const rear = `${rearWidth}/${rearProfile}R${rearWheelSize.replace('"', '')}`;
        setTireSize(`Staggered: ${front} (Front) / ${rear} (Rear)`);
      } else {
        const size = `${frontWidth}/${frontProfile}R${frontWheelSize.replace('"', '')}`;
        setTireSize(size);
      }
    }
  }, [frontWidth, frontProfile, frontWheelSize, rearWidth, rearProfile, rearWheelSize, isStaggered, searchType]);

  const handleSearch = () => {
    if (searchType === "vehicle" && (!make || !model)) {
      alert("Please select at least a Make and Model.");
      return;
    }
    if (searchType === "size" && (!frontWidth || !frontProfile || !frontWheelSize)) {
      alert("Please fill in required tire size fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep("customer"); }, 500);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const finalSeason = searchType === "size" ? mainTireSeason || season : season;
    const vehicleInfo = [year, make, model, trim].filter(Boolean).join(" ") || "N/A";
    const leadData = { name, email, phone, address, searchType: searchType === "size" ? "By Tire Size" : "By Vehicle", vehicleInfo, tireSize, season: finalSeason };

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
      if (response.ok) { setStep("success"); setYear(""); setMake(""); setModel(""); setTireSize(""); }
    } catch (error) {
      alert("Failed to submit. Please try again.");
    } finally { setLoading(false); }
  };

  const resetForm = () => {
    setStep("search");
    setSearchType("vehicle");
  };

  const renderTireSizeForm = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h3 className="font-bold text-gray-800 text-sm md:text-base uppercase tracking-wide">Tire Specifications</h3>
        <button type="button" onClick={() => setIsStaggered(!isStaggered)} className="text-[#02c5f6] cursor-pointer hover:underline text-xs font-bold uppercase">
          {isStaggered ? "− Remove Rear" : "+ Add Rear"}
        </button>
      </div>

      <div className={isStaggered ? "grid grid-cols-2 gap-4" : "space-y-3"}>
        <div className="space-y-2">
          {isStaggered && <h4 className="text-xs font-black text-[#02c5f6] uppercase">Front</h4>}
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Width</label>
            <select value={frontWidth} onChange={(e) => setFrontWidth(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
              <option value="">Select</option>
              {tireAttributeData.widths.map((w) => (<option key={w} value={w}>{w}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Profile</label>
            <select value={frontProfile} onChange={(e) => setFrontProfile(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
              <option value="">Select</option>
              {tireAttributeData.profiles.map((p) => (<option key={p} value={p}>{p}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Wheel</label>
            <select value={frontWheelSize} onChange={(e) => setFrontWheelSize(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
              <option value="">Select</option>
              {tireAttributeData.wheelSizes.map((ws) => (<option key={ws} value={ws}>{ws}</option>))}
            </select>
          </div>
        </div>

        {isStaggered && (
          <div className="space-y-2 border-l pl-4">
            <h4 className="text-xs font-black text-[#02c5f6] uppercase">Rear</h4>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Width</label>
              <select value={rearWidth} onChange={(e) => setRearWidth(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                <option value="">Select</option>
                {tireAttributeData.widths.map((w) => (<option key={w} value={w}>{w}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Profile</label>
              <select value={rearProfile} onChange={(e) => setRearProfile(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                <option value="">Select</option>
                {tireAttributeData.profiles.map((p) => (<option key={p} value={p}>{p}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Wheel</label>
              <select value={rearWheelSize} onChange={(e) => setRearWheelSize(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
                <option value="">Select</option>
                {tireAttributeData.wheelSizes.map((ws) => (<option key={ws} value={ws}>{ws}</option>))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="pt-2 border-t mt-2">
        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Season</label>
        <select value={mainTireSeason} onChange={(e) => { setMainTireSeason(e.target.value); setSeason(e.target.value); }} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
          <option value="">Select Season</option>
          {tireAttributeData.seasons.map((s) => (<option key={s} value={s}>{s}</option>))}
        </select>
      </div>
    </div>
  );

  const renderVehicleForm = () => (
    <div className="space-y-3">
      <h3 className="font-bold text-gray-800 text-sm md:text-base border-b pb-2 mb-2 tracking-wide uppercase">Vehicle Details</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
            <option value="">Year</option>
            {years.map((y) => (<option key={y} value={y}>{y}</option>))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Make</label>
          <select value={make} onChange={(e) => setMake(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
            <option value="">Make</option>
            {Object.keys(vehicleData).sort().map((m) => (<option key={m} value={m}>{m}</option>))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Model</label>
        <select value={model} onChange={(e) => setModel(e.target.value)} disabled={!make} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm disabled:bg-gray-50">
          <option value="">Select Model</option>
          {models.map((m) => (<option key={m} value={m}>{m}</option>))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Trim</label>
        <select value={trim} onChange={(e) => setTrim(e.target.value)} disabled={!model} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm disabled:bg-gray-50">
          <option value="">Select Trim</option>
          {trims.map((t) => (<option key={t} value={t}>{t}</option>))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Tire Size</label>
        <select value={tireSize} onChange={(e) => setTireSize(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
          <option value="">Select Tire Size</option>
          {tireSizes.map((ts) => (<option key={ts} value={ts}>{ts}</option>))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Season</label>
        <select value={season} onChange={(e) => setSeason(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm">
          <option>All Tires</option>
          <option>Summer</option>
          <option>Winter</option>
          <option>All-Season</option>
        </select>
      </div>
    </div>
  );

  // Initial Loading Spinner
  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-10 h-10 border-4 border-[#02c5f6] border-t-transparent rounded-full animate-spin" />
        <p className="mt-3 text-sm text-gray-500 font-semibold uppercase">Loading Search Tool...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-4 md:p-8">
        {step === "search" && (
          <div className="animate-in fade-in duration-500">
            <div className="bg-[#f0fbfe] border border-[#cceef7] p-4 rounded-xl mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-[#02c5f6] font-black text-sm md:text-base uppercase tracking-wider">How would you like to search?</h2>
              <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 text-sm min-w-[200px] bg-white font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#02c5f6]">
                <option value="vehicle">BY VEHICLE</option>
                <option value="size">BY TIRE SIZE</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                {searchType === "vehicle" ? renderVehicleForm() : renderTireSizeForm()}
              </div>

              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-white min-h-[300px]">
                {searchType === "vehicle" ? (
                  make && model && vehicleImage ? (
                    <div className="text-center animate-in zoom-in-95 duration-300">
                      <img
                        src={vehicleImage}
                        alt="Preview"
                        className="max-h-40 md:max-h-52 object-contain mb-4 drop-shadow-md"
                      />
                      <h4 className="font-black text-xl text-gray-800 uppercase italic leading-tight">{make} {model}</h4>
                      <p className="text-gray-500 text-sm font-bold mt-1">{trim}</p>
                    </div>
                  ) : (
                    <div className="text-center">

                      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest italic">Select vehicle to preview</p>
                    </div>
                  )
                ) : (
                  <div className="text-center">
                    <img src="https://2et52mjd63.ufs.sh/f/hoSaFx8MSm05SSV5tPvoLmWE7YJkMGnFZPwK1ICaSBxhTsv0" alt="Guide" className="max-h-40 md:max-h-52 object-contain mb-4 opacity-80" />
                    <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em]">Tire Size Guide</p>
                  </div>
                )}
              </div>
            </div>

            <button onClick={handleSearch} disabled={loading} className="w-full mt-8 cursor-pointer bg-[#02c5f6] text-white py-4 rounded-xl font-black text-lg hover:bg-[#01a2cc] transition-all shadow-lg active:scale-[0.98] uppercase tracking-wider">
              {loading ? "PROCESSING..." : "FIND YOUR TIRES NOW"}
            </button>
          </div>
        )}

        {step === "customer" && (
          <div className="p-2 md:p-6 max-w-xl mx-auto animate-in slide-in-from-right duration-500">
            <h3 className="text-2xl font-black text-gray-800 mb-8 text-center uppercase tracking-tight italic">Complete Your Request</h3>
            <form onSubmit={handleSubmitLead} className="flex flex-col gap-5">
              {[{ l: "Full Name", p: "John Doe", v: name, s: setName, t: "text" }, { l: "Email Address", p: "john@example.com", v: email, s: setEmail, t: "email" }, { l: "Phone Number", p: "(555) 000-0000", v: phone, s: setPhone, t: "tel" }, { l: "Address", p: "123 Tire St, City, State", v: address, s: setAddress, t: "text" }].map((f, i) => (
                <div key={i} className="flex flex-col">
                  <label className="text-xs font-black text-gray-400 px-1 uppercase mb-1.5">{f.l}</label>
                  <input type={f.t} placeholder={f.p} value={f.v} onChange={(e) => f.s(e.target.value)} required className="w-full border-2 border-gray-100 p-3.5 rounded-xl text-sm bg-gray-50 focus:bg-white outline-none focus:border-[#02c5f6] transition-all font-semibold" />
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <button type="submit" disabled={loading} className="w-full cursor-pointer bg-[#02c5f6] text-white py-4 rounded-xl font-black text-lg hover:bg-[#01a2cc] transition-all shadow-md uppercase">
                  {loading ? "SENDING..." : "SUBMIT REQUEST"}
                </button>
                <button type="button" onClick={() => setStep("search")} className="w-full cursor-pointer text-xs font-bold text-gray-400 uppercase hover:text-[#02c5f6] transition-colors">← Back to Search</button>
              </div>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="p-8 md:p-12 text-center animate-in zoom-in-95 duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-500 rounded-full text-5xl mb-8 shadow-inner">✓</div>
            <h3 className="text-3xl font-black text-gray-800 mb-3 uppercase italic">Thank you!</h3>
            <p className="text-gray-500 font-bold mb-8">Your request has been received. Our team will contact you shortly.</p>

            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 mb-10 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              <span className="font-bold uppercase block mb-2 text-gray-400">Immediate Assistance:</span>
              <a href="tel:+18023550485" className="text-[#02c5f6] font-black text-2xl hover:underline transition-all block">
                +1-802-355-0485
              </a>
            </div>

            <button onClick={resetForm} className="bg-[#02c5f6] cursor-pointer text-white py-4 px-16 rounded-xl font-black text-sm shadow-lg hover:bg-[#01a2cc] transition-all uppercase tracking-widest">
              New Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}