import { FooterMenu } from "./FooterMenu"
import { Logo } from "./Logo"
import { SocialLinks } from "./SocialLinks"

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-700 py-6 sm:px-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="grid grid-cols-2 gap-y-4 px-md max-w-footer mx-auto">
        <Logo size="sm" className="" />
        <p className="hidden xs:flex items-center xs:items-start col-start-1 row-start-2  text-base text-gray-200">Hyper-Efficient Edge Data Centres</p>
        <FooterMenu className="col-start-2 row-start-1 row-span-2 sm:row-span-1 xs:row-start-2 sm:row-start-1 xs:-translate-y-1 sm:translate-y-0 justify-center sm:justify-end xs:justify-start sm:items-center" />
        <SocialLinks className="xs:justify-end xs:items-end col-start-1 xs:col-start-2 xs:row-start-1 sm:row-start-2 sm:-translate-y-1.5" />
        <p className="flex xs:items-end col-span-2 col-start-1 xs:row-start-3 text-xs text-gray-200 md:text-center">&copy; {new Date().getFullYear()} SUB1.<br className="hidden" /> All rights reserved.</p>
      </div>
        {/* <div className="flex flex-col sm:items-start mx-auto  sm:max-w-7xl xl:max-w-[1440px]  px-8 sm:px-0 py-12 lg:py-16">
          <div className="inline-flex flex-col sm:w-full sm:justify-between sm:flex-row">
            <div className="col-1 flex flex-col">
              <div className="logo relative border-l-2 border-primary pl-3 text-white text-2xl tracking-tighter uppercase">Sub<span className="text-primary ml-2">1</span></div>
              <p className="text-base text-gray-200 mt-4">Hyper-Efficient Edge Data Centres</p>
            </div>

            <div className="col-2 flex flex-col">

              <div className="flex flex-col mt-6 sm:mt-0 text-left sm:text-right md:flex-row md:space-x-6">
                <div className="text-base text-gray-200 hover:text-gray-200 cursor-pointer">About</div>
                <div className="text-base text-gray-200 hover:text-gray-200 cursor-pointer">Why Us</div>
                <div className="privacy-link--footer text-base text-gray-200 hover:text-gray-200 cursor-pointer">Privacy Policy</div>
              </div>

              <div className="flex space-x-3 mt-8 sm:space-x-6 sm:ml-auto sm:mt-4">
                <a href="#" className="text-gray-200 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
      
                <a href="#" className="text-gray-200 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
          <div className="inline-flex pt-2 sm:pt-0 md:flex md:w-full md:pt-3 mt-6 sm:mt-0">
            <p className="text-base text-gray-200 md:text-center">&copy; 2023 SUB1. All rights reserved.</p>
          </div>
  
        </div> */}
    </footer>

  )
}