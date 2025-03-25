import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  pincode: string;
}

interface ProfileEditProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedData: FormData & { profilePic: string | null }) => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({
  isOpen,
  onClose,
  onUpdate,
}) => {
  if (!isOpen) return null;

  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    country: "Australia",
    pincode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Phone Number Change
  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  // Validate Form
  const validateForm = (): boolean => {
    let errors: Record<string, string> = {};
    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!/^\d{10,15}$/.test(formData.phone))
      errors.phone = "Enter a valid phone number";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.pincode.match(/^\d{4,10}$/))
      errors.pincode = "Enter a valid postal code";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Update
  const handleUpdate = () => {
    if (validateForm()) {
      onUpdate({ ...formData, profilePic });
      onClose();
    }
  };

  // Handle Cancel
  const handleCancel = () => {
    setProfilePic(null);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      country: "Australia",
      pincode: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white dark:bg-themeBlack p-6 rounded-lg shadow-xl w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-black dark:text-white"
        >
          ✖
        </button>

        <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
          Update Profile
        </h2>

        {/* Profile Picture Upload Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              Profile Picture (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload-pic"
            />
            {/* <label
              htmlFor="upload-pic"
              className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg inline-block mt-2 text-sm"
            >
              Upload
            </label> */}
            <GradientButton
            text="Upload"
            className="w-1/2 px-3 py-3 text-center"
            onClick={handleCancel}
          />
            <p className="text-xs  mt-1 text-black dark:text-titleGray">
              Max. upload size 2MB (Jpeg, Png)
            </p>
          </div>

          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-16 h-16 rounded-md shadow-md"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-md shadow-md"></div>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:text-white dark:bg-[#575858]"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:text-white dark:bg-[#575858]"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              Phone Number
            </label>
            <PhoneInput
              country={"in"} // Default India
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
                className:
                  "w-full p-2 border rounded-lg  dark:text-white dark:bg-[#575858]",
              }}
              inputStyle={{ paddingLeft: "3rem" }}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:text-white dark:bg-[#575858]"
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:text-white dark:bg-[#575858]"
            />
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              Country
            </label>
            <input
              type="text"
              name="country"
              value="Australia"
              disabled
              className="w-full p-2 border rounded-lg bg-white dark:text-white text-black dark:bg-[#575858]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-titleGray">
              Postal / Zip Code
            </label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter Postal / Zip Code"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:text-white dark:bg-[#575858]"
            />
            {errors.pincode && (
              <p className="text-red-500 text-xs">{errors.pincode}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 mt-6">
          {/* <button onClick={handleCancel} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
            Cancel
          </button> */}
          <GradientButton
            text="Cancel"
            className="w-1/2 px-6 py-3 text-center"
            onClick={handleCancel}
          />
          {/* <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Update
          </button> */}
          <WhiteBtn
            text="Save"
            className="w-1/2 text-center"
            onClick={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
