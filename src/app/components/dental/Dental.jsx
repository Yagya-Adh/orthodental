import doctorOne from "../../assets/doctorOne.jpg";
import doctorTwo from "../../assets/doctorTwo.jpg";

const doctors = [
  { id: 1, name: "Dr. Victor Avis explains Orthotropics", image: doctorOne },
  {
    id: 2,
    name: "Orthotropics by Indianapolis dentists Dr. Marla Wilson & Dr. Gordon Klockow",
    image: doctorTwo,
  },
];

const Dental = () => {
  return (
    <div className="bg-[#304E5E]  ">
      <p className="text-[white] text-center text-2xl font-semibold my-2 leading-6">
        Dental practitioners on Orthotropics
      </p>

      <div className="flex justify-center h-[208px]">
        {doctors?.map((doctor) => (
          <div className="mx-4 my-4" key={doctor.id}>
            <img src={doctor.image} alt="" className="rounded-3xl " />
            <h3 className="text-center font-semibold text-[white] size-[6] leading-6 max-w-sm mx-auto">
              {doctor.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dental;
