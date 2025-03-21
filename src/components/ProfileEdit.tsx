import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

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

const ProfileEdit: React.FC<ProfileEditProps> = ({ isOpen, onClose, onUpdate }) => {
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
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          ✖
        </button>

        <h2 className="text-lg font-bold mb-4">Update Profile</h2>

        {/* Profile Picture Upload Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="block text-sm font-medium">Profile Picture (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload-pic"
            />
            <label
              htmlFor="upload-pic"
              className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg inline-block mt-2 text-sm"
            >
              Upload
            </label>
            <p className="text-xs text-gray-500 mt-1">Max. upload size 2MB (Jpeg, Png)</p>
          </div>

          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-16 h-16 rounded-full shadow-md" />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full shadow-md"></div>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <PhoneInput
              country={"in"} // Default India
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
                className: "w-full p-2 border rounded-lg",
              
              }}
              inputStyle={{paddingLeft: "3rem"}}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              value="Australia"
              disabled
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Postal / Zip Code</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter Postal / Zip Code"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={handleCancel} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
            Cancel
          </button>
          <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
