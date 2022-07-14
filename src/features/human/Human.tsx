import { HumanType } from "./humanSlice";

type HumanPropType = {
  human: HumanType;
};

export const Human = ({ human }: HumanPropType) => {
  return (
    <article className="my-2 px-1 py-2 border-2 border-slate-900 ">
      <h3 className="font-bold text-xl">{human.name}</h3>
    </article>
  );
};
