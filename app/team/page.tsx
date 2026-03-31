"use client";

import { Header } from "@/components/ui/header";
import { LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";

export default function TeamPage() {
  const team = [
    {
      name: "Bartosz Krawczyk",
      role: "CEO & Founder",
      bio: "Student & Software Developer passionate about making learning accessible.",
      image: "/skulix.png",
      featured: true,
    },
  ];

  const featuredMembers = team.filter((member) => member.featured);
  const regularMembers = team.filter((member) => !member.featured);

  return (
    <div className="w-full min-h-screen bg-[#f5f1ed]">
      <div className="flex items-center justify-center mt-5">
        <Header />
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                style={{ color: "#37322f" }}
              >
                Meet Our Team
              </h1>
              <p
                className="mx-auto max-w-[700px] text-lg md:text-xl"
                style={{ color: "#37322f", opacity: 0.8 }}
              >
                The passionate people building the future of learning
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          {featuredMembers.length > 0 && (
            <div className="flex justify-center mb-16">
              <div className="flex justify-center gap-8 flex-wrap max-w-3xl">
                {featuredMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div
                      className="relative w-48 h-48 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#f5f3f0" }}
                    >
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: "#37322f" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#37322f", opacity: 0.7 }}
                      >
                        {member.role}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "#37322f", opacity: 0.8 }}
                      >
                        {member.bio}
                      </p>
                      <div className="flex justify-center gap-3 pt-2">
                        <a
                          href="#"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <LinkedinLogoIcon
                            className="w-7 h-7"
                            style={{ color: "#37322f" }}
                          />
                        </a>
                        <a
                          href="#"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <XLogoIcon
                            className="w-7 h-7"
                            style={{ color: "#37322f" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {regularMembers.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div
                    className="relative w-48 h-48 rounded-full overflow-hidden"
                    style={{ backgroundColor: "#f5f3f0" }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#37322f" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#37322f", opacity: 0.7 }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#37322f", opacity: 0.8 }}
                    >
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      <a
                        href="#"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <LinkedinLogoIcon
                          className="w-7 h-7"
                          style={{ color: "#37322f" }}
                        />
                      </a>
                      <a
                        href="#"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <XLogoIcon
                          className="w-7 h-7"
                          style={{ color: "#37322f" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
