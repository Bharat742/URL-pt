// // src/app/auth/signin/page.tsx

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// import { Metadata } from "next";
// import Signup from "@/components/Auth/Signup";

// export const metadata: Metadata = {
//   title: "Next.js Login Page | NextAdmin - Next.js Dashboard Kit",
//   description: "This is Next.js Login Page NextAdmin Dashboard Kit",
// };

// const SignUp: React.FC = () => {
//   return (
//     <div>
//       <Breadcrumb pageName="Sign Up" />
//       <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
//         <div className="flex flex-wrap items-center">
//           <div className="w-full xl:w-1/2">
//             <div className="w-full p-4 sm:p-12.5 xl:p-15">
//               <Signup />
//             </div>
//           </div>
//           <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
//             <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
//               <Link className="mb-10 inline-block" href="/">
//                 <Image
//                   className="hidden dark:block"
//                   src={"/images/logo/logo.svg"}
//                   alt="Logo"
//                   width={176}
//                   height={32}
//                 />
//                 <Image
//                   className="dark:hidden"
//                   src={"/images/logo/logo-dark.svg"}
//                   alt="Logo"
//                   width={176}
//                   height={32}
//                 />
//               </Link>
//               <p className="mb-3 text-xl font-medium text-dark dark:text-white">
//                 Please Register to your account
//               </p>
//               <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
//                 Welcome Back!
//               </h1>
//               <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
//                 Please Register to your account by completing the necessary
//                 fields below so you can login your account
//               </p>
//               <div className="mt-31">
//                 <Image
//                   src={"/images/grids/grid-02.svg"}
//                   alt="Logo"
//                   width={405}
//                   height={325}
//                   className="mx-auto dark:opacity-30"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// src/app/auth/signin/page.tsx

import React from "react";
import Link from "next/link";
import "@/css/style.css";
import Video from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import Signup from "@/components/Auth/Signup";
import GoogleSigninButton from "@/components/Auth/Signin/GoogleSigninButton";

export const metadata: Metadata = {
  title: "Next.js Login Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Login Page NextAdmin Dashboard Kit",
};

const SignUp: React.FC = () => {
  return (
    <div>
      <Breadcrumb pageName="Sign Up" />
      <div className="left-0 right-0 mx-auto w-10/12 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="items-left flex flex-wrap">
          <div className="hidden w-full  xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden  px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="#">
                <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                  Welcome
                </h1>
                <p className="mb-3  cursor-text font-medium text-dark dark:text-white">
                  Please Register for an account
                </p>
                {/* <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please Register to your account by completing the necessary
                fields below so you can login your account
              </p> */}

                <video
                  width="100%"
                  height="40%"
                  autoPlay
                  muted
                  loop
                  className="rounded-[10px]"
                >
                  <source src="/images/Account_Login.mp4" type="video/mp4" />
                </video>
                {/* <Video
                  className=" "
                  src={"/images/Account_Login.mp4"}
                  alt="Logo"
                  width={100}
                  height={100}
                /> */}
                {/* <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                /> */}
              </Link>

              {/* <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please Register to your account by completing the necessary
                fields below so you can login your account
              </p>
              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div> */}
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-10.5 xl:p-13">
              {/*  */}
              <GoogleSigninButton text="Sign in" />

              <div className="my-6 flex items-center justify-center">
                <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
                <div className="block min-w-fit bg-white px-4 text-center text-xl font-medium dark:bg-gray-dark">
                  Or
                </div>
                <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
              </div>
              {/*  */}
              <Signup />
            </div>
          </div>
          {/* <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Please Register to your account
              </p>
              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>
              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please Register to your account by completing the necessary
                fields below so you can login your account
              </p>
              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
