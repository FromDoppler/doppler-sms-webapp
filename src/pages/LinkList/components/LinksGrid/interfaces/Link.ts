export interface Link {
  id: string;
  link: string;
  status: "await" | "approved" | "rejected";
  createdAt: Date;
  verifiedAt: Date | null;
}
