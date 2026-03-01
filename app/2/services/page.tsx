import { services } from "@/lib/content/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function V2Services() {
  return (
    <>
      <section className="pt-40 pb-20 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">What We Do</p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight mb-6">
          Every service your<br />community requires.
        </h1>
        <p className="text-stone-500 text-xl max-w-xl leading-relaxed">
          Customized management solutions that scale from small residential HOAs to large Metro Districts with complex infrastructure obligations.
        </p>
      </section>

      <section className="pb-32 max-w-6xl mx-auto px-8">
        <div className="divide-y divide-stone-100">
          {services.map((s, i) => (
            <div key={s.id} className="py-10 grid md:grid-cols-3 gap-8 items-start group">
              <div className="flex items-baseline gap-4">
                <span className="text-stone-200 text-3xl font-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-medium text-stone-900 group-hover:text-emerald-600 transition-colors">
                  {s.title}
                </h3>
              </div>
              <p className="md:col-span-2 text-stone-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light mb-6">Let&apos;s build the right package for your community.</h2>
          <Link
            href="/2/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Request a Proposal <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
