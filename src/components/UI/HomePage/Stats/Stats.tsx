"use client";

import { Container } from "@mui/material";

const Stats = () => {
  return (
    <Container>
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mx-auto my-12 px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-medium text-white">
              180+
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Expert Doctors
            </h2>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-medium text-white">26+</h1>
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Expert Services
            </h2>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-medium text-white">
              10K+
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Happy Patients
            </h2>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-medium text-white">
              150+
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Best Award Winners
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stats;
