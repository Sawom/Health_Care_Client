export interface IPatient {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  gender: "MALE" | "FEMALE";
}
