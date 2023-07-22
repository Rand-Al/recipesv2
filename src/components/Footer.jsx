const Footer = () => {
  return (
    <footer className="py-4 bg-slate-800 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-black underline">Beer Recipes</div>
        <div className="font-bold">{new Date().getFullYear()} y.</div>
        <div className="font-bold">Vit Poll</div>
      </div>
    </footer>
  );
};

export default Footer;
