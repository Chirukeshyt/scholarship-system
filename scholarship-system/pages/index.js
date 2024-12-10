import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';

export default function Home({ scholarships }) {
  return (
    <div className='bg-gray-200' >
<Layout>
    
<main className="flex-grow  p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Scholarship System</h1>
      <p className="text-gray-700">
        Apply for scholarships with ease, track your applications, and receive funds—all online!
      </p>

      <Link href='/scholarships'><button type="button" class="text-white  mt-5 bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-lg font-bold rounded-lg text-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
<p className='px-10'>Apply for Scholarship
</p>
</button></Link>
    </main>  
</Layout>
    </div>
  
  );
}
