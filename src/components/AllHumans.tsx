import { useAppSelector } from "../app/hooks";
import { Human } from "../features/human/Human";
import { CreateHuman } from "./CreateHuman";

export const AllHumans = () => {
  const humans = useAppSelector((state) => state.humans);

  return (
    <section className="w-full">
      <h2 className="font-bold text-3xl text-center">Humans</h2>

      <CreateHuman />

      <div className="mt-5">
        {humans.map((_human) => {
          return <Human human={_human} key={_human.id}></Human>;
        })}
      </div>
    </section>
  );
};
