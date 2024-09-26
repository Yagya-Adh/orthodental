import About from "./About";
import FindersCard from "../../components/finders/FindersCard";

const AboutPage = () => {
  return (
    <>
      <About />
      <div className="bg-light-white10 w-full z-20 flex  p-10 flex-col justify-start font-sans">
        <h1 className="max-w-lg mx-auto text-start font-bold ">
          The International Association of Facial Growth Guidance
          (Orthotropics®)
        </h1>

        <p className="pb-3">
          This association represents all those clinicians and technicians who
          believe that ideal development of the face and jaws is dependent on
          correct ‘oral posture’. Correct posture should be with the tongue
          resting against the palate, with the lips sealed and the teeth in
          light contact for 4 to 8 hours a day. We are committed to improving
          unattractive faces and crowded teeth by guiding the growth of the jaws
          horizontally while the patient is young, by means of appliances
          (Facial Orthotropics), supported by postural training of the tongue,
          lips and cheeks (Oral Myology).
        </p>
        <p className="pb-3">
          Most children start out with attractive faces but if they leave their
          mouths open, their face will grow vertically and they are likely to
          develop into unattractive teenagers with long faces, flat cheeks,
          prominent noses, and protruding front teeth. Alternatively they may
          have the common habit of resting the tongue between the teeth and
          sucking against them when swallowing. This will cause the teeth to
          tilt inwards and crowd, causing the middle of the face to look
          concave. Many types of treatment will straighten teeth but most tend
          to pull them back, necessitating extractions and further reducing room
          for the tongue.
        </p>

        <p className="pb-3">
          Orthotropists believe that this is detrimental to facial development
          and that ideal facial growth together with permanent straightening of
          all the teeth only being achieved if room is provided for the tongue
          and the patient is taught to keep their mouth closed and swallow
          correctly.
        </p>
      </div>
      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default AboutPage;
