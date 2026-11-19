import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
