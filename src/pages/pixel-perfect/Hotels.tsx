import SectionHeader from "@/components/pixel-perfect/SectionHeader";

const luxury = [
  { name: "Vivanta, Race Course Road, Coimbatore", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { name: "The Residency Towers, Avinashi Road Coimbatore", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" },
  { name: "Le Meridien, Neelambur, Coimbatore", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80" },
  { name: "Radisson Blu, Avinashi Road Coimbatore", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80" },
  { name: "Hash Six Hotel, Saibaba Colony, Coimbatore", img: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80" },
  { name: "Lemon Tree Hotel, Coimbatore", img: "https://images.unsplash.com/photo-1520260497591-112f2f40a3f4?w=800&q=80" },
];

const midRange = [
  { name: "Hotel CAG Pride, Gandhipuram, Coimbatore", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80" },
  { name: "City Tower, Gandhipuram, Coimbatore", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80" },
  { name: "Hotel Alankar, Gandhipuram, Coimbatore", img: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80" },
  { name: "Fairfield by Marriott, Avinashi Road, Coimbatore", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" },
  { name: "Welcomhotel, ITC Hotels, Race Course, Coimbatore", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80" },
  { name: "Hotel KISCOL Grands, Ramnagar, Coimbatore", img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80" },
  { name: "Rathna Residency, Town Hall, Coimbatore", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" },
  { name: "Hotel Vijay Park Inn, Ramnagar, Coimbatore", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80" },
];

const budget = [
  { name: "Hotel Annapoorna, Gandhipuram, Coimbatore", img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80" },
  { name: "Hotel SVM Grand, RS Puram, Coimbatore", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80" },
  { name: "Hotel Sree Annapoorna Lodging, Gandhipuram", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80" },
];

function HotelCard({ name, img }: { name: string; img: string }) {
  return (
    <article className="bg-white rounded-md shadow-sm border border-border overflow-hidden hover:shadow-md transition animate-fade-in">
      <img src={img} alt={name} loading="lazy" className="w-full h-44 object-cover" />
      <div className="p-3">
        <p className="text-sm font-semibold text-primary leading-snug">{name}</p>
      </div>
    </article>
  );
}

export default function Hotels() {
  return (
    <div className="container py-10">
      <SectionHeader
        title="Hotels For Stay"
        description="Participants are requested to book the accommodation well in advance through online booking. Some of the best hotels are listed below."
      />

      <h3 className="text-xl font-bold text-center text-primary my-8">Luxury Hotels</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {luxury.map((h) => <HotelCard key={h.name} {...h} />)}
      </div>

      <h3 className="text-xl font-bold text-center text-primary mt-16 mb-8">Mid-Range Hotels</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {midRange.map((h) => <HotelCard key={h.name} {...h} />)}
      </div>

      <h3 className="text-xl font-bold text-center text-primary mt-16 mb-8">Budget-Friendly Hotels</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {budget.map((h) => <HotelCard key={h.name} {...h} />)}
      </div>
    </div>
  );
}

