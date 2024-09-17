import { Controller, useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { RegistrationFormSchemaProps } from "@/validations/registrationForm";

export const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>();

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold mx-auto">
        Personal Information
      </legend>
      <Controller
        name="personalInformation.firstName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="first name"
            errorMessage={errors?.personalInformation?.firstName?.message}
          />
        )}
      />
      <Controller
        name="personalInformation.lastName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Last name"
            errorMessage={errors?.personalInformation?.lastName?.message}
          />
        )}
      />
      <Controller
        name="personalInformation.phone"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="tel"
            label="Phone"
            errorMessage={errors?.personalInformation?.phone?.message}
          />
        )}
      />
    </fieldset>
  );
};
