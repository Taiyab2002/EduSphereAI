"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              EduSphere <span className="text-cyan-400">AI</span>
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              AI-powered learning platform designed for students, teachers and
              lifelong learners.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <FaGithub className="cursor-pointer text-slate-400 hover:text-white transition" />

              <FaLinkedin className="cursor-pointer text-slate-400 hover:text-cyan-400 transition" />

              <FaFacebook className="cursor-pointer text-slate-400 hover:text-blue-500 transition" />

              <FaYoutube className="cursor-pointer text-slate-400 hover:text-red-500 transition" />

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          © 2026 EduSphere AI. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}