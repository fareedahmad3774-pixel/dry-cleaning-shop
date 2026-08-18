import { PRICING_DATA } from "../types";
import { Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 md:px-6 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Price List</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Professional cleaning and pressing services at fair, transparent rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-50 rounded-xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.name}</h3>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {item.pressOnly && (
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-50 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                      <Check className="w-4 h-4 text-cyan-600" />
                      <span>Press Only</span>
                    </div>
                    <span className="text-lg font-bold text-slate-900">{item.pressOnly} Rs</span>
                  </div>
                )}
                {item.washAndPress && (
                  <div className="flex items-center justify-between p-4 bg-cyan-50/50 rounded-xl border border-cyan-50 hover:border-cyan-100 transition-colors">
                    <div className="flex items-center gap-2 text-cyan-700 font-bold text-sm">
                      <Check className="w-4 h-4 text-cyan-600" />
                      <span>Wash & Press</span>
                    </div>
                    <span className="text-lg font-bold text-cyan-700">{item.washAndPress} Rs</span>
                  </div>
                )}
              </div>

              {item.description && (
                <div className="flex items-center justify-center gap-2 px-3 py-1 bg-slate-100 rounded-full w-fit mx-auto">
                   <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-pulse" />
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">
                     {item.description}
                   </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
