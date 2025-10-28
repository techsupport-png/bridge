'use client';

import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, MapPin, GraduationCap, DollarSign, BookOpen, Users, Award, Filter, Loader2, TrendingUp, DollarSign as AffordableIcon } from 'lucide-react';

// Interface defining the structure for a college object
interface College {
  id: number;
  name: string;
  location: string;
  type: string;
  image: string;
  tuition: string;
  acceptance: string;
  students: string;
  requirements: {
    gpa: string;
    sat: string;
    act: string;
    toefl: string;
    essays: string;
    recommendations: string;
  };
  programs: string[];
  popular: boolean;
  affordable: boolean;
}

// API Response type from Hipolabs Universities API
interface UniversityApiResponse {
  name: string;
  country: string;
  'state-province'?: string;
  domains?: string[];
  web_pages?: string[];
}

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [expandedCollege, setExpandedCollege] = useState<number | null>(null);
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterBy, setFilterBy] = useState('all'); // 'all', 'popular', 'affordable', 'both'
  const [apiError, setApiError] = useState(false);

  // Load college data
  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      // Using curated college data for reliability
      console.log('Loading college data...');
      
      // Curated college data
        const fallbackData: College[] = [
          {
            id: 1,
            name: "Harvard University",
            location: "Cambridge, MA, United States",
            type: "Private",
            image: "/img/harvard.webp",
            tuition: "$54,002/year",
            acceptance: "3.4%",
            students: "23,000",
            requirements: { gpa: "4.0", sat: "1460-1580", act: "33-35", toefl: "100+", essays: "Required", recommendations: "3 Letters" },
            programs: ["Business", "Law", "Medicine", "Engineering"],
            popular: true,
            affordable: false
          },
          {
            id: 2,
            name: "Stanford University",
            location: "Stanford, CA, United States",
            type: "Private",
            image: "/img/stanford.webp",
            tuition: "$56,169/year",
            acceptance: "3.7%",
            students: "17,000",
            requirements: { gpa: "3.9", sat: "1440-1570", act: "32-35", toefl: "100+", essays: "Required", recommendations: "2-3 Letters" },
            programs: ["Computer Science", "Engineering", "Business", "Medicine"],
            popular: true,
            affordable: false
          },
          {
            id: 3,
            name: "MIT",
            location: "Cambridge, MA, United States",
            type: "Private",
            image: "/img/mit.jpg",
            tuition: "$53,790/year",
            acceptance: "4.1%",
            students: "11,500",
            requirements: { gpa: "4.0", sat: "1500-1570", act: "34-36", toefl: "90+", essays: "Required", recommendations: "2 Letters" },
            programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
            popular: true,
            affordable: false
          },
          {
            id: 4,
            name: "University of California, Berkeley",
            location: "Berkeley, CA, United States",
            type: "Public",
            image: "/img/ucberkley.jpg",
            tuition: "$44,115/year",
            acceptance: "14.5%",
            students: "45,000",
            requirements: { gpa: "3.8", sat: "1330-1530", act: "29-34", toefl: "80+", essays: "Required", recommendations: "Optional" },
            programs: ["Engineering", "Business", "Computer Science", "Environmental Science"],
            popular: true,
            affordable: true
          },
          {
            id: 5,
            name: "Yale University",
            location: "New Haven, CT, United States",
            type: "Private",
            image: "/img/yale.jpeg",
            tuition: "$59,950/year",
            acceptance: "4.6%",
            students: "14,500",
            requirements: { gpa: "4.0", sat: "1460-1580", act: "33-35", toefl: "100+", essays: "Required", recommendations: "3 Letters" },
            programs: ["Law", "Medicine", "Arts", "Political Science"],
            popular: true,
            affordable: false
          },
          {
            id: 6,
            name: "University of Oxford",
            location: "Oxford, United Kingdom",
            type: "Public",
            image: "/img/oxford.jpeg",
            tuition: "£9,250/year",
            acceptance: "17.5%",
            students: "24,000",
            requirements: { gpa: "3.9", sat: "Not Required", act: "Not Required", toefl: "100+", essays: "Required", recommendations: "2 Letters" },
            programs: ["Philosophy", "Medicine", "Law", "Literature"],
            popular: true,
            affordable: true
          },
          {
            id: 7,
            name: "University of Cambridge",
            location: "Cambridge, United Kingdom",
            type: "Public",
            image: "/img/cambridge.jpg",
            tuition: "£9,250/year",
            acceptance: "21%",
            students: "19,500",
            requirements: { gpa: "3.9", sat: "Not Required", act: "Not Required", toefl: "110+", essays: "Required", recommendations: "2 Letters" },
            programs: ["Mathematics", "Sciences", "Engineering", "Medicine"],
            popular: true,
            affordable: true
          },
          {
            id: 8,
            name: "University of Toronto",
            location: "Toronto, Canada",
            type: "Public",
            image: "/img/toronto.jpeg",
            tuition: "CAD $6,100/year",
            acceptance: "43%",
            students: "95,000",
            requirements: { gpa: "3.6", sat: "1300-1500", act: "28-32", toefl: "89+", essays: "Required", recommendations: "1-2 Letters" },
            programs: ["Business", "Medicine", "Engineering", "Arts"],
            popular: true,
            affordable: true
          },
          {
            id: 9,
            name: "McGill University",
            location: "Montreal, Canada",
            type: "Public",
            image: "/img/mcgill.jpg",
            tuition: "CAD $8,000/year",
            acceptance: "46%",
            students: "40,000",
            requirements: { gpa: "3.7", sat: "1400-1520", act: "30-34", toefl: "86+", essays: "Optional", recommendations: "Optional" },
            programs: ["Medicine", "Law", "Engineering", "Sciences"],
            popular: true,
            affordable: true
          },
          {
            id: 10,
            name: "ETH Zurich",
            location: "Zurich, Switzerland",
            type: "Public",
            image: "/img/zurich.jpeg",
            tuition: "CHF 1,460/year",
            acceptance: "27%",
            students: "24,500",
            requirements: { gpa: "3.8", sat: "1400-1500", act: "Not Required", toefl: "100+", essays: "Required", recommendations: "2 Letters" },
            programs: ["Engineering", "Computer Science", "Physics", "Architecture"],
            popular: true,
            affordable: true
          },
          {
            id: 11,
            name: "Technical University of Munich",
            location: "Munich, Germany",
            type: "Public",
            image: "/img/munich.jpeg",
            tuition: "€129/semester",
            acceptance: "8%",
            students: "48,000",
            requirements: { gpa: "3.7", sat: "Not Required", act: "Not Required", toefl: "88+", essays: "Required", recommendations: "1-2 Letters" },
            programs: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"],
            popular: true,
            affordable: true
          },
          {
            id: 12,
            name: "Sorbonne University",
            location: "Paris, France",
            type: "Public",
            image: "/img/sorbonne.jpeg",
            tuition: "€170/year",
            acceptance: "13%",
            students: "55,000",
            requirements: { gpa: "3.5", sat: "Not Required", act: "Not Required", toefl: "80+", essays: "Required", recommendations: "2 Letters" },
            programs: ["Arts", "Humanities", "Sciences", "Medicine"],
            popular: true,
            affordable: true
          },
          {
            id: 13,
            name: "University of Oslo",
            location: "Oslo, Norway",
            type: "Public",
            image: "/img/oslo.jpg",
            tuition: "Free (EU)",
            acceptance: "30%",
            students: "27,000",
            requirements: { gpa: "3.5", sat: "Not Required", act: "Not Required", toefl: "90+", essays: "Optional", recommendations: "Optional" },
            programs: ["Engineering", "Medicine", "Sciences", "Humanities"],
            popular: false,
            affordable: true
          },
          {
            id: 14,
            name: "University of Helsinki",
            location: "Helsinki, Finland",
            type: "Public",
            image: "/img/helsinki.jpg",
            tuition: "Free (EU)",
            acceptance: "28%",
            students: "32,000",
            requirements: { gpa: "3.6", sat: "Not Required", act: "Not Required", toefl: "90+", essays: "Optional", recommendations: "Optional" },
            programs: ["Education", "Sciences", "Humanities", "Law"],
            popular: false,
            affordable: true
          },
          {
            id: 15,
            name: "University of Vienna",
            location: "Vienna, Austria",
            type: "Public",
            image: "/img/vienna.jpg",
            tuition: "€1,500/year",
            acceptance: "32%",
            students: "90,000",
            requirements: { gpa: "3.4", sat: "Not Required", act: "Not Required", toefl: "75+", essays: "Optional", recommendations: "Optional" },
            programs: ["Arts", "Sciences", "Business", "Law"],
            popular: false,
            affordable: true
          }
        ];

      setColleges(fallbackData);
      setLoading(false);
    };

    fetchColleges();
  }, []);

  // Filter and sort colleges
  const filteredColleges = useMemo(() => {
    let filtered = colleges;

    // Apply Popular/Affordable filter
    if (filterBy === 'popular') {
      filtered = filtered.filter(college => college.popular);
    } else if (filterBy === 'affordable') {
      filtered = filtered.filter(college => college.affordable);
    } else if (filterBy === 'both') {
      filtered = filtered.filter(college => college.popular && college.affordable);
    }

    // Search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(lowercasedTerm) ||
        college.location.toLowerCase().includes(lowercasedTerm) ||
        college.programs.some(program => program.toLowerCase().includes(lowercasedTerm))
      );
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(college => college.type === selectedType);
    }

    // Location filter
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(college => college.location.includes(selectedLocation));
    }

    // Sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'acceptance') return parseFloat(a.acceptance) - parseFloat(b.acceptance);
      if (sortBy === 'tuition') {
        const tuitionA = parseInt(a.tuition.replace(/[^0-9]/g, ''), 10) || 0;
        const tuitionB = parseInt(b.tuition.replace(/[^0-9]/g, ''), 10) || 0;
        return tuitionA - tuitionB;
      }
      return 0;
    });

    return sorted;
  }, [colleges, filterBy, searchTerm, selectedType, selectedLocation, sortBy]);

  return (
    <>
      <Head>
        <title>Find Colleges - Bridge Bound Academics</title>
        <meta name="description" content="Explore universities worldwide with live data from our college database" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <section className="bg-gradient-to-r from-orange-100 to-yellow-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Discover Your Perfect College
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Browse {colleges.length}+ universities worldwide with live data from our database
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Popular/Affordable Quick Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setFilterBy('all')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterBy === 'all'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="inline w-4 h-4 mr-1" />
                All Colleges
              </button>
              <button
                onClick={() => setFilterBy('popular')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterBy === 'popular'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <TrendingUp className="inline w-4 h-4 mr-1" />
                Popular
              </button>
              <button
                onClick={() => setFilterBy('affordable')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterBy === 'affordable'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AffordableIcon className="inline w-4 h-4 mr-1" />
                Affordable
              </button>
              <button
                onClick={() => setFilterBy('both')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filterBy === 'both'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Award className="inline w-4 h-4 mr-1" />
                Popular & Affordable
              </button>
            </div>

            {/* API Error Notice */}
            {apiError && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Showing curated university data. Live API temporarily unavailable.
                </p>
              </div>
            )}

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by college, location, or program..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-orange-400 transition-colors text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="college-type" className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="inline w-4 h-4 mr-1" />
                  College Type
                </label>
                <select
                  id="college-type"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-900 font-semibold"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Location
                </label>
                <select
                  id="location"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-900 font-semibold"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="United States">USA</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Japan">Japan</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="China">China</option>
                  <option value="Poland">Poland</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Norway">Norway</option>
                  <option value="Finland">Finland</option>
                  <option value="Spain">Spain</option>
                  <option value="Austria">Austria</option>
                </select>
              </div>

              <div>
                <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="inline w-4 h-4 mr-1" />
                  Sort By
                </label>
                <select
                  id="sort-by"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-900 font-semibold"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="acceptance">Acceptance Rate (Lowest)</option>
                  <option value="tuition">Tuition (Lowest)</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredColleges.length} of {colleges.length} colleges
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
              <span className="ml-4 text-gray-600">Loading colleges from live database...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {filteredColleges.length > 0 ? (
                filteredColleges.map((college) => (
                  <div key={college.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={college.image}
                        alt={`Campus of ${college.name}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/img/hero-banner.png';
                        }}
                      />
                      <div className="absolute top-4 right-4 flex gap-2 flex-wrap">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {college.type}
                        </span>
                        {college.popular && (
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                          </span>
                        )}
                        {college.affordable && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Affordable
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{college.name}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        <span className="text-sm">{college.location}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <DollarSign className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Tuition</div>
                          <div className="text-sm font-semibold text-gray-900">{college.tuition}</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <Award className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Acceptance</div>
                          <div className="text-sm font-semibold text-gray-900">{college.acceptance}</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <Users className="w-5 h-5 text-green-500 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Students</div>
                          <div className="text-sm font-semibold text-gray-900">{college.students}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
                          <h4 className="text-sm font-semibold text-gray-700">Popular Programs</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {college.programs.map((program) => (
                            <span key={program} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setExpandedCollege(expandedCollege === college.id ? null : college.id)}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        <GraduationCap className="w-5 h-5 mr-2" />
                        {expandedCollege === college.id ? 'Hide' : 'View'} Admission Requirements
                      </button>

                      {expandedCollege === college.id && (
                        <div className="mt-4 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-200">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-orange-500" />
                            Minimum Requirements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div className="bg-white p-3 rounded-lg border border-orange-100">
                              <span className="font-semibold text-gray-700">GPA:</span>
                              <span className="ml-2 text-gray-900">{college.requirements.gpa}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-orange-100">
                              <span className="font-semibold text-gray-700">SAT:</span>
                              <span className="ml-2 text-gray-900">{college.requirements.sat}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-orange-100">
                              <span className="font-semibold text-gray-700">ACT:</span>
                              <span className="ml-2 text-gray-900">{college.requirements.act}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-orange-100">
                              <span className="font-semibold text-gray-700">TOEFL:</span>
                              <span className="ml-2 text-gray-900">{college.requirements.toefl}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-orange-100 md:col-span-2">
                              <span className="font-semibold text-gray-700">Essays:</span>
                              <span className="ml-2 text-gray-900">{college.requirements.essays}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-orange-100 md:col-span-2">
                              <span className="font-semibold text-gray-700">Recommendations:</span>
                              <span className="ml-2 text-gray-900">{college.requirements.recommendations}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 col-span-1 lg:col-span-2">
                  <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No colleges found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
