"use client";

import { useMemo, useState } from "react";
import { COUNTRIES, countryFlag, dialForCountry } from "@/lib/countries";

type CountryPhoneFieldsProps = {
  countryId?: string;
  phoneId?: string;
};

export function CountryPhoneFields({
  countryId = "country",
  phoneId = "phone",
}: CountryPhoneFieldsProps) {
  const [country, setCountry] = useState("");
  const dial = useMemo(() => dialForCountry(country), [country]);

  return (
    <div className="f2 country-phone">
      <div className="fld">
        <label htmlFor={countryId}>Country *</label>
        <select
          id={countryId}
          name="country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select country</option>
          {COUNTRIES.map((c) => (
            <option key={c.iso + c.name} value={c.name}>
              {countryFlag(c.iso)} {c.name}
            </option>
          ))}
        </select>
        <div className="err" role="alert"></div>
      </div>
      <div className="fld">
        <label htmlFor={phoneId}>Mobile number *</label>
        <div className={`phone-field${dial ? " has-dial" : ""}`}>
          <span className="phone-dial" aria-hidden={!dial}>
            {dial || "—"}
          </span>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            placeholder="Digits only"
            required
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="tel-national"
            onInput={(e) => {
              const input = e.currentTarget;
              const cleaned = input.value.replace(/\D/g, "");
              if (cleaned !== input.value) input.value = cleaned;
            }}
          />
          <input type="hidden" name="countryCode" value={dial} />
        </div>
        <div className="err" role="alert"></div>
      </div>
    </div>
  );
}
