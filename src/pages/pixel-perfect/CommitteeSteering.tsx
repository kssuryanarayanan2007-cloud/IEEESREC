import SectionHeader from "@/components/pixel-perfect/SectionHeader";
import MemberCard from "@/components/pixel-perfect/MemberCard";

const members = [
  { name: "Mr. M. Ganesh", lines: ["Chief Officer", "Industry-Institute Interface"] },
  { name: "Dr. M. Senthamil Selvi", lines: ["Professor and Head", "Department of Information Technology"] },
  { name: "Dr. M. S. Geetha Devasena", lines: ["Professor and Head", "Department of Computer Science Engineering"] },
  { name: "Dr. K. Srinivasan", lines: ["Professor and Head", "Department of Electronics and Instrumentation Engineering"] },
  { name: "Dr. S. Allirani", lines: ["Professor and Head", "Department of Electrical and Electronics Engineering"] },
  { name: "Dr. M. Jagadeeswari", lines: ["Professor and Head", "Department of Electronics and Communication Engineering"] },
  { name: "Dr. N. Sathishkumar", lines: ["Professor and Head", "Department of Bio-Medical Engineering"] },
  { name: "Dr. Moorthi Pichumani", lines: ["Professor and Head", "Department of Nano Science and Technology"] },
];

export default function CommitteeSteering() {
  return (
    <div className="container py-10">
      <SectionHeader
        title="Steering Committee"
        description="The Steering Committee comprises of eminent faculty members responsible for overseeing the planning, execution, and strategic direction of a conference. The committee also provides guidance on key decisions, ensures alignment with the conference's goals, and maintains its quality and reputation over time. This Committee plays a crucial role in shaping the overall success of the event."
      />
      <h3 className="text-xl font-bold text-center text-primary my-8">Committee Members</h3>
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {members.map((m) => (
          <MemberCard key={m.name} name={m.name} lines={m.lines} />
        ))}
      </div>
    </div>
  );
}

