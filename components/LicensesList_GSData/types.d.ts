export type LicenseListProps = {
  licenses: LicenseProps[];
};

export type LicenseProps = {
  idLicense: string;
  color: string;
  id: number;
  name: string;
  idPsn: string;
};

export type GS_LicenseProps = {
  idLicense: string | undefined;
  color: string | undefined;
  id: number | undefined;
  name: string | undefined;
  idPsn: string | undefined;
};
