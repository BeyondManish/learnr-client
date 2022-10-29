import MainNav from "./MainNav";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNav />
      <main className="h-full pt-24 md:px-4">
        {children}
      </main>
    </>
  );
}