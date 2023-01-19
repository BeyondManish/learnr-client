import MainNav from "./MainNav";

export default function MainLayout({ showSearch, children }) {
  return (
    <>
      <MainNav showSearch={showSearch} />
      <main className="h-full pt-20">
        {children}
      </main>
    </>
  );
}