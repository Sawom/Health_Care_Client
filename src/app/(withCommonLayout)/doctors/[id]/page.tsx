import DoctorDetailsClient from "../components/DoctorDetailsClient";

type PropTypes = {
  params: Promise<{ id: string }>; // type as a promise
};

const DoctorsProfilePage = async ({ params }: PropTypes) => {
  const { id } = await params;

  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor/${id}`,
    { cache: "no-store" },
  );
  const { data: doctor } = await res.json();

  const specialties =
    doctor?.doctorSpecialties?.map((ds: any) => ds.specialties.title) || [];

  // Data fetch kore client component e pathiye dicchi
  return (
    <DoctorDetailsClient
      doctor={doctor}
      specialties={specialties}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default DoctorsProfilePage;
