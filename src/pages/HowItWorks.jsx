import chooseTemplate from '../assets/images/chooseTemplate.png';
import customizeDetails from '../assets/images/customizeDetails.png';
import recipientDetails from "../assets/images/recipientDetails.png"
import shareDetails from "../assets/images/share.png"



const HowItWorks = ({ id }) => {
  const steps = [
    {
      number: "1",
      title: "Step 1 → Choose a Template",
      description: "Pick your favorite wedding invite.",
      color: "bg-blue-100",
      image: chooseTemplate,
    },
    {
      number: "2",
      title: "Step 2 → Customize Your Details",
      description: "Add bride, groom, venue & date.",
      color: "bg-orange-200",
      image: customizeDetails,
    },
    {
      number: "3",
      title: "Step 3 → Add Recipients",
      description: "Enter guest names & phone numbers.",
      color: "bg-orange-200",
      image: recipientDetails,
    },
    {
      number: "4",
      title: "Step 4 → Download or Share",
      description: "Send via WhatsApp or download.",
      color: "bg-blue-100",
      image: shareDetails,
    },
  ];

  return (
    <section className="py-16 px-4 bg-pink-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-rose-700 mb-12">
        HOW IT WORKS?
      </h2>

      <div className="grid sm:grid-cols-2 gap-10 max-w-6xl mx-auto" id={id}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.color} p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-4 transition hover:shadow-xl`}
          >
            {/* Circle Number */}
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shrink-0">
              {step.number}
            </div>

            {/* Text + Image */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-rose-800">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>

            <img
              src={step.image}
              alt={step.title}
              className="w-24 h-auto rounded-lg border border-white shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
