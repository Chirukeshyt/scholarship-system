import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScholarshipCard from "../components/ScholarshipCard";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Layout from "@/components/Layout";

export async function getServerSideProps() {
  const { data: scholarships, error } = await supabase.from('scholarships').select('*');
  
  if (error) {
    console.error(error);
  }

  return { props: { scholarships } };
}

export default function Scholarships({ scholarships }) {
  return (
 <Layout>
     <div className="bg-white">
    <div className="  mx-auto px-4 py-8">
      <h1 className="text-4xl  font-bold text-center">Available Scholarships</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="p-6 border  rounded-md shadow-lg">
            <h2 className="text-xl   font-semibold">Course:- {scholarship.title}</h2>
            <p className="mt-2 ">Description:- {scholarship.description}</p>
            <p className="mt-2  ">Price:- {scholarship.amount}</p>
            <p className="mt-2  ">Eligibility:- {scholarship.eligibility}</p>
            <Link href={`/apply/${scholarship.id}`}>
              <p className="mt-4 inline-block text-blue-500 hover:underline">Apply Now</p>
            </Link>
          </div>
        ))}
      </div>
    </div>

    </div>
 </Layout>
  
  );
}
