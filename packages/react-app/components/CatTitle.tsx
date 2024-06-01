export const CatTitle = ({ icon, text }: { icon: string; text: string }) => (
  <section className="flex items-center gap-x-[8px]">
    <img src={icon} alt="" />
    <span className="text-[1rem] text-black-2 leading-[18.75px] font-[600]">
      {text}
    </span>
  </section>
);
