// fetched only three doctor's data
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import Image from "next/image";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  //   console.log(doctors);

  return (
    <section
      className="relative my-10 py-20 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)", // polygon background design
      }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Our Top Rated Doctors
        </h1>
        <p className="text-base sm:text-lg mt-2">
          Access to expert physicians and surgeons, advanced technologies
        </p>
        <p className="text-base sm:text-lg">
          and top-quality surgery facilities right here.
        </p>
      </div>

      {/* Grid with tailwind */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor: any) => (
          <Card
            key={doctor.id}
            className="rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={doctor.profilePhoto}
                alt="doctor"
                fill
                className="object-cover"
              />
            </div>
            <CardContent>
              <h2 className="text-lg sm:text-xl font-semibold">
                {doctor.name}
              </h2>
              <p className="text-sm text-gray-600">
                {doctor.qualification}, {doctor.designation}
              </p>
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                <LocationOnIcon fontSize="small" /> {doctor.address}
              </p>
            </CardContent>
            <CardActions className="flex justify-between px-4 pb-4 mt-auto">
              <Button size="small" variant="contained">
                Book Now
              </Button>
              <Button size="small" variant="outlined">
                View Profile
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-10">
        <Button variant="outlined">View ALL</Button>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
