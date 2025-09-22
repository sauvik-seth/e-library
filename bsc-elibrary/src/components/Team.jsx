import React from "react";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const members = [
  { name: "jit Paul", role: "B.Sc Computer Science Student", image: "/images/jit.webp" },
  { name: "Sauvik Seth", role: "B.Sc Computer Science Student", image: "/images/sauvik.webp" },
  { name: "Suman Mandal", role: "B.Sc Computer Science Student", image: "/images/suman.webp" },
  { name: "Plabon Mandal", role: "B.Sc Computer Science Student", image: "/images/plaban.webp" },
  { name: "Supriya Mandal", role: "B.Sc Computer Science Student", image: "/images/supriya.webp" },
  { name: "Biswajit Chowdhury", role: "B.Sc Computer Science Student", image: "/images/biswajit.png" },
];

const Card = ({ m }) => {
  return (
    <article
      className="group relative rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/5
                 shadow-sm transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-2xl hover:ring-black/10"
    >
      {/* gradient glow behind on hover */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20" />
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={m.image}
          alt={m.name}
          className="h-72 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="relative px-5 py-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{m.role}</p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <a aria-label="Twitter/X" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow hover:bg-gray-200 transition">
            <FaXTwitter />
          </a>
          <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow hover:bg-gray-200 transition">
            <FaLinkedin />
          </a>
          <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow hover:bg-gray-200 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </article>
  );
};

const Team = () => (
  <section className="py-20">
    {/* soft section background */}
    <div className="mx-auto max-w-7xl px-4">
      <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-8 sm:p-12 ring-1 ring-black/5">
        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/0 via-black/0 to-white/0" />

        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#1f2937",
            margin: "0 0 3rem 0",
          }}
        >
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Team
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <Card key={i} m={m} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Team;
