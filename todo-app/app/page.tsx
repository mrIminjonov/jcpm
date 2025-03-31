import Link from "next/link"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#1a5b8e] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-end text-sm">
          <Link href="#" className="mr-4 hover:underline">
            Register
          </Link>
          <Link href="#" className="hover:underline">
            Login
          </Link>
        </div>

        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-5xl font-bold mr-4">jcpm</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif">JCPM</h1>
              <p className="text-sm md:text-base">ISSN 2411-7390</p>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-2 border-t border-blue-400">
          <ul className="flex flex-wrap items-center">
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                About
              </Link>
            </li>
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                Editorial Ethics Policy
              </Link>
            </li>
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                Current
              </Link>
            </li>
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                Archives
              </Link>
            </li>
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                Announcements
              </Link>
            </li>
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                Information for Authors
              </Link>
            </li>
            <li className="mr-6 py-2">
              <Link href="#" className="hover:underline">
                Forthcoming
              </Link>
            </li>
            <li className="py-2 ml-auto">
              <button className="flex items-center hover:text-blue-200">
                <Search className="w-5 h-5 mr-1" />
                <span>Search</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          {/* Breadcrumbs */}
          <div className="text-sm mb-6 border-b pb-4">
            <Link href="#" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="#" className="text-blue-600 hover:underline">
              Archives
            </Link>
            <span className="mx-2">/</span>
            <span>Vol 10 No 4 (2024): JCPM</span>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="lg:w-3/4 lg:pr-8">
              {/* Journal Cover */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-[#1a5b8e] text-white p-4 w-full max-w-[250px] aspect-[3/4]">
                      <div className="text-2xl mb-4">jcpm</div>
                      <div className="text-center mt-8">
                        <div className="font-bold">JCPM</div>
                        <div className="mt-16 text-xs">Volume 10 Issue 4, 2024</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <p className="mb-4">
                      <strong>DOI:</strong>{" "}
                      <Link href="https://doi.org/10.17323/jle.2024.v10.i4" className="text-blue-600 hover:underline">
                        https://doi.org/10.17323/jle.2024.v10.i4
                      </Link>
                    </p>
                    <p>
                      <strong>Published:</strong> 2024-12-30
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Issue */}
              <div className="mb-8">
                <h2 className="text-xl font-normal text-gray-600 border-b pb-2 mb-4">Full Issue</h2>
                <ul className="list-disc pl-6">
                  <li className="mb-2">
                    <Link href="#" className="inline-flex items-center text-blue-600 hover:underline">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                      Volume 10 Issue 4
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Editorial */}
              <div className="mb-8">
                <h2 className="text-xl font-normal text-gray-600 border-b pb-2 mb-4">Editorial</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-1">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Appliances of Generative AI-Powered Language Tools in Academic Writing: A Scoping Review
                    </Link>
                  </h3>
                  <p className="mb-1">Lilia Raitskaya, Elena Tikhonova</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                      pdf
                    </Link>
                    <span>5-30</span>
                  </div>
                </div>
              </div>

              {/* Research Papers */}
              <div className="mb-8">
                <h2 className="text-xl font-normal text-gray-600 border-b pb-2 mb-4">Research Papers</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-1">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Hope Speech Detection Using Social Media Discourse (Posi-Vox-2024): A Transfer Learning Approach
                    </Link>
                  </h3>
                  <p className="mb-1">
                    Muhammad Ahmad, Sardar Usman, Humaira Farid, Iqra Ameer, Muhammad Muzzamil, Hmaza Ameer, Grigori
                    Sidorov, Ildar Batyrshin
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 uppercase"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                      PDF
                    </Link>
                    <span>31-43</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-1">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Synchronic and Diachronic Predictors of Socialness Ratings of Words
                    </Link>
                  </h3>
                  <p className="mb-1">Vladimir Bochkarev, Anna Shevlyakova, Andrey Achkeev</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 uppercase"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                      PDF
                    </Link>
                    <span>44-55</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-1">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Wrong Answers Only: Distractor Generation for Russian Reading Comprehension Questions Using a
                      Translated Dataset
                    </Link>
                  </h3>
                  <p className="mb-1">Nikita Login</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 uppercase"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                      PDF
                    </Link>
                    <span>56-70</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4 mt-8 lg:mt-0">
              <div className="mb-8">
                <h3 className="text-lg font-normal text-gray-600 mb-4">Language</h3>
                <ul>
                  <li className="mb-2">
                    <Link href="#" className="text-blue-600 hover:underline">
                      English
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Русский
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <Link
                  href="#"
                  className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
                >
                  Make a Submission
                </Link>
              </div>

              <div className="mb-8">
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Editorial Board
                </Link>
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Editors-in-Chief
                </Link>
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Editorial Team
                </Link>
              </div>

              <div className="mb-8">
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Forthcoming
                </Link>
              </div>

              <div className="mb-8">
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Editorial Ethics Policy
                </Link>
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  The Review Process
                </Link>
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Copyright and Open Access Notice
                </Link>
              </div>

              <div className="mb-8">
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Information for Authors
                </Link>
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Information for Reviewers
                </Link>
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Thanking our Reviewers
                </Link>
              </div>

              <div className="mb-8">
                <Link href="#" className="text-blue-600 hover:underline block mb-2">
                  Call for Special Issues
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 Journal of Language and Education. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
