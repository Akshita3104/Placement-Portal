import { GraduationCap, FileText, ClipboardCheck, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed">
      <div className="p-4 flex items-center">
        <GraduationCap className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">PlacementPortal</span>
      </div>

      <nav className="mt-6">
        <ul className="space-y-4">
          {/* Resume Main Tab with Sub-Tabs */}
          <li>
            <div className="px-4 py-2 font-semibold text-gray-900">Resume</div>
            <ul className="ml-4 space-y-2">
              <li>
                <Link to="/resume-builder" className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                  <FileText className="h-5 w-5 mr-2" />
                  <span>Builder</span>
                </Link>
              </li>
              <li>
                <Link to="/resume/ats-checker" className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                  <ClipboardCheck className="h-5 w-5 mr-2" />
                  <span>ATS Checker</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
