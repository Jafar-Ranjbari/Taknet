import Footer from "./Footer";

const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const meta = {
    title: "TakNET",
    description: `TakNET is a landing page template built with Nextjs and Tailwindcss`,
    image: "/images/seo/TakNET-banner.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden font-vazir" dir="rtl">
      <main id="skip" className="bg-white dark:bg-neutral-900">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
