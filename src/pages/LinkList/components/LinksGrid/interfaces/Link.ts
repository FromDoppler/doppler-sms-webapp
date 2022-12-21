export interface Link {
  id: string;
  link: string;
  status: string;
  createdAt: Date;
  verifiedAt: Date | null;
}
