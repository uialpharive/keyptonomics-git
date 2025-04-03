import React, { useState } from "react";
import AvailableBalance from "../components/AvailableBalance";
import { BiRightArrow } from "react-icons/bi";
import {
  LeftArrow,
  LeftArrowline,
  RightArrow,
  RightArrowline,
} from "../components/SvgCollection";
import ProfileEdit from "../components/ProfileEdit";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";
import ChangePassword from "../components/ChangePasswordModal";

const loginData = [
  { date: "2025-03-10 18:32", browser: "Chrome133.0.0.0", status: "Success" },
  { date: "2025-03-10 15:18", browser: "Chrome133.0.0.0", status: "Success" },
  { date: "2025-03-10 15:11", browser: "Chrome134.0.0.0", status: "Success" },
  { date: "2025-03-10 15:57", browser: "Chrome133.0.0.0", status: "Success" },
  { date: "2024-07-04 17:14", browser: "Chrome126.0.0.0", status: "Success" },
  { date: "2024-06-18 11:25", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:40", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-05-31 16:09", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-31 10:04", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-30 13:16", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-29 18:33", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-29 10:33", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-28 17:07", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-27 16:53", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-25 10:25", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:40", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-05-31 16:09", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-31 10:04", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-30 13:16", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-29 18:33", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-29 10:33", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-28 17:07", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-27 16:53", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-25 10:25", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:40", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-06-06 11:39", browser: "Chrome125.0.0.0", status: "Failed" },
  { date: "2024-05-31 16:09", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-31 10:04", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-30 13:16", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-29 18:33", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-29 10:33", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-28 17:07", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-27 16:53", browser: "Chrome125.0.0.0", status: "Success" },
  { date: "2024-05-25 10:25", browser: "Chrome125.0.0.0", status: "Success" },
];
const Profile: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const totalPages = Math.ceil(loginData.length / rowsPerPage);

  const currentData = loginData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<{
    profilePic: string | null;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    pincode: string;
  }>({
    profilePic: "",
    firstName: "Test",
    lastName: "26",
    phone: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
  });

  // Handle profile update
  const handleProfileUpdate = (updatedData: typeof profileData) => {
    setProfileData(updatedData);
  };
  const handleChangePassword = () => {
    alert("Password Changed");
  };

  return (
    <div>
      <AvailableBalance />
      {/* <div className="p-8 rounded-xl mb-10 border border-[#D3D3D34D] flex justify-between gap-5">
           <div className="flex justify-between">

           </div>
           <div className="flex flex-col">

           </div>
        </div> */}
      <div className="p-4">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center">
            {profileData.profilePic ? (
              <img
                src={profileData.profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-3"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-md mr-3"></div>
            )}
            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-gray-500 font-normal">
                KYC {profileData.phone ? "Verified" : "Unverified"}
              </p>
            </div>
          </div>

          {/* <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Edit Profile
        </button> */}
          <div className="flex flex-col">
            {" "}
            <GradientButton
              text="Edit Profile"
              className="px-10 py-2 mb-4"
              onClick={() => setIsModalOpen(true)}
            />
            <WhiteBtn
              text="Change Password"
              className=" mt-2"
              onClick={() => setPasswordModalOpen(true)}
            />
          </div>
        </div>

        {/* Profile Modal */}
        <ProfileEdit
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleProfileUpdate}
        />
        <ChangePassword
          isOpen={passwordModalOpen}
          onClose={() => setPasswordModalOpen(false)}
          onUpdate={handleChangePassword}
        />
      </div>
      <div className="xs:!p-4 py-6 px-6 xl:px-14 mx-auto bg-tradeCardBg rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-themeBlue mb-4">
          Login Activity
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left text-black dark:text-white">
                <th className="p-3">Date</th>
                <th className="p-3">Browser</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr
                  key={index}
                  className={`relative ${
                    index % 2 === 0
                      ? "bg-white dark:bg-[#0d142b] text-black dark:text-titleGray  rounded-lg border-transparent"
                      : "bg-transparent text-black dark:text-titleGray"
                  }`}
                >
                  <td
                    className={`p-3 whitespace-nowrap ${
                      index % 2 === 0 ? "rounded-l-lg" : ""
                    }`}
                  >
                    {item.date}
                  </td>
                  <td className="p-3  whitespace-nowrap">{item.browser}</td>
                  <td
                    className={`p-3 whitespace-nowrap ${
                      index % 2 === 0 ? "rounded-tr-lg" : ""
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4 text-black dark:text-titleGray">
          <div>Rows per page {rowsPerPage}</div>
          <div>
            {currentPage * rowsPerPage - rowsPerPage + 1}-
            {Math.min(currentPage * rowsPerPage, loginData.length)} of{" "}
            {loginData.length}
          </div>
          <div className="flex gap-1 ">
            <button
              className=" py-1"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <LeftArrowline />
            </button>
            <button
              className=" py-1 text-black dark:text-titleGray"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <LeftArrow />
            </button>
            <button
              className=" py-1 text-black dark:text-titleGray"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <RightArrow />
            </button>
            <button
              className=" py-1 text-black dark:text-titleGray"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <RightArrowline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
