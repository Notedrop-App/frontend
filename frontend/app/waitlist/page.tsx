import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[#f5f1ed] flex flex-col items-center">
      <div className="flex items-center justify-center mt-5">
        <Header />
      </div>
      <section className="max-w-96 py-32 text-center space-y-2">
        <p className="text-5xl font-semibold text-[#37322f]">Join Waitlist.</p>
        <p className="text-lg font-normal text-[#37322f]">
          Be the first to known when we launch Notedrop.
        </p>
        <Input
          type="email"
          placeholder="Email Address"
          className="h-9"
          id="email-input"
        />
        <Button className="w-full h-9 px-8 bg-[#37322f]">Join Waitlist</Button>
      </section>
    </div>
  );
}
