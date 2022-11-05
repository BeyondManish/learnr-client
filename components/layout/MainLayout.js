import MainNav from "./MainNav";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNav />
      <main className="h-full pt-20">
        {children}
      </main>
    </>
  );
}