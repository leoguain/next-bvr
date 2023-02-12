export type LicenseListProps = {
  licenses: LicenseProps[];
};

export type LicenseProps = {
  idLicense: string;
  color: string;
  drivers: DriverProps[];
};

export type DriverProps = {
  id: number;
  name: string;
  idPsn: string;
};
