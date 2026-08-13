import SupportHeader from "./components/SupportHeader";
import QuickHelp from "./components/QuickHelp";
import FAQ from "./components/FAQ";
import SupportForm from "./components/SupportForm";
import SupportFooter from "./components/SupportFooter";

export default function Support() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#EFE1D1] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <SupportHeader />

        <QuickHelp />

        <div className="grid gap-8 rounded-3xl bg-[#432E1A] p-6 shadow-xl md:p-8 lg:grid-cols-2">
          <FAQ />
          <SupportForm />
        </div>

        <SupportFooter />
      </div>
    </div>
  );
}