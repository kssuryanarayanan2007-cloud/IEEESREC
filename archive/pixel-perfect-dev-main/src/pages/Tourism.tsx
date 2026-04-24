import SectionHeader from "@/components/SectionHeader";

const places = [
  { name: "Isha Yoga Center – Dhyanalinga and Adiyogi Statue (Religious site)", img: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80" },
  { name: "Dhyanalinga Temple at the foothills of Velliangiri Mountains (Religious site)", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80" },
  { name: "Marudamalai Temple (Religious site)", img: "https://images.unsplash.com/photo-1609858830923-1a4b6f55b2c5?w=800&q=80" },
  { name: "Kovai Kutralam Water Falls", img: "https://images.unsplash.com/photo-1467890947394-8171244e5410?w=800&q=80" },
  { name: "Brookefields Mall", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80" },
  { name: "Black Thunder Theme Park", img: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800&q=80" },
  { name: "Eachanari Vinayagar Temple (Religious site)", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80" },
  { name: "Kovai Kondattam", img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80" },
  { name: "Horticulture Farms, Kallar, Near Mettupalayam", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
];

const stays = [
  { name: "Ooty Hill Station (Udhagamandalam)", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80" },
  { name: "Coonoor Hill Station", img: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&q=80" },
  { name: "Valparai Hill Station", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" },
  { name: "Kodaikanal Hill Station", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
  { name: "Munnar Hill Station", img: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=800&q=80" },
  { name: "Wayanad", img: "https://images.unsplash.com/photo-1598977123118-4e30ba8c4f29?w=800&q=80" },
];

function PlaceCard({ name, img }: { name: string; img: string }) {
  return (
    <article className="bg-white rounded-md shadow-sm border border-border overflow-hidden hover:shadow-md transition animate-fade-in">
      <img src={img} alt={name} loading="lazy" className="w-full h-40 object-cover" />
      <div className="p-3">
        <p className="text-sm font-semibold text-primary leading-snug">{name}</p>
      </div>
    </article>
  );
}

export default function Tourism() {
  return (
    <div className="container py-10">
      <p className="text-center text-destructive text-sm md:text-base mb-8">
        Half-a-day tour will be arranged to visit nearest site seeing places based on number of participant's registered for tour.
      </p>

      <SectionHeader
        title="About Coimbatore"
        description={
          "Coimbatore, often referred to as the “Manchester of South India”, is a dynamic city in Tamil Nadu, India, known for its industrial prowess, pleasant climate, and cultural heritage. It is a popular destination for conferences and business events, offering excellent infrastructure and connectivity. Coimbatore International Airport connects the city to major Indian cities like Chennai, Bangalore, Mumbai, and Delhi, as well as international destinations like Singapore and Sharjah. Coimbatore Junction is a major railway hub with frequent trains to all parts of India. It is also well connected via National Highways, making it easily accessible by road from nearby cities like Chennai, Bangalore, and Kochi. Coimbatore is widely recognized as an emerging education hub in South India. The city is home to a variety of prestigious educational institutions, spanning schools, colleges, and specialized training centers. It offers a holistic educational environment with a focus on academics, innovation, and industry integration. The ideal time to visit Coimbatore is between September and March, when the weather is pleasant and conducive to travel."
        }
      />

      <h2 className="section-title mt-12 mb-8">Tourist Places</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {places.map((p) => <PlaceCard key={p.name} {...p} />)}
      </div>

      <h2 className="section-title mt-16 mb-8">Weekend Stay</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {stays.map((p) => <PlaceCard key={p.name} {...p} />)}
      </div>
    </div>
  );
}
