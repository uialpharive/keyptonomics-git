import React, { useState } from "react";

type FlagProps = {
  countryCode: string;
};

const Flag: React.FC<FlagProps> = ({ countryCode }) => {
  const [hasError, setHasError] = useState(false);
  const flagUrl = `https://flagsapi.com/${countryCode.toUpperCase()}/flat/32.png`;

  return (
    <img
      src={hasError ? "/fallback-flag.png" : flagUrl}
      alt={hasError ? "Fallback flag" : `${countryCode} flag`}
      className="w-[30px] h-[30px] rounded-full border border-gray-300 shadow-sm object-cover"
      onError={() => setHasError(true)}
    />
  );
};

const CountryFlags: React.FC = () => {
  const countryCodes: string[] = [
    "us", "gb", "in", "fr", "de", "it", "es", "jp", "cn", "br",
    "ca", "au", "ru", "mx", "za", "kr", "nl", "se", "ch", "ae",
    "ar", "tr", "id", "ng", "pk"
  ];

  return (
    <div className="grid grid-cols-5 gap-4 p-4 items-center justify-center">
      {countryCodes.map((code) => (
        <Flag key={code} countryCode={code} />
      ))}
    </div>
  );
};

export default CountryFlags;
