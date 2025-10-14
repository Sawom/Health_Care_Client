const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
          About Our ARS Health Care
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Welcome to
          <span className="font-semibold mx-2 text-blue-600">ARS Health Care</span>,
          a trusted name in modern healthcare and medical excellence. Our
          mission is to deliver compassionate, world-className treatment to
          patients with care, respect, and integrity. We combine advanced
          technology, experienced professionals, and patient-centered service to
          ensure the best medical outcomes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 ">
        {/* <!-- Neurology --> */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl text-center font-semibold text-blue-700 mb-3">
            Neurology
          </h3>
          <p className="text-gray-600">
            Our Neurology department provides expert diagnosis and treatment for
            brain, spinal cord, and nerve disorders. We specialize in stroke
            management, epilepsy, migraine therapy, and neuro-rehabilitation.
          </p>
        </div>

        {/* <!-- Cardiology --> */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl text-center font-semibold text-blue-700 mb-3">
            Cardiology
          </h3>
          <p className="text-gray-600">
            The Cardiology team focuses on heart health with advanced cardiac
            diagnostics, intervention, and rehabilitation. From preventive care
            to complex heart surgeries, we ensure every heartbeat counts.
          </p>
        </div>

        {/* <!-- Urology --> */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl text-center font-semibold text-blue-700 mb-3">
            Urology
          </h3>
          <p className="text-gray-600">
            Our Urology experts provide advanced care for urinary tract, kidney,
            and prostate conditions using minimally invasive surgical techniques
            for faster recovery and better results.
          </p>
        </div>

        {/* <!-- Orthopedic --> */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl text-center font-semibold text-blue-700 mb-3">
            Orthopedic
          </h3>
          <p className="text-gray-600">
            The Orthopedic department offers comprehensive care for bone, joint,
            and muscle disorders. From fracture repair to joint replacement, we
            help patients regain mobility and strength.
          </p>
        </div>

        {/* <!-- Dentist --> */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl  text-center font-semibold text-blue-700 mb-3">
            Dentistry
          </h3>
          <p className="text-gray-600">
            Our Dental care unit provides complete oral health solutions
            including cosmetic dentistry, orthodontics, and oral surgery —
            ensuring healthy and confident smiles.
          </p>
        </div>

        {/* <!-- Ophthalmology --> */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl text-center font-semibold text-blue-700 mb-3">
            Ophthalmology
          </h3>
          <p className="text-gray-600">
            The Ophthalmology department specializes in advanced eye care
            including cataract surgery, glaucoma management, and vision
            correction with the latest laser technology.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6  mt-16">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to make quality healthcare accessible to everyone
          through innovation, expertise, and compassion. We envision a healthier
          future where every patient receives personalized, safe, and affordable
          medical care.
        </p>
      </div>
      {/* Quality Policy */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Quality Policy
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          At
          <span className="font-semibold text-blue-600 mx-2">
            ARS Health Care
          </span>
          , we are committed to maintaining the highest standards of medical
          excellence and patient safety. Our Quality Policy is designed to
          ensure continuous improvement, accountability, and patient
          satisfaction.
        </p>

        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-3 leading-relaxed">
          <li>
            <span className="font-semibold">Patient-Centered Care:</span>
            Deliver compassionate, respectful, and personalized healthcare that
            meets each patient’s individual needs.
          </li>
          <li>
            <span className="font-semibold">Clinical Excellence:</span>
            Ensure the highest standards of clinical practice through skilled
            professionals, modern technology, and evidence-based medicine.
          </li>
          <li>
            <span className="font-semibold">Continuous Improvement:</span>
            Regularly review and enhance our processes, systems, and outcomes to
            achieve better efficiency and effectiveness.
          </li>
          <li>
            <span className="font-semibold">Safety & Compliance:</span>
            Adhere strictly to national and international healthcare regulations
            to maintain a safe and hygienic environment.
          </li>
          <li>
            <span className="font-semibold">Training & Development:</span>
            Promote continuous professional growth of all staff members through
            education, training, and skill development.
          </li>
          <li>
            <span className="font-semibold">Innovation & Technology:</span>
            Incorporate advanced medical technologies and digital systems to
            enhance service quality and patient experience.
          </li>
          <li>
            <span className="font-semibold">Ethical Standards:</span>
            Uphold integrity, confidentiality, and transparency in all medical
            and administrative operations.
          </li>
          <li>
            <span className="font-semibold">Feedback & Accountability:</span>
            Value patient feedback and take prompt corrective actions to
            continuously improve our quality of care.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default AboutUs;
