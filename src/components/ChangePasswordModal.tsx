import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { EyeIcon, EyeOffIcon } from "lucide-react";

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

const ChangePasswordModal: React.FC<ProfileEditProps> = ({
  isOpen,
  onClose,
  onUpdate,
}) => {
  if (!isOpen) return null;

  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
          Change Password
        </h2>

        {/* Form Fields */}
        <div className="space-y-3">
          <div className="relative mb-4">
            <p className="text-black dark:text-white text-[13px] ">
              Old Password
            </p>
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Enter New Password"
              className="p-3 h-10 w-full rounded-md bg-inputLight border-none mt-1 dark:text-white dark:bg-[#575858] text-gray-600 border border-gray-500 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-[35px] text-gray-400"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? (
                <EyeIcon size={18} />
              ) : (
                <EyeOffIcon size={18} />
              )}
            </button>
          </div>
          <div className="relative mb-4">
            <p className="text-black dark:text-white text-[13px] ">
              New Password
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              className="p-3 h-10 w-full rounded-md bg-inputLight border-none mt-1 dark:text-white dark:bg-[#575858] text-gray-600 border border-gray-500 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-[35px] text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon size={18} />
              ) : (
                <EyeOffIcon size={18} />
              )}
            </button>
          </div>
          <div className="relative mb-4">
            <p className="text-black dark:text-white text-[13px] ">
            Confirm  Password
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter New Password"
              className="p-3 h-10 w-full rounded-md bg-inputLight border-none mt-1 dark:text-white dark:bg-[#575858] text-gray-600 border border-gray-500 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-[35px] text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeIcon size={18} />
              ) : (
                <EyeOffIcon size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
