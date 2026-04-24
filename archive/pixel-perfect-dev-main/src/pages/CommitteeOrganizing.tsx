import SectionHeader from "@/components/SectionHeader";
import MemberCard from "@/components/MemberCard";

const groups: { title: string; members: { name: string; lines: string[] }[] }[] = [
  {
    title: "Patron",
    members: [
      { name: "Thiru. R. Sundar", lines: ["Managing Trustee", "SNR Sons Charitable Trust, Coimbatore"] },
      { name: "Thiru. S. Narendran", lines: ["Joint Managing Trustee", "SNR Sons Charitable Trust, Coimbatore"] },
    ],
  },
  {
    title: "General Chairs",
    members: [
      { name: "Dr. A. Soundarrajan", lines: ["Principal", "Sri Ramakrishna Engineering College"] },
      { name: "Dr. P. Sakthivel", lines: ["IEEE Madras Section & Professor,", "Department of ECE", "Anna University Chennai."] },
    ],
  },
  {
    title: "Conference Chair",
    members: [
      { name: "Dr. R. Shanmugasundaram", lines: ["Organizing Secretary", "Professor – EEE"] },
    ],
  },
  {
    title: "Session Chair",
    members: [
      { name: "Dr. N. Sathish Kumar", lines: ["Professor – ECE"] },
    ],
  },
  {
    title: "Members",
    members: [
      { name: "Mrs. N. Divya", lines: ["Asst. Prof. (Sr.G) – EEE"] },
      { name: "Mrs. R. Kiruba", lines: ["Asst. Prof. (Sr. G) – EIE"] },
      { name: "Dr. S. P. Vimal", lines: ["Asso. Prof. – ECE"] },
      { name: "Dr. J. Selva Kumar", lines: ["Professor – CSE"] },
      { name: "Mrs. R. Rajalakshmi", lines: ["Asst. Prof. (OG) – IT"] },
      { name: "Mrs. G. Lavanya", lines: ["Asst. Prof. (Sr.G) – BME"] },
    ],
  },
  {
    title: "Finance Chair",
    members: [
      { name: "Dr. M. Vijayakumar", lines: ["Professor – EEE"] },
    ],
  },
];

export default function CommitteeOrganizing() {
  return (
    <div className="container py-10">
      <SectionHeader
        title="Organizing Committee"
        description="The Organizing Committee comprises of distinguished faculty members from various departments, responsible for managing the logistical and operational aspects of a conference. They work under the guidance of the Steering Committee to ensure the smooth execution of the event. This Committee ensures that the conference runs efficiently and delivers a positive experience for all participants."
      />

      {groups.map((g) => (
        <section key={g.title} className="my-10 border-t border-border pt-8">
          <h3 className="text-xl font-bold text-center text-primary mb-6">{g.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {g.members.map((m) => (
              <MemberCard key={m.name} name={m.name} lines={m.lines} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
