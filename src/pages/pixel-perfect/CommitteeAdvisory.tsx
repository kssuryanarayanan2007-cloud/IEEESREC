import SectionHeader from "@/components/pixel-perfect/SectionHeader";
import MemberCard from "@/components/pixel-perfect/MemberCard";

const members = [
  { name: "Dr. K. Ramesh", lines: ["Principal Scientist", "ICAR-Central Institute for Cotton Research (CICR) Regional Station, Coimbatore, Tamilnadu"] },
  { name: "Dr. Karthik Seemakurthy", lines: ["Research Scientist", "Hydronium Energies Ltd, London UK"] },
  { name: "Dr. Hareesh Janakiraman", lines: ["Director", "Embedded Guru LLC, USA"] },
  { name: "Dr. R. Gheorghita Ghinea", lines: ["Director R and D", "Brunel University of London, UK"] },
  { name: "Dr. A. R Abdul Rajak", lines: ["Head EEE", "BITS Pilani, Dubai Campus, Dubai"] },
  { name: "Mr. C. Senthilnathan", lines: ["Associate Director", "Virtusa Corporation, USA"] },
  { name: "Mr. Soundararajan Manthiri", lines: ["Sr. Energy Management System Manager", "California, United States"] },
  { name: "Dr. Keerthivasan Krishnamoorthy", lines: ["Professor", "University of Technology and Applied Sciences, Muscat, Sultanate of Oman"] },
  { name: "Dr. Shankar Venugopal", lines: ["Vice President", "Mahindra Research Valley, Chennai"] },
  { name: "Mr. Shekhar Malani", lines: ["Managing Director", "Devise Electronics Pvt. Ltd., Pune"] },
  { name: "Dr. S. Joseph Gladwin", lines: ["Vice-Chairman – Industry", "Associate General Manager, BigCat Wireless Pvt. Ltd., Chennai"] },
  { name: "Dr. Selvakumar Ramasethu", lines: ["Senior PRL Solution Engineer", "Cadence Design System, Bengaluru, India"] },
  { name: "Dr. Paramasivam Shanmugam", lines: ["R & D and Engineering Leader", "ESAB, Danfoss Drives, Chennai"] },
  { name: "Dr. Thanga Raj Chelliah", lines: ["Professor and Head", "Water Resources Development and Management Department, IIT Roorkee, Uttrakhand"] },
  { name: "Dr. R. Venkatesh Babu", lines: ["Professor", "Department of Computational and Data Sciences Indian Institute of Science, Bangalore, Karnataka"] },
  { name: "Dr. Anantha Padmanabha", lines: ["Assistant Professor", "Department of Computer Science and Engineering, IIITM, Chennai, Tamilnadu"] },
  { name: "Dr. Gopalakrishnan Srinivasan", lines: ["Assistant Professor", "Department of Computer Science and Engineering, IIITM, Chennai, Tamilnadu"] },
  { name: "Dr. M. Sabarimalai Manikandan", lines: ["Associate Professor", "IIT Palakad, India"] },
  { name: "Dr. M. Tottappan", lines: ["Associate Professor", "Department of Electrical Engineering, IIT Dharwad"] },
  { name: "Dr. Yadaiah Narri", lines: ["Professor (Retired)", "Department of EEE, JNTU Hyderabad"] },
  { name: "Dr. K. Udhaykumar", lines: ["Associate Professor", "Department of EEE, Anna University, Chennai"] },
];

export default function CommitteeAdvisory() {
  return (
    <div className="container py-10">
      <SectionHeader
        title="Advisory Committee"
        description="The Advisory Committee comprises of experienced professionals, experts, or senior members, to provide strategic advice and guidance for the conference. This committee help shape the event's vision and content while offering insights to maintain its relevance and quality, and supports the organizers in achieving the conference's goals and maintaining its prestige."
      />
      <h3 className="text-xl font-bold text-center text-primary my-8">Committee Members</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {members.map((m) => (
          <MemberCard key={m.name} name={m.name} lines={m.lines} />
        ))}
      </div>
    </div>
  );
}

