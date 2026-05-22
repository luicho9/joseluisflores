import { ArrowRight } from "./icons";

export function Education() {
  return (
    <section className="flex flex-col mt-12">
      <div className="border-b py-2">
        <h2 className="font-bold">Education</h2>
      </div>
      <div className="mt-4">
        <div className="flex justify-between w-full">
          <h2>
            <span className="sm:hidden">UNICAH</span>
            <span className="hidden sm:inline">
              Universidad Católica de Honduras
            </span>
          </h2>
          <p className="text-primary/80 flex items-center gap-1 text-nowrap">
            Sep 2022 <ArrowRight /> Jul 2026
          </p>
        </div>
        <p className="text-primary/80">Computer Science Engineering</p>
        <p className="mt-1 text-sm text-primary/60">Summa Cum Laude.</p>
      </div>
    </section>
  );
}
