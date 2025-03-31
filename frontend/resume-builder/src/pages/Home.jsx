import React from 'react';
import { FileText, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Career Journey Starts Here
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build your perfect resume and access curated resources to land your dream job.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileText className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Resume Builder</h2>
          <p className="text-gray-600 mb-4">
            Create ATS-friendly resumes and get instant feedback on your resume score.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Resource Library</h2>
          <p className="text-gray-600 mb-4">
            Access interview prep, coding challenges, and career development resources.
          </p>
        </div>
      </div>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-gray-600 italic">
              "The ATS score checker helped me optimize my resume and land interviews at top tech companies!"
            </p>
            <p className="text-gray-900 font-semibold mt-2">- Sarah K., Software Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
