export type RegistrationsProps = {
  registrations: DocumentProps[];
};

export type RegistrationProps = {
  id: number | undefined;
  championship: string | undefined;
  date: string | undefined;
  time: string | undefined;
  rounds: string | undefined;
  game: string | undefined;
  platform: string | undefined;
  logo: string | undefined;
  statute: string | undefined;
  urlRegistration: string | undefined;
  urlWhatsApp: string | undefined;
};
